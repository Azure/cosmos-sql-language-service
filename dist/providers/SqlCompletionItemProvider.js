"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageServiceFacade_1 = require("../facade/LanguageServiceFacade");
var SqlCompletionItemProvider = /** @class */ (function () {
    function SqlCompletionItemProvider() {
        this.triggerCharacters = [" ", "."];
    }
    SqlCompletionItemProvider.prototype.provideCompletionItems = function (model, position, context, token) {
        var range = {
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column
        };
        var text = model.getValueInRange(range);
        text = this.triggerCharacters.indexOf(text.charAt(text.length - 1)) < 0 ? text.substring(0, text.length - 1) : text;
        return LanguageServiceFacade_1.LanguageServiceFacade.GetLanguageServiceParseResult(text, LanguageServiceFacade_1.ParseReason.GetCompletionWords);
    };
    return SqlCompletionItemProvider;
}());
exports.SqlCompletionItemProvider = SqlCompletionItemProvider;
//# sourceMappingURL=SqlCompletionItemProvider.js.map