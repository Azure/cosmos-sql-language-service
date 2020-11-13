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
exports.LSErrorListener = void 0;
var ErrorListener_1 = require("antlr4/error/ErrorListener");
var LSErrorListener = /** @class */ (function (_super) {
    __extends(LSErrorListener, _super);
    function LSErrorListener(AddSyntaxError) {
        var _this = _super.call(this) || this;
        _this.AddSyntaxError = AddSyntaxError;
        return _this;
    }
    LSErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        this.AddSyntaxError(msg, line, column);
    };
    return LSErrorListener;
}(ErrorListener_1.ErrorListener));
exports.LSErrorListener = LSErrorListener;
//# sourceMappingURL=LSErrorListener.js.map