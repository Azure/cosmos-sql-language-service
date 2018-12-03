import {editor, Position, CancellationToken, languages} from "monaco-editor";

declare class SqlCompletionItemProvider {
    public triggerCharacters: string[];
    provideCompletionItems(model: editor.ITextModel, position: Position, context: languages.CompletionContext, token: CancellationToken);
}

declare class ErrorMarkProvider {
    public static getErrorMark(input: string): Q.Promise<editor.IMarkerData[]>;
}

export {SqlCompletionItemProvider, ErrorMarkProvider};

