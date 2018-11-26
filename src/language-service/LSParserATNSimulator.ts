//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------

import * as ATNState from "antlr4/atn/ATNState";
import * as Transition from "antlr4/atn/Transition";
import { ATN } from "antlr4/atn/ATN";
import { CommonTokenStream } from "antlr4/CommonTokenStream";
import { DFA } from "antlr4/dfa/DFA";
import { LanguageService } from "./LanguageService";
import { NoViableAltException } from "antlr4/error/Errors";
import { Parser } from "antlr4/Parser";
import { ParserATNSimulator } from "antlr4/atn/ParserATNSimulator";
import { PredictionContextCache } from "antlr4/PredictionContext";
import { PredictionMode } from "antlr4/atn/PredictionMode";
import { RuleContext } from "antlr4/RuleContext";
import { Token } from "antlr4/Token";
import { Utils } from "./Utils";

interface StateWithTransitionPath {
    state : ATNState.ATNState,
    transitionStates : ATNState.ATNState[]
}

export class LSParserATNSimulator extends ParserATNSimulator {
    private predictionMode = PredictionMode.LL;

    private parser : Parser;

    private atn : ATN;

    private languageService : LanguageService;

    constructor(parser : Parser, atn : ATN, decisionToDFA : Array<DFA>, sharedContextCache : PredictionContextCache, languageService : LanguageService) {
        super(parser, atn, decisionToDFA, sharedContextCache);
        this.parser = parser;
        this.atn = atn;
        this.languageService = languageService;
    }

    public adaptivePredict(input : CommonTokenStream, decision : number, outerContext : RuleContext) {
        let tokensLeft : number = -1;

        try {
            this.languageService.IsInPredict = true;
            this.languageService.EofReachedInPredict = false;

            if (decision >= 0) {
                return super.adaptivePredict(input, decision, outerContext);
            }
        } 
        catch(error) {
            if (error instanceof NoViableAltException && error.offendingToken.type === Token.EOF) {
                tokensLeft = error.offendingToken.tokenIndex - this.parser.getCurrentToken().tokenIndex;
                return 1;
            } else {
                throw error;
            }
        }
        finally {
            if (this.languageService.EofReachedInPredict) {
                if (tokensLeft < 0) {
                    tokensLeft = 0;
                    while (input.LA(tokensLeft + 1) != Token.EOF) {
                        tokensLeft++;
                    }                  
                }

                if (tokensLeft > 0) {
                    let states = this.CalculateValidStates(input, tokensLeft);
                    this.languageService.RecordErrorStatesBeforeEof(states);
                }
            }

            this.languageService.IsInPredict = false;
        }
    }

    private CalculateValidStates(input : CommonTokenStream, tokensLeft : number): ATNState.ATNState[] {
        let state = this.atn.states[this.parser.state];
        let states : StateWithTransitionPath[] = [ {
            state : state,
            transitionStates : []
        } ];
        let validStates : StateWithTransitionPath[] = [];

        // one step each time. Consume a single token each time.
        for (let index = 1; index <= tokensLeft; index++) {
            let _states : StateWithTransitionPath[] = [];
            let nextToken : number = input.LA(index);
                
            states.forEach(s => { _states = _states.concat(this.ConsumeSingleTokenAhead(s, nextToken)).filter(Utils.notDuplicate); });
            states = _states.filter(Utils.notDuplicate); 
        }

        states.forEach(s => { validStates = validStates.concat(this.SearchValidStates(s)); });  
        return validStates.map(s => s.state).filter(Utils.notDuplicate);
    }

    private ConsumeSingleTokenAhead(stateWithTransitionPath : StateWithTransitionPath, matchToken : Token) : StateWithTransitionPath[] {
        let validStates : StateWithTransitionPath[] = [];
        let currentState = stateWithTransitionPath.state;
        let nextStateWithTransitionPath : StateWithTransitionPath = {
            state : null, // Temporary null
            transitionStates : stateWithTransitionPath.transitionStates.slice()
        };

        if(nextStateWithTransitionPath.transitionStates.length > 0 && 
            nextStateWithTransitionPath.transitionStates[nextStateWithTransitionPath.transitionStates.length - 1].ruleIndex === currentState.ruleIndex) {
            nextStateWithTransitionPath.transitionStates.pop();
        }

        nextStateWithTransitionPath.transitionStates.push(currentState);

        if (!(currentState instanceof ATNState.RuleStopState)) {
            for (let index = 0;index < currentState.transitions.length;index++) {
                let transition = currentState.transitions[index];
                let destinationChildState = transition.target;
                nextStateWithTransitionPath.state = destinationChildState;

                if (!transition.isEpsilon) {
                    if (transition.label != null && transition.label.contains(matchToken)) {
                        validStates = validStates.concat(this.SearchValidStates(nextStateWithTransitionPath));
                    }
                } else {
                    validStates = validStates.concat(this.ConsumeSingleTokenAhead(nextStateWithTransitionPath, matchToken)).filter(Utils.notDuplicate);
                }
            }
        }

        return validStates.filter(Utils.notEmpty);
    }

    private SearchValidStates(stateWithTransitionPath : StateWithTransitionPath) : StateWithTransitionPath[] {
        let validStates : StateWithTransitionPath[] = [];

        if (!this.IsLastStateBeforeRuleStopState(stateWithTransitionPath.state)) {                 
            validStates.push(stateWithTransitionPath);
        } else {
            validStates = this.BackTracingAndFindActiveStates(stateWithTransitionPath).filter(Utils.notDuplicate);

            if (this.HasActiveChildrenState(stateWithTransitionPath.state)) {
                validStates.push(stateWithTransitionPath);
            }
        }
        return validStates;
    }

