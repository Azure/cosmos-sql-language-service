"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("q");
var monaco_editor_1 = require("monaco-editor");
var ParseReason;
(function (ParseReason) {
    ParseReason[ParseReason["GetCompletionWords"] = 1] = "GetCompletionWords";
    ParseReason[ParseReason["GetErrors"] = 2] = "GetErrors";
})(ParseReason = exports.ParseReason || (exports.ParseReason = {}));
var LanguageServiceFacade = /** @class */ (function () {
    function LanguageServiceFacade() {
    }
    LanguageServiceFacade.GetLanguageServiceParseResult = function (str, parseReason) {
        var timeExceeded = Q.Promise(function (resolve, reject) {
            var wait = setTimeout(function () {
                var words = {};
                resolve(words);
            }, LanguageServiceFacade.timeout);
        });
        var result = LanguageServiceFacade.GetParseResult(str, parseReason);
        return Q.race([timeExceeded, result]).then(function (words) {
            LanguageServiceFacade.workingWorker.terminate();
            return words;
        });
    };
    LanguageServiceFacade.timeout = 2000;
    LanguageServiceFacade.workingWorker = null;
    LanguageServiceFacade.GetParseResult = function (str, parseReason) {
        return Q.Promise(function (resolve) {
            if (LanguageServiceFacade.workingWorker != null) {
                LanguageServiceFacade.workingWorker.terminate();
            }
            var currentUrlWithoutQueryParamsAndHashRoute = window.location.protocol + "//" + window.location.host + window.location.pathname;
            var url = currentUrlWithoutQueryParamsAndHashRoute.replace(/\/[^\/]*$/, '/node_modules/@azure/cosmos-language-service/dist/worker/dist/LanguageServiceWorker.js');
            LanguageServiceFacade.workingWorker = new Worker(url);
            LanguageServiceFacade.workingWorker.onmessage = function (ev) {
                var processedResults = [];
                var parseResults = ev.data;
                if (parseReason === ParseReason.GetCompletionWords) {
                    parseResults.forEach(function (label) {
                        if (!!label) {
                            processedResults.push({
                                label: label,
                                insertText: label,
                                kind: monaco_editor_1.languages.CompletionItemKind.Keyword
                            });
                        }
                    });
                    var finalResult = { suggestions: processedResults };
                    resolve(finalResult);
                }
                else if (parseReason === ParseReason.GetErrors) {
                    parseResults.forEach(function (err) {
                        var mark = {
                            severity: monaco_editor_1.MarkerSeverity.Error,
                            message: err.Message,
                            startLineNumber: err.line,
                            startColumn: err.column,
                            endLineNumber: err.line,
                            endColumn: err.column
                        };
                        processedResults.push(mark);
                    });
                    resolve(processedResults);
                }
            };
            var source = {
                code: str,
                reason: parseReason
            };
            LanguageServiceFacade.workingWorker.postMessage(source);
        });
    };
    return LanguageServiceFacade;
}());
exports.LanguageServiceFacade = LanguageServiceFacade;
//# sourceMappingURL=LanguageServiceFacade.js.map