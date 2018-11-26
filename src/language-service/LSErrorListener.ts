//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------

import { ErrorListener } from "antlr4/error/ErrorListener";

export class LSErrorListener extends ErrorListener {
    private AddSyntaxError : (msg : string, line : number, column : number) => any;

    constructor(AddSyntaxError : (msg : string, line : number, column : number) => any) {
        super();
        this.AddSyntaxError = AddSyntaxError;
    }

    public syntaxError(recognizer: any, offendingSymbol: any,line: number, column: number, msg: string, e: any): void {
        this.AddSyntaxError(msg, line, column);
    }
}