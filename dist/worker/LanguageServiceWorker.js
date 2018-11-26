"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageService_1 = require("../language-service/LanguageService");
var CosmosDBSqlLexer_1 = require("../cosmosdb-sql/generated/CosmosDBSqlLexer");
var CosmosDBSqlParser_1 = require("../cosmosdb-sql/generated/CosmosDBSqlParser");
var CosmosDBSqlKeywords_1 = require("../cosmosdb-sql/grammar/CosmosDBSqlKeywords");
var ParseReason;
(function (ParseReason) {
    ParseReason[ParseReason["GetCompletionWords"] = 1] = "GetCompletionWords";
    ParseReason[ParseReason["GetErrors"] = 2] = "GetErrors";
})(ParseReason || (ParseReason = {}));
var LanguageServiceWorker;
(function (LanguageServiceWorker) {
    // Respond to message from parent thread
    onmessage = function (event) {
        var code = event.data.code;
        var reason = event.data.reason;
        var parseResults = [];
        var languageService = new LanguageService_1.LanguageService(CosmosDBSqlLexer_1.CosmosDBSqlLexer, CosmosDBSqlParser_1.CosmosDBSqlParser, CosmosDBSqlKeywords_1.CosmosDBSqlKeywords.keywordsRegisteredForCompletion);
        if (reason == ParseReason.GetCompletionWords) {
            parseResults = languageService.getCompletionWords(code);
        }
        else if (reason == ParseReason.GetErrors) {
            parseResults = languageService.getSyntaxErrors(code);
        }
        postMessage(parseResults, undefined);
        close();
    };
})(LanguageServiceWorker = exports.LanguageServiceWorker || (exports.LanguageServiceWorker = {}));
//# sourceMappingURL=LanguageServiceWorker.js.map