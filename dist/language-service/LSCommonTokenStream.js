"use strict";
//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LSCommonTokenStream = void 0;
var CommonTokenStream_1 = require("antlr4/CommonTokenStream");
var Token_1 = require("antlr4/Token");
var LSCommonTokenStream = /** @class */ (function (_super) {
    __extends(LSCommonTokenStream, _super);
    function LSCommonTokenStream(tokenSource) {
        return _super.call(this, tokenSource) || this;
    }
    LSCommonTokenStream.prototype.LA = function (i) {
        var token = _super.prototype.LA.call(this, i);
        if (token != null && token == Token_1.Token.EOF && this.EofListener != undefined) {
            this.EofListener();
        }
        return token;
    };
    LSCommonTokenStream.prototype.LT = function (i) {
        var token = _super.prototype.LT.call(this, i);
        if (token != null && token.type == Token_1.Token.EOF && this.EofListener != undefined) {
            this.EofListener();
        }
        return token;
    };
    return LSCommonTokenStream;
}(CommonTokenStream_1.CommonTokenStream));
exports.LSCommonTokenStream = LSCommonTokenStream;
//# sourceMappingURL=LSCommonTokenStream.js.map