    private BackTracingAndFindActiveStates(stateWithTransitionPath : StateWithTransitionPath) : StateWithTransitionPath[] {
        let validStates : StateWithTransitionPath[] = [];
        let completedRuleIndex = stateWithTransitionPath.state.ruleIndex;
        let statesStack = this.GetLastStateInDifferentRulesFomStatesStack(stateWithTransitionPath.transitionStates, completedRuleIndex);
        let currentStateIndex = statesStack.length - 1;
        let keepBackTracing : boolean = true;

        while (keepBackTracing && currentStateIndex >= 0) {
            let currentState = statesStack[currentStateIndex];
            keepBackTracing = false;
            let followingStates = this.GetRuleFollowingState(currentState, completedRuleIndex);
          
            for (let index = 0;index < followingStates.length; index++) {
                let lastStateBeforeRuleStopState : boolean = false;
                let haveActiveChildrenStatesInCurrentRule : boolean = false;
                let transitions = followingStates[index].transitions;
                while (transitions.length > 0){
                    let epsilonTrans = [];
                    for (let tIndex = 0;tIndex < transitions.length; tIndex++) {
                        if (transitions[tIndex].isEpsilon) {
                            if (transitions[tIndex] instanceof Transition.RuleTransition) {
                                haveActiveChildrenStatesInCurrentRule = true;
                            } else if (transitions[tIndex].target instanceof ATNState.RuleStopState) {
                                lastStateBeforeRuleStopState = true;
                            } else {
                                epsilonTrans = epsilonTrans.concat(transitions[tIndex].target.transitions);
                            }
                        } else {
                            haveActiveChildrenStatesInCurrentRule = true;
                        }
                    }

                    transitions = epsilonTrans;
                    if (lastStateBeforeRuleStopState && haveActiveChildrenStatesInCurrentRule) {
                        // We can jump out of loop ahead of schedule.
                        break;
                    }
                }

                if (lastStateBeforeRuleStopState) {
                    keepBackTracing = true;
                }

                if (haveActiveChildrenStatesInCurrentRule) {
                    //validStates.push(followingStates[index]);
                    let newValidState : StateWithTransitionPath = {
                        state : followingStates[index], 
                        transitionStates : statesStack.slice(0, currentStateIndex + 1)
                    };
                    validStates.push(newValidState);
                }
            }

            currentStateIndex--;

            if(keepBackTracing) {
                completedRuleIndex = followingStates[0].ruleIndex;
            }
        }
        
        return validStates.filter(Utils.notEmpty);
    }

    private GetLastStateInDifferentRulesFomStatesStack(statesStack : ATNState.ATNState[], lastMatchedRuleIndex : number) : ATNState.ATNState[] {
        let lastStates : ATNState.ATNState[] = [];
        let matchedRuleIndex = lastMatchedRuleIndex;
        for(let currentStateIndex = statesStack.length - 1; currentStateIndex >= 0; currentStateIndex--) {
            if(statesStack[currentStateIndex].ruleIndex === matchedRuleIndex) {
                continue;
            } else {
                lastStates.push(statesStack[currentStateIndex]);
                matchedRuleIndex = statesStack[currentStateIndex].ruleIndex;
            }
        }
        
        lastStates.reverse();
        return lastStates.filter(Utils.notEmpty);
    }

    private GetRuleFollowingState(state : ATNState.ATNState, ruleIndex : number) : ATNState.ATNState[] {
        let followingStates : ATNState.ATNState[] = [];

        if(state instanceof ATNState.RuleStopState) {
            return followingStates;
        }

        let transitions = state.transitions;

        while(transitions.length > 0) {
            let epsilonTrans = [];
            for (let index = 0;index < transitions.length;index++) {
                if (transitions[index].isEpsilon) {
                    if (transitions[index] instanceof Transition.RuleTransition) {
                        if (transitions[index].ruleIndex === ruleIndex) {
                            followingStates.push(transitions[index].followState);
                        }
                    } else if (!(transitions[index].target instanceof ATNState.RuleStopState)) {
                        epsilonTrans = epsilonTrans.concat(transitions[index].target.transitions);
                    }
                }
            }

            transitions = epsilonTrans;
        }

        return followingStates.filter(Utils.notEmpty);
    }

    // Means with this state, parser can make up a complete rule. 
    private IsLastStateBeforeRuleStopState(state : ATNState.ATNState) {
        let transitions = state.transitions;

        while(transitions.length > 0) {
            let epsilonTrans = [];
            for (let index = 0;index < transitions.length;index++) {
                if (transitions[index].isEpsilon) {
                    if (transitions[index].target instanceof ATNState.RuleStopState) {
                        return true;
                    } else if (!(transitions[index] instanceof Transition.RuleTransition)) {
                        epsilonTrans = epsilonTrans.concat(transitions[index].target.transitions);
                    }
                }
            }

            transitions = epsilonTrans;
        }        
        return false;
    }

    private HasActiveChildrenState(state : ATNState.ATNState) : boolean {
        let transitions = state.transitions;

        while(transitions.length > 0) {
            let epsilonTrans = [];
            for (let index = 0;index < transitions.length;index++) {
                if (transitions[index].isEpsilon) {
                    if (transitions[index] instanceof Transition.RuleTransition) {
                        return true;
                    } else if (!(transitions[index].target instanceof ATNState.RuleStopState)) {
                        epsilonTrans = epsilonTrans.concat(transitions[index].target.transitions);
                    }
                } else {
                    return true;
                }
            }

            transitions = epsilonTrans;
        }        
        return false;
    }
}