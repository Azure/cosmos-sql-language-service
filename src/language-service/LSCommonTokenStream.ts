//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------

import { CommonTokenStream } from "antlr4/CommonTokenStream";
import { Lexer } from "antlr4/Lexer";
import { Token } from "antlr4/Token";

export class LSCommonTokenStream extends CommonTokenStream {
    public EofListener;

    constructor(tokenSource : Lexer) {
        super(tokenSource);
    }

    public LA(i : number) : number {
        let token : number = super.LA(i);

        if (token != null && token == Token.EOF && this.EofListener != undefined) {
            this.EofListener();
        }
        return token;
    }

    public LT(i : number) : any {
        let token = super.LT(i);

        if (token != null && token.type == Token.EOF && this.EofListener != undefined) {
            this.EofListener();
        }
        return token;
    }
}