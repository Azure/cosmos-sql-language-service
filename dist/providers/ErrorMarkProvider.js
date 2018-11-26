"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageServiceFacade_1 = require("../facade/LanguageServiceFacade");
var ErrorMarkProvider = /** @class */ (function () {
    function ErrorMarkProvider() {
    }
    ErrorMarkProvider.getErrorMark = function (input) {
        return LanguageServiceFacade_1.LanguageServiceFacade.GetLanguageServiceParseResult(input, LanguageServiceFacade_1.ParseReason.GetErrors);
    };
    return ErrorMarkProvider;
}());
exports.ErrorMarkProvider = ErrorMarkProvider;
//# sourceMappingURL=ErrorMarkProvider.js.map