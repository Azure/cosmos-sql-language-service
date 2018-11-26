import {editor, Position, CancellationToken} from "monaco-editor";

declare class SqlCompletionItemProvider {
    public triggerCharacters: string[];
    provideCompletionItems(model: editor.IReadOnlyModel, position: Position, token: CancellationToken);
}

declare class ErrorMarkProvider {
    public static getErrorMark(input: string): Q.Promise<editor.IMarkerData[]>;
}

export {SqlCompletionItemProvider, ErrorMarkProvider};

