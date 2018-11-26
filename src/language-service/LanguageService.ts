//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------

import * as antlr4 from "antlr4";
import * as ATNState from "antlr4/atn/ATNState";
import { InputStream } from "antlr4/InputStream";
import { IntervalSet } from "antlr4/IntervalSet";
import { Lexer } from "antlr4/Lexer";
import { LSCommonTokenStream } from "./LSCommonTokenStream";
import { LSErrorListener } from "./LSErrorListener";
import { LSParserATNSimulator } from "./LSParserATNSimulator";
import { Parser } from "antlr4/Parser";
import { Utils } from "./Utils";

interface ErrorMarkItem {
    line: number;
    column: number;
    Message: string;
}

interface StateContextDict {
    [key : number] : StateContext
}

class StateContext {
    public State : number;

    public ExpectedTokens : IntervalSet;

    public RuleIndex : number;
    
    public RuleStack : string[];

    constructor(state : number, ruleIndex : number, expectedTokens : IntervalSet, ruleStack : string[]) {
        this.State = state;
        this.RuleIndex = ruleIndex;
        this.ExpectedTokens = expectedTokens;
        this.RuleStack = ruleStack;
    }
}

export class LanguageService {
    private _lexerCtr : any;
    private _parserCtr : any;
    private _lexer : Lexer = null;
    private _parser : Parser = null;

    private _keywordsDict: { [key : string] : string } = null;

    public StatesBeforeEof : StateContextDict = {};

    public SyntaxErrors : ErrorMarkItem[] = [];

    private EofReached : boolean = false;

    public EofReachedInPredict : boolean = false;

    private ExThrownAfterEofReached : boolean = false;

    public IsInPredict : boolean = false;

    constructor(lexerCtr : Lexer, parserCtr : Parser, keywordsDict : { [key : string] : string }) {
        this._lexerCtr = lexerCtr;
        this._parserCtr = parserCtr;
        this._keywordsDict = keywordsDict;
    }

    private _parse(input : string) {
        this.PrepareParse();
        this._lexer = new this._lexerCtr(new InputStream(input));
        this._parser = new this._parserCtr(new LSCommonTokenStream(this._lexer));

        this._parser.getTokenStream().EofListener = () => {
            this.RecordStateBeforeEof();
        };

        this._parser.removeErrorListeners();
        this._parser.addErrorListener(new LSErrorListener(
            (msg, line, column) => {
                this.AddSyntaxError(msg, line, column);
            }
        ));

        let decisionsToDFA = this._parser.atn.decisionToState.map((ds, index) => { return new antlr4.dfa.DFA(ds, index);});
        this._parser._interp = new LSParserATNSimulator(this._parser, this._parser.atn, decisionsToDFA, new antlr4.PredictionContextCache(), this);
        this._parser.root();
    }

    public GetExpectedTokenStrs = function() : string[] {
        let intervalSets = new IntervalSet();
        for (var key in this.StatesBeforeEof) {
            if (this.StatesBeforeEof.hasOwnProperty(key)) {
                intervalSets.addSet(this.StatesBeforeEof[key].ExpectedTokens);
            }
        }
    
        var expectedStrings = [];
        if (intervalSets.intervals === null) {
            return expectedStrings;
        }

        for (var i = 0; i < intervalSets.intervals.length; i++) {
            var v = intervalSets.intervals[i];
            if (v.start < 0) {
                continue;
            }

            for (var j = v.start; j < v.stop; j++) {
                var tokenString = this._parser._input.tokenSource.symbolicNames[j];
                if (tokenString != null) {
                    let keyword = this._keywordsDict[tokenString.replace(/^\'|\'$/gi, "")];
                    if (keyword != null) {
                        expectedStrings.push(keyword);
                    }
                }
            }
        }

        return expectedStrings.filter(Utils.notDuplicate);
    }

    public RecordStateBeforeEof = function() {
        if (!this.IsInPredict) {
            this.EofReached = true;
            if (!this.ExThrownAfterEofReached) {
                if (this.StatesBeforeEof[this._parser.state] == undefined || this.StatesBeforeEof[this._parser.state] == null) {
                    this.StatesBeforeEof[this._parser.state] = new StateContext(this._parser.state, this._parser._ctx.ruleIndex, this._parser.getExpectedTokens(), this._parser.getRuleInvocationStack());
                }
            }
        } else {
            this.EofReachedInPredict = true;
        }
    }   

    public RecordErrorStatesBeforeEof = function(states : ATNState.ATNState[]) {
        if (states.length > 0) {
            states.forEach(state => {
                if (state != null) {
                    if (this.StatesBeforeEof[state.stateNumber] == undefined || this.StatesBeforeEof[state.stateNumber] == null) {
                        this.StatesBeforeEof[state.stateNumber] = new StateContext(state.stateNumber, state.ruleIndex, this._parser._interp.atn.nextTokens(state), this._parser.getRuleInvocationStack());
                    }
                }       
            });
        }
    }

    public AddSyntaxError = (msg : string, line : number, column : number) : any => {
        let error : ErrorMarkItem = {
            line : line, 
            column : column,
            Message : msg
        };

        this.SyntaxErrors.push(error);

        if (this.EofReached) {
            this.ExThrownAfterEofReached = true;
        }
    }   

    public PrepareParse() : any {
        this.EofReached = false;
        this.EofReachedInPredict = false;
        this.ExThrownAfterEofReached = false;
        this.StatesBeforeEof = {};
        this.SyntaxErrors = [];
    }

    public getCompletionWords(input : string) : string[] {
        this._parse(input);
        return this.GetExpectedTokenStrs();
    }

    public getSyntaxErrors(input : string) : ErrorMarkItem[] {
        this._parse(input);
        return this.SyntaxErrors;
    }    
}