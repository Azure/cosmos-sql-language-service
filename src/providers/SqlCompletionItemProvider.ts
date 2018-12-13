import {LanguageServiceFacade, ParseReason} from "../facade/LanguageServiceFacade";
import {editor, Position, CancellationToken, languages} from "monaco-editor";

export class SqlCompletionItemProvider {
    public triggerCharacters: string[] = [" ","."];
    
    provideCompletionItems(model: editor.IReadOnlyModel, position: Position, context: languages.CompletionContext, token: CancellationToken) : languages.ProviderResult<languages.CompletionList> {      
        const range = {
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column 
        }

        let text = model.getValueInRange(range);
        text = this.triggerCharacters.indexOf(text.charAt(text.length - 1)) < 0 ? text.substring(0, text.length - 1) : text;
        return LanguageServiceFacade.GetLanguageServiceParseResult(text, ParseReason.GetCompletionWords);
    }
} 
