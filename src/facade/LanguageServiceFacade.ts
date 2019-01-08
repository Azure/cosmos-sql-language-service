import * as Q from "q";
import {editor, languages, MarkerSeverity} from "monaco-editor";

export enum ParseReason {
    GetCompletionWords = 1,
    GetErrors = 2
}

export class LanguageServiceFacade {
    private static readonly timeout : number = 2000;

    private static workingWorkerForCompletion : Worker = null; 
    private static workingWorkerForGettingError : Worker = null;
    
    public static GetLanguageServiceParseResult(str : string, parseReason : ParseReason) : Q.Promise<any> {  
        const timeExceeded = Q.Promise<any>((resolve : any, reject : any) => {
            const wait = setTimeout(() => {
                const words : any = {};
                resolve(words);
            }, LanguageServiceFacade.timeout);
        });

        const result = LanguageServiceFacade.GetParseResult(str, parseReason);
        let workingWorker = (parseReason === ParseReason.GetCompletionWords ? LanguageServiceFacade.workingWorkerForCompletion : LanguageServiceFacade.workingWorkerForGettingError);
        return Q.race([timeExceeded, result]).then(function(words) {
            workingWorker.terminate();
            return words;
        });
    }

    private static GetParseResult = (str : string, parseReason : ParseReason) : Q.Promise<any> => {
        return Q.Promise((resolve : any) => {

            let workingWorker = (parseReason === ParseReason.GetCompletionWords ? LanguageServiceFacade.workingWorkerForCompletion : LanguageServiceFacade.workingWorkerForGettingError);

            // terminate the expired worker.
            if (workingWorker != null) {
                workingWorker.terminate();
            }
            
            const currentUrlWithoutQueryParamsAndHashRoute: string = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
            let url = currentUrlWithoutQueryParamsAndHashRoute.replace(/\/[^\/]*$/, '/node_modules/@azure/cosmos-language-service/dist/worker/dist/LanguageServiceWorker.js');
            
            if(parseReason === ParseReason.GetCompletionWords) {
                LanguageServiceFacade.workingWorkerForCompletion = new Worker(url);
                workingWorker = LanguageServiceFacade.workingWorkerForCompletion;
            } else {
                LanguageServiceFacade.workingWorkerForGettingError = new Worker(url);
                workingWorker = LanguageServiceFacade.workingWorkerForGettingError;
            }

            workingWorker.onmessage = (ev : MessageEvent) => {
                var processedResults: any[] = [];  
                var parseResults: any[] = ev.data;
                
                if (parseReason === ParseReason.GetCompletionWords) {
                    parseResults.forEach((label: string) => {
                        if (!!label) {
                            processedResults.push({
                                label: label,
                                insertText: label,
                                kind: languages.CompletionItemKind.Keyword
                            });
                        }
                    });
                    let finalResult : languages.CompletionList = {suggestions : processedResults};
                    resolve(finalResult);
                } else if (parseReason === ParseReason.GetErrors) {
                    parseResults.forEach((err: any) => {
                        const mark: editor.IMarkerData = {
                            severity: MarkerSeverity.Error,
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
            } 

            const source = {
                code : str,
                reason : parseReason
            };
            workingWorker.postMessage(source);
        });
    }
}
