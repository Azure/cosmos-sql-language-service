"use strict";
//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4 = require("antlr4");
var InputStream_1 = require("antlr4/InputStream");
var IntervalSet_1 = require("antlr4/IntervalSet");
var LSCommonTokenStream_1 = require("./LSCommonTokenStream");
var LSErrorListener_1 = require("./LSErrorListener");
var LSParserATNSimulator_1 = require("./LSParserATNSimulator");
var Utils_1 = require("./Utils");
var StateContext = /** @class */ (function () {
    function StateContext(state, ruleIndex, expectedTokens, ruleStack) {
        this.State = state;
        this.RuleIndex = ruleIndex;
        this.ExpectedTokens = expectedTokens;
        this.RuleStack = ruleStack;
    }
    return StateContext;
}());
var LanguageService = /** @class */ (function () {
    function LanguageService(lexerCtr, parserCtr, keywordsDict) {
        var _this = this;
        this._lexer = null;
        this._parser = null;
        this._keywordsDict = null;
        this.StatesBeforeEof = {};
        this.SyntaxErrors = [];
        this.EofReached = false;
        this.EofReachedInPredict = false;
        this.ExThrownAfterEofReached = false;
        this.IsInPredict = false;
        this.GetExpectedTokenStrs = function () {
            var intervalSets = new IntervalSet_1.IntervalSet();
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
                        var keyword = this._keywordsDict[tokenString.replace(/^\'|\'$/gi, "")];
                        if (keyword != null) {
                            expectedStrings.push(keyword);
                        }
                    }
                }
            }
            return expectedStrings.filter(Utils_1.Utils.notDuplicate);
        };
        this.RecordStateBeforeEof = function () {
            if (!this.IsInPredict) {
                this.EofReached = true;
                if (!this.ExThrownAfterEofReached) {
                    if (this.StatesBeforeEof[this._parser.state] == undefined || this.StatesBeforeEof[this._parser.state] == null) {
                        this.StatesBeforeEof[this._parser.state] = new StateContext(this._parser.state, this._parser._ctx.ruleIndex, this._parser.getExpectedTokens(), this._parser.getRuleInvocationStack());
                    }
                }
            }
            else {
                this.EofReachedInPredict = true;
            }
        };
        this.RecordErrorStatesBeforeEof = function (states) {
            var _this = this;
            if (states.length > 0) {
                states.forEach(function (state) {
                    if (state != null) {
                        if (_this.StatesBeforeEof[state.stateNumber] == undefined || _this.StatesBeforeEof[state.stateNumber] == null) {
                            _this.StatesBeforeEof[state.stateNumber] = new StateContext(state.stateNumber, state.ruleIndex, _this._parser._interp.atn.nextTokens(state), _this._parser.getRuleInvocationStack());
                        }
                    }
                });
            }
        };
        this.AddSyntaxError = function (msg, line, column) {
            var error = {
                line: line,
                column: column,
                Message: msg
            };
            _this.SyntaxErrors.push(error);
            if (_this.EofReached) {
                _this.ExThrownAfterEofReached = true;
            }
        };
        this._lexerCtr = lexerCtr;
        this._parserCtr = parserCtr;
        this._keywordsDict = keywordsDict;
    }
    LanguageService.prototype._parse = function (input) {
        var _this = this;
        this.PrepareParse();
        this._lexer = new this._lexerCtr(new InputStream_1.InputStream(input));
        this._parser = new this._parserCtr(new LSCommonTokenStream_1.LSCommonTokenStream(this._lexer));
        this._parser.getTokenStream().EofListener = function () {
            _this.RecordStateBeforeEof();
        };
        this._parser.removeErrorListeners();
        this._parser.addErrorListener(new LSErrorListener_1.LSErrorListener(function (msg, line, column) {
            _this.AddSyntaxError(msg, line, column);
        }));
        var decisionsToDFA = this._parser.atn.decisionToState.map(function (ds, index) { return new antlr4.dfa.DFA(ds, index); });
        this._parser._interp = new LSParserATNSimulator_1.LSParserATNSimulator(this._parser, this._parser.atn, decisionsToDFA, new antlr4.PredictionContextCache(), this);
        this._parser.root();
    };
    LanguageService.prototype.PrepareParse = function () {
        this.EofReached = false;
        this.EofReachedInPredict = false;
        this.ExThrownAfterEofReached = false;
        this.StatesBeforeEof = {};
        this.SyntaxErrors = [];
    };
    LanguageService.prototype.getCompletionWords = function (input) {
        this._parse(input);
        return this.GetExpectedTokenStrs();
    };
    LanguageService.prototype.getSyntaxErrors = function (input) {
        this._parse(input);
        return this.SyntaxErrors;
    };
    return LanguageService;
}());
exports.LanguageService = LanguageService;
//# sourceMappingURL=LanguageService.js.map