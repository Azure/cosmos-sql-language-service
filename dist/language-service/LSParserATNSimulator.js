"use strict";
//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATNState = require("antlr4/atn/ATNState");
var Transition = require("antlr4/atn/Transition");
var Errors_1 = require("antlr4/error/Errors");
var ParserATNSimulator_1 = require("antlr4/atn/ParserATNSimulator");
var PredictionMode_1 = require("antlr4/atn/PredictionMode");
var Token_1 = require("antlr4/Token");
var Utils_1 = require("./Utils");
var LSParserATNSimulator = /** @class */ (function (_super) {
    __extends(LSParserATNSimulator, _super);
    function LSParserATNSimulator(parser, atn, decisionToDFA, sharedContextCache, languageService) {
        var _this = _super.call(this, parser, atn, decisionToDFA, sharedContextCache) || this;
        _this.predictionMode = PredictionMode_1.PredictionMode.LL;
        _this.parser = parser;
        _this.atn = atn;
        _this.languageService = languageService;
        return _this;
    }
    LSParserATNSimulator.prototype.adaptivePredict = function (input, decision, outerContext) {
        var tokensLeft = -1;
        try {
            this.languageService.IsInPredict = true;
            this.languageService.EofReachedInPredict = false;
            if (decision >= 0) {
                return _super.prototype.adaptivePredict.call(this, input, decision, outerContext);
            }
        }
        catch (error) {
            if (error instanceof Errors_1.NoViableAltException && error.offendingToken.type === Token_1.Token.EOF) {
                tokensLeft = error.offendingToken.tokenIndex - this.parser.getCurrentToken().tokenIndex;
                return 1;
            }
            else {
                throw error;
            }
        }
        finally {
            if (this.languageService.EofReachedInPredict) {
                if (tokensLeft < 0) {
                    tokensLeft = 0;
                    while (input.LA(tokensLeft + 1) != Token_1.Token.EOF) {
                        tokensLeft++;
                    }
                }
                if (tokensLeft > 0) {
                    var states = this.CalculateValidStates(input, tokensLeft);
                    this.languageService.RecordErrorStatesBeforeEof(states);
                }
            }
            this.languageService.IsInPredict = false;
        }
    };
    LSParserATNSimulator.prototype.CalculateValidStates = function (input, tokensLeft) {
        var _this = this;
        var state = this.atn.states[this.parser.state];
        var states = [{
                state: state,
                transitionStates: []
            }];
        var validStates = [];
        var _loop_1 = function (index) {
            var _states = [];
            var nextToken = input.LA(index);
            states.forEach(function (s) { _states = _states.concat(_this.ConsumeSingleTokenAhead(s, nextToken)).filter(Utils_1.Utils.notDuplicate); });
            states = _states.filter(Utils_1.Utils.notDuplicate);
        };
        // one step each time. Consume a single token each time.
        for (var index = 1; index <= tokensLeft; index++) {
            _loop_1(index);
        }
        states.forEach(function (s) { validStates = validStates.concat(_this.SearchValidStates(s)); });
        return validStates.map(function (s) { return s.state; }).filter(Utils_1.Utils.notDuplicate);
    };
    LSParserATNSimulator.prototype.ConsumeSingleTokenAhead = function (stateWithTransitionPath, matchToken) {
        var validStates = [];
        var currentState = stateWithTransitionPath.state;
        var nextStateWithTransitionPath = {
            state: null,
            transitionStates: stateWithTransitionPath.transitionStates.slice()
        };
        if (nextStateWithTransitionPath.transitionStates.length > 0 &&
            nextStateWithTransitionPath.transitionStates[nextStateWithTransitionPath.transitionStates.length - 1].ruleIndex === currentState.ruleIndex) {
            nextStateWithTransitionPath.transitionStates.pop();
        }
        nextStateWithTransitionPath.transitionStates.push(currentState);
        if (!(currentState instanceof ATNState.RuleStopState)) {
            for (var index = 0; index < currentState.transitions.length; index++) {
                var transition = currentState.transitions[index];
                var destinationChildState = transition.target;
                nextStateWithTransitionPath.state = destinationChildState;
                if (!transition.isEpsilon) {
                    if (transition.label != null && transition.label.contains(matchToken)) {
                        validStates = validStates.concat(this.SearchValidStates(nextStateWithTransitionPath));
                    }
                }
                else {
                    validStates = validStates.concat(this.ConsumeSingleTokenAhead(nextStateWithTransitionPath, matchToken)).filter(Utils_1.Utils.notDuplicate);
                }
            }
        }
        return validStates.filter(Utils_1.Utils.notEmpty);
    };
    LSParserATNSimulator.prototype.SearchValidStates = function (stateWithTransitionPath) {
        var validStates = [];
        if (!this.IsLastStateBeforeRuleStopState(stateWithTransitionPath.state)) {
            validStates.push(stateWithTransitionPath);
        }
        else {
            validStates = this.BackTracingAndFindActiveStates(stateWithTransitionPath).filter(Utils_1.Utils.notDuplicate);
            if (this.HasActiveChildrenState(stateWithTransitionPath.state)) {
                validStates.push(stateWithTransitionPath);
            }
        }
        return validStates;
    };
    LSParserATNSimulator.prototype.BackTracingAndFindActiveStates = function (stateWithTransitionPath) {
        var validStates = [];
        var completedRuleIndex = stateWithTransitionPath.state.ruleIndex;
        var statesStack = this.GetLastStateInDifferentRulesFomStatesStack(stateWithTransitionPath.transitionStates, completedRuleIndex);
        var currentStateIndex = statesStack.length - 1;
        var keepBackTracing = true;
        while (keepBackTracing && currentStateIndex >= 0) {
            var currentState = statesStack[currentStateIndex];
            keepBackTracing = false;
            var followingStates = this.GetRuleFollowingState(currentState, completedRuleIndex);
            for (var index = 0; index < followingStates.length; index++) {
                var lastStateBeforeRuleStopState = false;
                var haveActiveChildrenStatesInCurrentRule = false;
                var transitions = followingStates[index].transitions;
                while (transitions.length > 0) {
                    var epsilonTrans = [];
                    for (var tIndex = 0; tIndex < transitions.length; tIndex++) {
                        if (transitions[tIndex].isEpsilon) {
                            if (transitions[tIndex] instanceof Transition.RuleTransition) {
                                haveActiveChildrenStatesInCurrentRule = true;
                            }
                            else if (transitions[tIndex].target instanceof ATNState.RuleStopState) {
                                lastStateBeforeRuleStopState = true;
                            }
                            else {
                                epsilonTrans = epsilonTrans.concat(transitions[tIndex].target.transitions);
                            }
                        }
                        else {
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
                    var newValidState = {
                        state: followingStates[index],
                        transitionStates: statesStack.slice(0, currentStateIndex + 1)
                    };
                    validStates.push(newValidState);
                }
            }
            currentStateIndex--;
            if (keepBackTracing) {
                completedRuleIndex = followingStates[0].ruleIndex;
            }
        }
        return validStates.filter(Utils_1.Utils.notEmpty);
    };
    LSParserATNSimulator.prototype.GetLastStateInDifferentRulesFomStatesStack = function (statesStack, lastMatchedRuleIndex) {
        var lastStates = [];
        var matchedRuleIndex = lastMatchedRuleIndex;
        for (var currentStateIndex = statesStack.length - 1; currentStateIndex >= 0; currentStateIndex--) {
            if (statesStack[currentStateIndex].ruleIndex === matchedRuleIndex) {
                continue;
            }
            else {
                lastStates.push(statesStack[currentStateIndex]);
                matchedRuleIndex = statesStack[currentStateIndex].ruleIndex;
            }
        }
        lastStates.reverse();
        return lastStates.filter(Utils_1.Utils.notEmpty);
    };
    LSParserATNSimulator.prototype.GetRuleFollowingState = function (state, ruleIndex) {
        var followingStates = [];
        if (state instanceof ATNState.RuleStopState) {
            return followingStates;
        }
        var transitions = state.transitions;
        while (transitions.length > 0) {
            var epsilonTrans = [];
            for (var index = 0; index < transitions.length; index++) {
                if (transitions[index].isEpsilon) {
                    if (transitions[index] instanceof Transition.RuleTransition) {
                        if (transitions[index].ruleIndex === ruleIndex) {
                            followingStates.push(transitions[index].followState);
                        }
                    }
                    else if (!(transitions[index].target instanceof ATNState.RuleStopState)) {
                        epsilonTrans = epsilonTrans.concat(transitions[index].target.transitions);
                    }
                }
            }
            transitions = epsilonTrans;
        }
        return followingStates.filter(Utils_1.Utils.notEmpty);
    };
    // Means with this state, parser can make up a complete rule. 
    LSParserATNSimulator.prototype.IsLastStateBeforeRuleStopState = function (state) {
        var transitions = state.transitions;
        while (transitions.length > 0) {
            var epsilonTrans = [];
            for (var index = 0; index < transitions.length; index++) {
                if (transitions[index].isEpsilon) {
                    if (transitions[index].target instanceof ATNState.RuleStopState) {
                        return true;
                    }
                    else if (!(transitions[index] instanceof Transition.RuleTransition)) {
                        epsilonTrans = epsilonTrans.concat(transitions[index].target.transitions);
                    }
                }
            }
            transitions = epsilonTrans;
        }
        return false;
    };
    LSParserATNSimulator.prototype.HasActiveChildrenState = function (state) {
        var transitions = state.transitions;
        while (transitions.length > 0) {
            var epsilonTrans = [];
            for (var index = 0; index < transitions.length; index++) {
                if (transitions[index].isEpsilon) {
                    if (transitions[index] instanceof Transition.RuleTransition) {
                        return true;
                    }
                    else if (!(transitions[index].target instanceof ATNState.RuleStopState)) {
                        epsilonTrans = epsilonTrans.concat(transitions[index].target.transitions);
                    }
                }
                else {
                    return true;
                }
            }
            transitions = epsilonTrans;
        }
        return false;
    };
    return LSParserATNSimulator;
}(ParserATNSimulator_1.ParserATNSimulator));
exports.LSParserATNSimulator = LSParserATNSimulator;
//# sourceMappingURL=LSParserATNSimulator.js.map