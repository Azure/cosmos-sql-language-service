import * as Q from "q";
import {editor} from "monaco-editor"
import {LanguageServiceFacade, ParseReason}  from "../facade/LanguageServiceFacade";

export class ErrorMarkProvider {
    public static getErrorMark(input: string): Q.Promise<editor.IMarkerData[]> {
        return LanguageServiceFacade.GetLanguageServiceParseResult(input, ParseReason.GetErrors);
    }
}