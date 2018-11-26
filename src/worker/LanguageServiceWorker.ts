import { LanguageService } from "../language-service/LanguageService";
import { CosmosDBSqlLexer } from "../cosmosdb-sql/generated/CosmosDBSqlLexer";
import { CosmosDBSqlParser } from "../cosmosdb-sql/generated/CosmosDBSqlParser";
import { CosmosDBSqlKeywords } from "../cosmosdb-sql/grammar/CosmosDBSqlKeywords";

enum ParseReason {
    GetCompletionWords = 1,
    GetErrors = 2
}

export module LanguageServiceWorker {
    // Respond to message from parent thread
    onmessage = (event: MessageEvent) => {
        const code: string = event.data.code;
        const reason : number = event.data.reason;

        let parseResults = [];

        let languageService = new LanguageService(CosmosDBSqlLexer, CosmosDBSqlParser, CosmosDBSqlKeywords.keywordsRegisteredForCompletion);

        if (reason == ParseReason.GetCompletionWords) {
            parseResults = languageService.getCompletionWords(code);
        } else if (reason == ParseReason.GetErrors) {
            parseResults = languageService.getSyntaxErrors(code);
        }

        postMessage(parseResults, undefined);
        close();
    };
}


