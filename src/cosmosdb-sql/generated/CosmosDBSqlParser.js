// Generated from CosmosDBSqlParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "CosmosDBSqlParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0090\u01fd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0005\u0003c\n\u0003\u0003\u0003\u0005\u0003",
    "f\n\u0003\u0003\u0003\u0005\u0003i\n\u0003\u0003\u0004\u0003\u0004\u0005",
    "\u0004m\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005",
    "\t\u0081\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u008c\n\u000b\f\u000b",
    "\u000e\u000b\u008f\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u0095\n\f\u0003\r\u0003\r\u0003\r\u0005\r\u009a\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00a2",
    "\n\u000e\f\u000e\u000e\u000e\u00a5\u000b\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00ae\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0007\u0010\u00b6\n\u0010\f\u0010\u000e\u0010\u00b9",
    "\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00c2\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00c7\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00ce\n\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00e1",
    "\n\u0014\f\u0014\u000e\u0014\u00e4\u000b\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0007\u0016\u00ee\n\u0016\f\u0016\u000e\u0016\u00f1\u000b\u0016\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u00f5\n\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0007\u001a\u0105\n\u001a\f\u001a\u000e\u001a\u0108\u000b\u001a\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u010c\n\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0007\u001c\u0116\n\u001c\f\u001c\u000e\u001c\u0119\u000b\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0122\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u012b\n",
    "\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u012f\n\u001f\u0003 \u0003",
    " \u0005 \u0133\n \u0003!\u0003!\u0003!\u0005!\u0138\n!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0007!\u0140\n!\f!\u000e!\u0143\u000b",
    "!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u0152\n\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0005#\u0161\n#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0007&\u0173",
    "\n&\f&\u000e&\u0176\u000b&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0007\'\u019c\n\'\f\'\u000e\'\u019f\u000b",
    "\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0005",
    "(\u01aa\n(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u01bc\n)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0007)\u01c6\n)\f",
    ")\u000e)\u01c9\u000b)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0005*\u01d5\n*\u0003+\u0003+\u0005+\u01d9\n",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0007,\u01e3",
    "\n,\f,\u000e,\u01e6\u000b,\u0003-\u0003-\u0005-\u01ea\n-\u0003-\u0003",
    "-\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0007/\u01f8\n/\f/\u000e/\u01fb\u000b/\u0003/\u0002\u000f\u0014\u001a",
    "\u001e&*26@JLPV\\0\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0002\u0002",
    "\u0002\u0215\u0002^\u0003\u0002\u0002\u0002\u0004`\u0003\u0002\u0002",
    "\u0002\u0006j\u0003\u0002\u0002\u0002\bp\u0003\u0002\u0002\u0002\ns",
    "\u0003\u0002\u0002\u0002\fv\u0003\u0002\u0002\u0002\u000ey\u0003\u0002",
    "\u0002\u0002\u0010\u0080\u0003\u0002\u0002\u0002\u0012\u0082\u0003\u0002",
    "\u0002\u0002\u0014\u0085\u0003\u0002\u0002\u0002\u0016\u0094\u0003\u0002",
    "\u0002\u0002\u0018\u0099\u0003\u0002\u0002\u0002\u001a\u009b\u0003\u0002",
    "\u0002\u0002\u001c\u00ad\u0003\u0002\u0002\u0002\u001e\u00af\u0003\u0002",
    "\u0002\u0002 \u00c1\u0003\u0002\u0002\u0002\"\u00c6\u0003\u0002\u0002",
    "\u0002$\u00cd\u0003\u0002\u0002\u0002&\u00cf\u0003\u0002\u0002\u0002",
    "(\u00e5\u0003\u0002\u0002\u0002*\u00e7\u0003\u0002\u0002\u0002,\u00f2",
    "\u0003\u0002\u0002\u0002.\u00f8\u0003\u0002\u0002\u00020\u00fa\u0003",
    "\u0002\u0002\u00022\u00fe\u0003\u0002\u0002\u00024\u0109\u0003\u0002",
    "\u0002\u00026\u010f\u0003\u0002\u0002\u00028\u011a\u0003\u0002\u0002",
    "\u0002:\u011c\u0003\u0002\u0002\u0002<\u012e\u0003\u0002\u0002\u0002",
    ">\u0132\u0003\u0002\u0002\u0002@\u0137\u0003\u0002\u0002\u0002B\u0151",
    "\u0003\u0002\u0002\u0002D\u0160\u0003\u0002\u0002\u0002F\u0162\u0003",
    "\u0002\u0002\u0002H\u0167\u0003\u0002\u0002\u0002J\u016c\u0003\u0002",
    "\u0002\u0002L\u0177\u0003\u0002\u0002\u0002N\u01a9\u0003\u0002\u0002",
    "\u0002P\u01bb\u0003\u0002\u0002\u0002R\u01d4\u0003\u0002\u0002\u0002",
    "T\u01d6\u0003\u0002\u0002\u0002V\u01dc\u0003\u0002\u0002\u0002X\u01e7",
    "\u0003\u0002\u0002\u0002Z\u01ed\u0003\u0002\u0002\u0002\\\u01f1\u0003",
    "\u0002\u0002\u0002^_\u0005\u0004\u0003\u0002_\u0003\u0003\u0002\u0002",
    "\u0002`b\u0005\u0006\u0004\u0002ac\u0005\n\u0006\u0002ba\u0003\u0002",
    "\u0002\u0002bc\u0003\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002df\u0005",
    "\f\u0007\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002f",
    "h\u0003\u0002\u0002\u0002gi\u0005\u000e\b\u0002hg\u0003\u0002\u0002",
    "\u0002hi\u0003\u0002\u0002\u0002i\u0005\u0003\u0002\u0002\u0002jl\u0007",
    "*\u0002\u0002km\u0005\b\u0005\u0002lk\u0003\u0002\u0002\u0002lm\u0003",
    "\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002no\u0005\u0010\t\u0002o",
    "\u0007\u0003\u0002\u0002\u0002pq\u0007-\u0002\u0002qr\u0007x\u0002\u0002",
    "r\t\u0003\u0002\u0002\u0002st\u0007\u0015\u0002\u0002tu\u0005\u001e",
    "\u0010\u0002u\u000b\u0003\u0002\u0002\u0002vw\u00074\u0002\u0002wx\u0005",
    "> \u0002x\r\u0003\u0002\u0002\u0002yz\u0007&\u0002\u0002z{\u0007\b\u0002",
    "\u0002{|\u0005\u001a\u000e\u0002|\u000f\u0003\u0002\u0002\u0002}\u0081",
    "\u0005\u0014\u000b\u0002~\u0081\u0005\u0012\n\u0002\u007f\u0081\u0007",
    "~\u0002\u0002\u0080}\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002",
    "\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0011\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u00072\u0002\u0002\u0083\u0084\u0005> \u0002\u0084",
    "\u0013\u0003\u0002\u0002\u0002\u0085\u0086\b\u000b\u0001\u0002\u0086",
    "\u0087\u0005\u0016\f\u0002\u0087\u008d\u0003\u0002\u0002\u0002\u0088",
    "\u0089\f\u0003\u0002\u0002\u0089\u008a\u0007z\u0002\u0002\u008a\u008c",
    "\u0005\u0016\f\u0002\u008b\u0088\u0003\u0002\u0002\u0002\u008c\u008f",
    "\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0003\u0002\u0002\u0002\u008e\u0015\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u0090\u0095\u0005> \u0002\u0091\u0092\u0005",
    "> \u0002\u0092\u0093\u0005\u0018\r\u0002\u0093\u0095\u0003\u0002\u0002",
    "\u0002\u0094\u0090\u0003\u0002\u0002\u0002\u0094\u0091\u0003\u0002\u0002",
    "\u0002\u0095\u0017\u0003\u0002\u0002\u0002\u0096\u009a\u0007w\u0002",
    "\u0002\u0097\u0098\u0007\u0005\u0002\u0002\u0098\u009a\u0007w\u0002",
    "\u0002\u0099\u0096\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002",
    "\u0002\u009a\u0019\u0003\u0002\u0002\u0002\u009b\u009c\b\u000e\u0001",
    "\u0002\u009c\u009d\u0005\u001c\u000f\u0002\u009d\u00a3\u0003\u0002\u0002",
    "\u0002\u009e\u009f\f\u0003\u0002\u0002\u009f\u00a0\u0007z\u0002\u0002",
    "\u00a0\u00a2\u0005\u001c\u000f\u0002\u00a1\u009e\u0003\u0002\u0002\u0002",
    "\u00a2\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u001b\u0003\u0002\u0002\u0002",
    "\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00ae\u0005> \u0002\u00a7",
    "\u00a8\u0005> \u0002\u00a8\u00a9\u0007\u0006\u0002\u0002\u00a9\u00ae",
    "\u0003\u0002\u0002\u0002\u00aa\u00ab\u0005> \u0002\u00ab\u00ac\u0007",
    "\r\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00a6\u0003",
    "\u0002\u0002\u0002\u00ad\u00a7\u0003\u0002\u0002\u0002\u00ad\u00aa\u0003",
    "\u0002\u0002\u0002\u00ae\u001d\u0003\u0002\u0002\u0002\u00af\u00b0\b",
    "\u0010\u0001\u0002\u00b0\u00b1\u0005 \u0011\u0002\u00b1\u00b7\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\f\u0003\u0002\u0002\u00b3\u00b4\u0007",
    "\u001d\u0002\u0002\u00b4\u00b6\u0005 \u0011\u0002\u00b5\u00b2\u0003",
    "\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u001f\u0003",
    "\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00c2\u0005",
    "$\u0013\u0002\u00bb\u00bc\u0005$\u0013\u0002\u00bc\u00bd\u0005\"\u0012",
    "\u0002\u00bd\u00c2\u0003\u0002\u0002\u0002\u00be\u00bf\u0007w\u0002",
    "\u0002\u00bf\u00c0\u0007\u0018\u0002\u0002\u00c0\u00c2\u0005$\u0013",
    "\u0002\u00c1\u00ba\u0003\u0002\u0002\u0002\u00c1\u00bb\u0003\u0002\u0002",
    "\u0002\u00c1\u00be\u0003\u0002\u0002\u0002\u00c2!\u0003\u0002\u0002",
    "\u0002\u00c3\u00c7\u0007w\u0002\u0002\u00c4\u00c5\u0007\u0005\u0002",
    "\u0002\u00c5\u00c7\u0007w\u0002\u0002\u00c6\u00c3\u0003\u0002\u0002",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7#\u0003\u0002\u0002",
    "\u0002\u00c8\u00ce\u0005&\u0014\u0002\u00c9\u00ca\u0007\u008e\u0002",
    "\u0002\u00ca\u00cb\u0005\u0004\u0003\u0002\u00cb\u00cc\u0007\u008f\u0002",
    "\u0002\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00c8\u0003\u0002\u0002",
    "\u0002\u00cd\u00c9\u0003\u0002\u0002\u0002\u00ce%\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\b\u0014\u0001\u0002\u00d0\u00d1\u0005(\u0015\u0002",
    "\u00d1\u00e2\u0003\u0002\u0002\u0002\u00d2\u00d3\f\u0005\u0002\u0002",
    "\u00d3\u00d4\u0007{\u0002\u0002\u00d4\u00e1\u0005(\u0015\u0002\u00d5",
    "\u00d6\f\u0004\u0002\u0002\u00d6\u00d7\u0007\u008c\u0002\u0002\u00d7",
    "\u00d8\u0007x\u0002\u0002\u00d8\u00e1\u0007\u008d\u0002\u0002\u00d9",
    "\u00da\f\u0003\u0002\u0002\u00da\u00db\u0007\u008c\u0002\u0002\u00db",
    "\u00dc\u0007\u0090\u0002\u0002\u00dc\u00dd\u0005(\u0015\u0002\u00dd",
    "\u00de\u0007\u0090\u0002\u0002\u00de\u00df\u0007\u008d\u0002\u0002\u00df",
    "\u00e1\u0003\u0002\u0002\u0002\u00e0\u00d2\u0003\u0002\u0002\u0002\u00e0",
    "\u00d5\u0003\u0002\u0002\u0002\u00e0\u00d9\u0003\u0002\u0002\u0002\u00e1",
    "\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0003\u0002\u0002\u0002\u00e3\'\u0003\u0002\u0002\u0002\u00e4",
    "\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007w\u0002\u0002\u00e6",
    ")\u0003\u0002\u0002\u0002\u00e7\u00e8\b\u0016\u0001\u0002\u00e8\u00e9",
    "\u0005> \u0002\u00e9\u00ef\u0003\u0002\u0002\u0002\u00ea\u00eb\f\u0003",
    "\u0002\u0002\u00eb\u00ec\u0007z\u0002\u0002\u00ec\u00ee\u0005> \u0002",
    "\u00ed\u00ea\u0003\u0002\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002\u0002",
    "\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002",
    "\u00f0+\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002",
    "\u00f2\u00f4\u0007\u008c\u0002\u0002\u00f3\u00f5\u0005*\u0016\u0002",
    "\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007\u008d\u0002\u0002",
    "\u00f7-\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007w\u0002\u0002\u00f9",
    "/\u0003\u0002\u0002\u0002\u00fa\u00fb\u0005.\u0018\u0002\u00fb\u00fc",
    "\u0007\u0081\u0002\u0002\u00fc\u00fd\u0005> \u0002\u00fd1\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\b\u001a\u0001\u0002\u00ff\u0100\u00050\u0019",
    "\u0002\u0100\u0106\u0003\u0002\u0002\u0002\u0101\u0102\f\u0003\u0002",
    "\u0002\u0102\u0103\u0007z\u0002\u0002\u0103\u0105\u00050\u0019\u0002",
    "\u0104\u0101\u0003\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002",
    "\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002",
    "\u01073\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002",
    "\u0109\u010b\u0007\u008a\u0002\u0002\u010a\u010c\u00052\u001a\u0002",
    "\u010b\u010a\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002",
    "\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0007\u008b\u0002\u0002",
    "\u010e5\u0003\u0002\u0002\u0002\u010f\u0110\b\u001c\u0001\u0002\u0110",
    "\u0111\u0005> \u0002\u0111\u0117\u0003\u0002\u0002\u0002\u0112\u0113",
    "\f\u0003\u0002\u0002\u0113\u0114\u0007z\u0002\u0002\u0114\u0116\u0005",
    "> \u0002\u0115\u0112\u0003\u0002\u0002\u0002\u0116\u0119\u0003\u0002",
    "\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002",
    "\u0002\u0002\u01187\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0007w\u0002\u0002\u011b9\u0003\u0002\u0002",
    "\u0002\u011c\u011d\u0007w\u0002\u0002\u011d;\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u00058\u001d\u0002\u011f\u0121\u0007\u008e\u0002\u0002",
    "\u0120\u0122\u00056\u001c\u0002\u0121\u0120\u0003\u0002\u0002\u0002",
    "\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002",
    "\u0123\u0124\u0007\u008f\u0002\u0002\u0124\u012f\u0003\u0002\u0002\u0002",
    "\u0125\u0126\u0007/\u0002\u0002\u0126\u0127\u0007{\u0002\u0002\u0127",
    "\u0128\u0005:\u001e\u0002\u0128\u012a\u0007\u008e\u0002\u0002\u0129",
    "\u012b\u00056\u001c\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012a",
    "\u012b\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0007\u008f\u0002\u0002\u012d\u012f\u0003\u0002\u0002\u0002\u012e",
    "\u011e\u0003\u0002\u0002\u0002\u012e\u0125\u0003\u0002\u0002\u0002\u012f",
    "=\u0003\u0002\u0002\u0002\u0130\u0133\u0005@!\u0002\u0131\u0133\u0005",
    "B\"\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0132\u0131\u0003\u0002",
    "\u0002\u0002\u0133?\u0003\u0002\u0002\u0002\u0134\u0135\b!\u0001\u0002",
    "\u0135\u0138\u0005L\'\u0002\u0136\u0138\u0005D#\u0002\u0137\u0134\u0003",
    "\u0002\u0002\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138\u0141\u0003",
    "\u0002\u0002\u0002\u0139\u013a\f\u0004\u0002\u0002\u013a\u013b\u0007",
    "\u0003\u0002\u0002\u013b\u0140\u0005@!\u0005\u013c\u013d\f\u0003\u0002",
    "\u0002\u013d\u013e\u0007%\u0002\u0002\u013e\u0140\u0005@!\u0004\u013f",
    "\u0139\u0003\u0002\u0002\u0002\u013f\u013c\u0003\u0002\u0002\u0002\u0140",
    "\u0143\u0003\u0002\u0002\u0002\u0141\u013f\u0003\u0002\u0002\u0002\u0141",
    "\u0142\u0003\u0002\u0002\u0002\u0142A\u0003\u0002\u0002\u0002\u0143",
    "\u0141\u0003\u0002\u0002\u0002\u0144\u0145\u0005L\'\u0002\u0145\u0146",
    "\u0007\u0007\u0002\u0002\u0146\u0147\u0005L\'\u0002\u0147\u0148\u0007",
    "\u0003\u0002\u0002\u0148\u0149\u0005L\'\u0002\u0149\u0152\u0003\u0002",
    "\u0002\u0002\u014a\u014b\u0005L\'\u0002\u014b\u014c\u0007!\u0002\u0002",
    "\u014c\u014d\u0007\u0007\u0002\u0002\u014d\u014e\u0005L\'\u0002\u014e",
    "\u014f\u0007\u0003\u0002\u0002\u014f\u0150\u0005L\'\u0002\u0150\u0152",
    "\u0003\u0002\u0002\u0002\u0151\u0144\u0003\u0002\u0002\u0002\u0151\u014a",
    "\u0003\u0002\u0002\u0002\u0152C\u0003\u0002\u0002\u0002\u0153\u0154",
    "\u0005L\'\u0002\u0154\u0155\u0007\u0018\u0002\u0002\u0155\u0156\u0007",
    "\u008e\u0002\u0002\u0156\u0157\u0005J&\u0002\u0157\u0158\u0007\u008f",
    "\u0002\u0002\u0158\u0161\u0003\u0002\u0002\u0002\u0159\u015a\u0005L",
    "\'\u0002\u015a\u015b\u0007!\u0002\u0002\u015b\u015c\u0007\u0018\u0002",
    "\u0002\u015c\u015d\u0007\u008e\u0002\u0002\u015d\u015e\u0005J&\u0002",
    "\u015e\u015f\u0007\u008f\u0002\u0002\u015f\u0161\u0003\u0002\u0002\u0002",
    "\u0160\u0153\u0003\u0002\u0002\u0002\u0160\u0159\u0003\u0002\u0002\u0002",
    "\u0161E\u0003\u0002\u0002\u0002\u0162\u0163\u0007\u0012\u0002\u0002",
    "\u0163\u0164\u0007\u008e\u0002\u0002\u0164\u0165\u0005\u0004\u0003\u0002",
    "\u0165\u0166\u0007\u008f\u0002\u0002\u0166G\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0007\u0004\u0002\u0002\u0168\u0169\u0007\u008e\u0002\u0002",
    "\u0169\u016a\u0005\u0004\u0003\u0002\u016a\u016b\u0007\u008f\u0002\u0002",
    "\u016bI\u0003\u0002\u0002\u0002\u016c\u016d\b&\u0001\u0002\u016d\u016e",
    "\u0005> \u0002\u016e\u0174\u0003\u0002\u0002\u0002\u016f\u0170\f\u0003",
    "\u0002\u0002\u0170\u0171\u0007z\u0002\u0002\u0171\u0173\u0005> \u0002",
    "\u0172\u016f\u0003\u0002\u0002\u0002\u0173\u0176\u0003\u0002\u0002\u0002",
    "\u0174\u0172\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002",
    "\u0175K\u0003\u0002\u0002\u0002\u0176\u0174\u0003\u0002\u0002\u0002",
    "\u0177\u0178\b\'\u0001\u0002\u0178\u0179\u0005N(\u0002\u0179\u019d\u0003",
    "\u0002\u0002\u0002\u017a\u017b\f\r\u0002\u0002\u017b\u017c\u0007|\u0002",
    "\u0002\u017c\u019c\u0005L\'\u000e\u017d\u017e\f\f\u0002\u0002\u017e",
    "\u017f\u0007}\u0002\u0002\u017f\u019c\u0005L\'\r\u0180\u0181\f\u000b",
    "\u0002\u0002\u0181\u0182\u0007~\u0002\u0002\u0182\u019c\u0005L\'\f\u0183",
    "\u0184\f\n\u0002\u0002\u0184\u0185\u0007\u007f\u0002\u0002\u0185\u019c",
    "\u0005L\'\u000b\u0186\u0187\f\t\u0002\u0002\u0187\u0188\u0007\u0080",
    "\u0002\u0002\u0188\u019c\u0005L\'\n\u0189\u018a\f\b\u0002\u0002\u018a",
    "\u018b\u0007\u0082\u0002\u0002\u018b\u019c\u0005L\'\t\u018c\u018d\f",
    "\u0007\u0002\u0002\u018d\u018e\u0007\u0084\u0002\u0002\u018e\u019c\u0005",
    "L\'\b\u018f\u0190\f\u0006\u0002\u0002\u0190\u0191\u0007\u0083\u0002",
    "\u0002\u0191\u019c\u0005L\'\u0007\u0192\u0193\f\u0005\u0002\u0002\u0193",
    "\u0194\u0007\u0087\u0002\u0002\u0194\u019c\u0005L\'\u0006\u0195\u0196",
    "\f\u0004\u0002\u0002\u0196\u0197\u0007\u0086\u0002\u0002\u0197\u019c",
    "\u0005L\'\u0005\u0198\u0199\f\u0003\u0002\u0002\u0199\u019a\u0007\u0088",
    "\u0002\u0002\u019a\u019c\u0005L\'\u0004\u019b\u017a\u0003\u0002\u0002",
    "\u0002\u019b\u017d\u0003\u0002\u0002\u0002\u019b\u0180\u0003\u0002\u0002",
    "\u0002\u019b\u0183\u0003\u0002\u0002\u0002\u019b\u0186\u0003\u0002\u0002",
    "\u0002\u019b\u0189\u0003\u0002\u0002\u0002\u019b\u018c\u0003\u0002\u0002",
    "\u0002\u019b\u018f\u0003\u0002\u0002\u0002\u019b\u0192\u0003\u0002\u0002",
    "\u0002\u019b\u0195\u0003\u0002\u0002\u0002\u019b\u0198\u0003\u0002\u0002",
    "\u0002\u019c\u019f\u0003\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002",
    "\u0002\u019d\u019e\u0003\u0002\u0002\u0002\u019eM\u0003\u0002\u0002",
    "\u0002\u019f\u019d\u0003\u0002\u0002\u0002\u01a0\u01aa\u0005P)\u0002",
    "\u01a1\u01a2\u0007}\u0002\u0002\u01a2\u01aa\u0005N(\u0002\u01a3\u01a4",
    "\u0007|\u0002\u0002\u01a4\u01aa\u0005N(\u0002\u01a5\u01a6\u0007\u0085",
    "\u0002\u0002\u01a6\u01aa\u0005N(\u0002\u01a7\u01a8\u0007!\u0002\u0002",
    "\u01a8\u01aa\u0005N(\u0002\u01a9\u01a0\u0003\u0002\u0002\u0002\u01a9",
    "\u01a1\u0003\u0002\u0002\u0002\u01a9\u01a3\u0003\u0002\u0002\u0002\u01a9",
    "\u01a5\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01aa",
    "O\u0003\u0002\u0002\u0002\u01ab\u01ac\b)\u0001\u0002\u01ac\u01bc\u0005",
    "R*\u0002\u01ad\u01bc\u0005\"\u0012\u0002\u01ae\u01bc\u0005,\u0017\u0002",
    "\u01af\u01bc\u00054\u001b\u0002\u01b0\u01bc\u0005<\u001f\u0002\u01b1",
    "\u01b2\u0007\u008e\u0002\u0002\u01b2\u01b3\u0005> \u0002\u01b3\u01b4",
    "\u0007\u008f\u0002\u0002\u01b4\u01bc\u0003\u0002\u0002\u0002\u01b5\u01b6",
    "\u0007\u008e\u0002\u0002\u01b6\u01b7\u0005\u0004\u0003\u0002\u01b7\u01b8",
    "\u0007\u008f\u0002\u0002\u01b8\u01bc\u0003\u0002\u0002\u0002\u01b9\u01bc",
    "\u0005F$\u0002\u01ba\u01bc\u0005H%\u0002\u01bb\u01ab\u0003\u0002\u0002",
    "\u0002\u01bb\u01ad\u0003\u0002\u0002\u0002\u01bb\u01ae\u0003\u0002\u0002",
    "\u0002\u01bb\u01af\u0003\u0002\u0002\u0002\u01bb\u01b0\u0003\u0002\u0002",
    "\u0002\u01bb\u01b1\u0003\u0002\u0002\u0002\u01bb\u01b5\u0003\u0002\u0002",
    "\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002\u01bb\u01ba\u0003\u0002\u0002",
    "\u0002\u01bc\u01c7\u0003\u0002\u0002\u0002\u01bd\u01be\f\u0006\u0002",
    "\u0002\u01be\u01bf\u0007{\u0002\u0002\u01bf\u01c6\u0005.\u0018\u0002",
    "\u01c0\u01c1\f\u0005\u0002\u0002\u01c1\u01c2\u0007\u008c\u0002\u0002",
    "\u01c2\u01c3\u0005> \u0002\u01c3\u01c4\u0007\u008d\u0002\u0002\u01c4",
    "\u01c6\u0003\u0002\u0002\u0002\u01c5\u01bd\u0003\u0002\u0002\u0002\u01c5",
    "\u01c0\u0003\u0002\u0002\u0002\u01c6\u01c9\u0003\u0002\u0002\u0002\u01c7",
    "\u01c5\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8",
    "Q\u0003\u0002\u0002\u0002\u01c9\u01c7\u0003\u0002\u0002\u0002\u01ca",
    "\u01d5\u00070\u0002\u0002\u01cb\u01d5\u0007\"\u0002\u0002\u01cc\u01d5",
    "\u0007.\u0002\u0002\u01cd\u01d5\u0007\u0013\u0002\u0002\u01ce\u01d5",
    "\u0007x\u0002\u0002\u01cf\u01d0\u0007\u0090\u0002\u0002\u01d0\u01d1",
    "\u0007w\u0002\u0002\u01d1\u01d5\u0007\u0090\u0002\u0002\u01d2\u01d5",
    "\u0005T+\u0002\u01d3\u01d5\u0005X-\u0002\u01d4\u01ca\u0003\u0002\u0002",
    "\u0002\u01d4\u01cb\u0003\u0002\u0002\u0002\u01d4\u01cc\u0003\u0002\u0002",
    "\u0002\u01d4\u01cd\u0003\u0002\u0002\u0002\u01d4\u01ce\u0003\u0002\u0002",
    "\u0002\u01d4\u01cf\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002\u0002",
    "\u0002\u01d4\u01d3\u0003\u0002\u0002\u0002\u01d5S\u0003\u0002\u0002",
    "\u0002\u01d6\u01d8\u0007\u008c\u0002\u0002\u01d7\u01d9\u0005V,\u0002",
    "\u01d8\u01d7\u0003\u0002\u0002\u0002\u01d8\u01d9\u0003\u0002\u0002\u0002",
    "\u01d9\u01da\u0003\u0002\u0002\u0002\u01da\u01db\u0007\u008d\u0002\u0002",
    "\u01dbU\u0003\u0002\u0002\u0002\u01dc\u01dd\b,\u0001\u0002\u01dd\u01de",
    "\u0005R*\u0002\u01de\u01e4\u0003\u0002\u0002\u0002\u01df\u01e0\f\u0003",
    "\u0002\u0002\u01e0\u01e1\u0007z\u0002\u0002\u01e1\u01e3\u0005R*\u0002",
    "\u01e2\u01df\u0003\u0002\u0002\u0002\u01e3\u01e6\u0003\u0002\u0002\u0002",
    "\u01e4\u01e2\u0003\u0002\u0002\u0002\u01e4\u01e5\u0003\u0002\u0002\u0002",
    "\u01e5W\u0003\u0002\u0002\u0002\u01e6\u01e4\u0003\u0002\u0002\u0002",
    "\u01e7\u01e9\u0007\u008a\u0002\u0002\u01e8\u01ea\u0005\\/\u0002\u01e9",
    "\u01e8\u0003\u0002\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002\u01ea",
    "\u01eb\u0003\u0002\u0002\u0002\u01eb\u01ec\u0007\u008b\u0002\u0002\u01ec",
    "Y\u0003\u0002\u0002\u0002\u01ed\u01ee\u0005.\u0018\u0002\u01ee\u01ef",
    "\u0007\u0081\u0002\u0002\u01ef\u01f0\u0005R*\u0002\u01f0[\u0003\u0002",
    "\u0002\u0002\u01f1\u01f2\b/\u0001\u0002\u01f2\u01f3\u0005Z.\u0002\u01f3",
    "\u01f9\u0003\u0002\u0002\u0002\u01f4\u01f5\f\u0003\u0002\u0002\u01f5",
    "\u01f6\u0007z\u0002\u0002\u01f6\u01f8\u0005Z.\u0002\u01f7\u01f4\u0003",
    "\u0002\u0002\u0002\u01f8\u01fb\u0003\u0002\u0002\u0002\u01f9\u01f7\u0003",
    "\u0002\u0002\u0002\u01f9\u01fa\u0003\u0002\u0002\u0002\u01fa]\u0003",
    "\u0002\u0002\u0002\u01fb\u01f9\u0003\u0002\u0002\u0002,behl\u0080\u008d",
    "\u0094\u0099\u00a3\u00ad\u00b7\u00c1\u00c6\u00cd\u00e0\u00e2\u00ef\u00f4",
    "\u0106\u010b\u0117\u0121\u012a\u012e\u0132\u0137\u013f\u0141\u0151\u0160",
    "\u0174\u019b\u019d\u01a9\u01bb\u01c5\u01c7\u01d4\u01d8\u01e4\u01e9\u01f9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, "'false'", 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, "'null'", null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'true'", "'udf'", "'undefined'", null, null, null, 
                     null, null, "'Infinity'", "'NaN'", null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, "'C'", 
                     "','", "'.'", "'+'", "'-'", "'*'", "'/'", "'%'", "':'", 
                     "'='", "'>'", "'<'", "'~'", "'|'", "'&'", "'^'", "'?'", 
                     "'{'", "'}'", "'['", "']'", "'('", "')'" ];

var symbolicNames = [ null, "AND", "ARRAY", "AS", "ASC", "BETWEEN", "BY", 
                      "CASE", "CAST", "CONVERT", "CROSS", "DESC", "DISTINCT", 
                      "ELSE", "END", "ESCAPE", "EXISTS", "K_false", "FOR", 
                      "FROM", "GROUP", "HAVING", "IN", "INNER", "INSERT", 
                      "INTO", "IS", "JOIN", "LEFT", "LIKE", "LIMIT", "NOT", 
                      "K_null", "OFFSET", "ON", "OR", "ORDER", "OUTER", 
                      "OVER", "RIGHT", "SELECT", "SET", "THEN", "TOP", "K_true", 
                      "K_udf", "K_undefined", "UPDATE", "VALUE", "WHEN", 
                      "WHERE", "WITH", "Infinity", "NaN", "ABS", "ACOS", 
                      "ARRAY_CONCAT", "ARRAY_CONTAINS", "ARRAY_LENGTH", 
                      "ARRAY_SLICE", "ASIN", "ATAN", "ATN2", "AVG", "CEILING", 
                      "CONCAT", "CONTAINS", "COS", "COT", "COUNT", "DEGREES", 
                      "ENDSWITH", "EXP", "FLOOR", "INDEX_OF", "S_ARRAY", 
                      "IS_BOOL", "IS_DEFINED", "IS_FINITE_NUMBER", "IS_NULL", 
                      "IS_NUMBER", "IS_OBJECT", "IS_PRIMITIVE", "IS_STRING", 
                      "LENGTH", "LOG", "LOG10", "LOWER", "LTRIM", "MAX", 
                      "MIN", "PI", "POWER", "RADIANS", "RAND", "REPLACE", 
                      "REPLICATE", "REVERSE", "ROUND", "RTRIM", "SIGN", 
                      "SIN", "SQRT", "SQUARE", "ST_DISTANCE", "ST_INTERSECTS", 
                      "ST_ISVALID", "ST_ISVALIDDETAILED", "ST_WITHIN", "STARTSWITH", 
                      "SUBSTRING", "SUM", "TAN", "TRUNC", "UPPER", "SPACE", 
                      "COMMENTS", "ID", "NUMBER", "COL", "COMMA", "DOT", 
                      "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "EQUAL", 
                      "GREATER", "LESS", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", 
                      "BIT_XOR_OP", "QUEST", "LEFT_BRACE", "RIGHT_BRACE", 
                      "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", 
                      "RIGHT_PARENTHESIS", "QUOTE" ];

var ruleNames =  [ "root", "sql_query", "select_clause", "top_spec", "from_clause", 
                   "where_clause", "orderby_clause", "selection", "select_value_spec", 
                   "select_list", "select_item", "select_alias", "orderby_item_list", 
                   "orderby_item", "from_specification", "primary_from_specification", 
                   "input_alias", "input_collection", "relative_path", "relative_path_segment", 
                   "array_item_list", "array_create_expression", "property_name", 
                   "object_property", "object_property_list", "object_create_expression", 
                   "function_arg_list", "sys_function_name", "udf_function_name", 
                   "function_call_expression", "scalar_expression", "logical_scalar_expression", 
                   "between_scalar_expression", "in_scalar_expression", 
                   "exists_scalar_expression", "array_scalar_expression", 
                   "in_scalar_expression_item_list", "binary_expression", 
                   "unary_expression", "primary_expression", "constant", 
                   "array_constant", "array_constant_list", "object_constant", 
                   "object_constant_item", "object_constant_items" ];

function CosmosDBSqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CosmosDBSqlParser.prototype = Object.create(antlr4.Parser.prototype);
CosmosDBSqlParser.prototype.constructor = CosmosDBSqlParser;

Object.defineProperty(CosmosDBSqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CosmosDBSqlParser.EOF = antlr4.Token.EOF;
CosmosDBSqlParser.AND = 1;
CosmosDBSqlParser.ARRAY = 2;
CosmosDBSqlParser.AS = 3;
CosmosDBSqlParser.ASC = 4;
CosmosDBSqlParser.BETWEEN = 5;
CosmosDBSqlParser.BY = 6;
CosmosDBSqlParser.CASE = 7;
CosmosDBSqlParser.CAST = 8;
CosmosDBSqlParser.CONVERT = 9;
CosmosDBSqlParser.CROSS = 10;
CosmosDBSqlParser.DESC = 11;
CosmosDBSqlParser.DISTINCT = 12;
CosmosDBSqlParser.ELSE = 13;
CosmosDBSqlParser.END = 14;
CosmosDBSqlParser.ESCAPE = 15;
CosmosDBSqlParser.EXISTS = 16;
CosmosDBSqlParser.K_false = 17;
CosmosDBSqlParser.FOR = 18;
CosmosDBSqlParser.FROM = 19;
CosmosDBSqlParser.GROUP = 20;
CosmosDBSqlParser.HAVING = 21;
CosmosDBSqlParser.IN = 22;
CosmosDBSqlParser.INNER = 23;
CosmosDBSqlParser.INSERT = 24;
CosmosDBSqlParser.INTO = 25;
CosmosDBSqlParser.IS = 26;
CosmosDBSqlParser.JOIN = 27;
CosmosDBSqlParser.LEFT = 28;
CosmosDBSqlParser.LIKE = 29;
CosmosDBSqlParser.LIMIT = 30;
CosmosDBSqlParser.NOT = 31;
CosmosDBSqlParser.K_null = 32;
CosmosDBSqlParser.OFFSET = 33;
CosmosDBSqlParser.ON = 34;
CosmosDBSqlParser.OR = 35;
CosmosDBSqlParser.ORDER = 36;
CosmosDBSqlParser.OUTER = 37;
CosmosDBSqlParser.OVER = 38;
CosmosDBSqlParser.RIGHT = 39;
CosmosDBSqlParser.SELECT = 40;
CosmosDBSqlParser.SET = 41;
CosmosDBSqlParser.THEN = 42;
CosmosDBSqlParser.TOP = 43;
CosmosDBSqlParser.K_true = 44;
CosmosDBSqlParser.K_udf = 45;
CosmosDBSqlParser.K_undefined = 46;
CosmosDBSqlParser.UPDATE = 47;
CosmosDBSqlParser.VALUE = 48;
CosmosDBSqlParser.WHEN = 49;
CosmosDBSqlParser.WHERE = 50;
CosmosDBSqlParser.WITH = 51;
CosmosDBSqlParser.Infinity = 52;
CosmosDBSqlParser.NaN = 53;
CosmosDBSqlParser.ABS = 54;
CosmosDBSqlParser.ACOS = 55;
CosmosDBSqlParser.ARRAY_CONCAT = 56;
CosmosDBSqlParser.ARRAY_CONTAINS = 57;
CosmosDBSqlParser.ARRAY_LENGTH = 58;
CosmosDBSqlParser.ARRAY_SLICE = 59;
CosmosDBSqlParser.ASIN = 60;
CosmosDBSqlParser.ATAN = 61;
CosmosDBSqlParser.ATN2 = 62;
CosmosDBSqlParser.AVG = 63;
CosmosDBSqlParser.CEILING = 64;
CosmosDBSqlParser.CONCAT = 65;
CosmosDBSqlParser.CONTAINS = 66;
CosmosDBSqlParser.COS = 67;
CosmosDBSqlParser.COT = 68;
CosmosDBSqlParser.COUNT = 69;
CosmosDBSqlParser.DEGREES = 70;
CosmosDBSqlParser.ENDSWITH = 71;
CosmosDBSqlParser.EXP = 72;
CosmosDBSqlParser.FLOOR = 73;
CosmosDBSqlParser.INDEX_OF = 74;
CosmosDBSqlParser.S_ARRAY = 75;
CosmosDBSqlParser.IS_BOOL = 76;
CosmosDBSqlParser.IS_DEFINED = 77;
CosmosDBSqlParser.IS_FINITE_NUMBER = 78;
CosmosDBSqlParser.IS_NULL = 79;
CosmosDBSqlParser.IS_NUMBER = 80;
CosmosDBSqlParser.IS_OBJECT = 81;
CosmosDBSqlParser.IS_PRIMITIVE = 82;
CosmosDBSqlParser.IS_STRING = 83;
CosmosDBSqlParser.LENGTH = 84;
CosmosDBSqlParser.LOG = 85;
CosmosDBSqlParser.LOG10 = 86;
CosmosDBSqlParser.LOWER = 87;
CosmosDBSqlParser.LTRIM = 88;
CosmosDBSqlParser.MAX = 89;
CosmosDBSqlParser.MIN = 90;
CosmosDBSqlParser.PI = 91;
CosmosDBSqlParser.POWER = 92;
CosmosDBSqlParser.RADIANS = 93;
CosmosDBSqlParser.RAND = 94;
CosmosDBSqlParser.REPLACE = 95;
CosmosDBSqlParser.REPLICATE = 96;
CosmosDBSqlParser.REVERSE = 97;
CosmosDBSqlParser.ROUND = 98;
CosmosDBSqlParser.RTRIM = 99;
CosmosDBSqlParser.SIGN = 100;
CosmosDBSqlParser.SIN = 101;
CosmosDBSqlParser.SQRT = 102;
CosmosDBSqlParser.SQUARE = 103;
CosmosDBSqlParser.ST_DISTANCE = 104;
CosmosDBSqlParser.ST_INTERSECTS = 105;
CosmosDBSqlParser.ST_ISVALID = 106;
CosmosDBSqlParser.ST_ISVALIDDETAILED = 107;
CosmosDBSqlParser.ST_WITHIN = 108;
CosmosDBSqlParser.STARTSWITH = 109;
CosmosDBSqlParser.SUBSTRING = 110;
CosmosDBSqlParser.SUM = 111;
CosmosDBSqlParser.TAN = 112;
CosmosDBSqlParser.TRUNC = 113;
CosmosDBSqlParser.UPPER = 114;
CosmosDBSqlParser.SPACE = 115;
CosmosDBSqlParser.COMMENTS = 116;
CosmosDBSqlParser.ID = 117;
CosmosDBSqlParser.NUMBER = 118;
CosmosDBSqlParser.COL = 119;
CosmosDBSqlParser.COMMA = 120;
CosmosDBSqlParser.DOT = 121;
CosmosDBSqlParser.ADD = 122;
CosmosDBSqlParser.SUB = 123;
CosmosDBSqlParser.MUL = 124;
CosmosDBSqlParser.DIV = 125;
CosmosDBSqlParser.MOD = 126;
CosmosDBSqlParser.COLON = 127;
CosmosDBSqlParser.EQUAL = 128;
CosmosDBSqlParser.GREATER = 129;
CosmosDBSqlParser.LESS = 130;
CosmosDBSqlParser.BIT_NOT_OP = 131;
CosmosDBSqlParser.BIT_OR_OP = 132;
CosmosDBSqlParser.BIT_AND_OP = 133;
CosmosDBSqlParser.BIT_XOR_OP = 134;
CosmosDBSqlParser.QUEST = 135;
CosmosDBSqlParser.LEFT_BRACE = 136;
CosmosDBSqlParser.RIGHT_BRACE = 137;
CosmosDBSqlParser.LEFT_BRACKET = 138;
CosmosDBSqlParser.RIGHT_BRACKET = 139;
CosmosDBSqlParser.LEFT_PARENTHESIS = 140;
CosmosDBSqlParser.RIGHT_PARENTHESIS = 141;
CosmosDBSqlParser.QUOTE = 142;

CosmosDBSqlParser.RULE_root = 0;
CosmosDBSqlParser.RULE_sql_query = 1;
CosmosDBSqlParser.RULE_select_clause = 2;
CosmosDBSqlParser.RULE_top_spec = 3;
CosmosDBSqlParser.RULE_from_clause = 4;
CosmosDBSqlParser.RULE_where_clause = 5;
CosmosDBSqlParser.RULE_orderby_clause = 6;
CosmosDBSqlParser.RULE_selection = 7;
CosmosDBSqlParser.RULE_select_value_spec = 8;
CosmosDBSqlParser.RULE_select_list = 9;
CosmosDBSqlParser.RULE_select_item = 10;
CosmosDBSqlParser.RULE_select_alias = 11;
CosmosDBSqlParser.RULE_orderby_item_list = 12;
CosmosDBSqlParser.RULE_orderby_item = 13;
CosmosDBSqlParser.RULE_from_specification = 14;
CosmosDBSqlParser.RULE_primary_from_specification = 15;
CosmosDBSqlParser.RULE_input_alias = 16;
CosmosDBSqlParser.RULE_input_collection = 17;
CosmosDBSqlParser.RULE_relative_path = 18;
CosmosDBSqlParser.RULE_relative_path_segment = 19;
CosmosDBSqlParser.RULE_array_item_list = 20;
CosmosDBSqlParser.RULE_array_create_expression = 21;
CosmosDBSqlParser.RULE_property_name = 22;
CosmosDBSqlParser.RULE_object_property = 23;
CosmosDBSqlParser.RULE_object_property_list = 24;
CosmosDBSqlParser.RULE_object_create_expression = 25;
CosmosDBSqlParser.RULE_function_arg_list = 26;
CosmosDBSqlParser.RULE_sys_function_name = 27;
CosmosDBSqlParser.RULE_udf_function_name = 28;
CosmosDBSqlParser.RULE_function_call_expression = 29;
CosmosDBSqlParser.RULE_scalar_expression = 30;
CosmosDBSqlParser.RULE_logical_scalar_expression = 31;
CosmosDBSqlParser.RULE_between_scalar_expression = 32;
CosmosDBSqlParser.RULE_in_scalar_expression = 33;
CosmosDBSqlParser.RULE_exists_scalar_expression = 34;
CosmosDBSqlParser.RULE_array_scalar_expression = 35;
CosmosDBSqlParser.RULE_in_scalar_expression_item_list = 36;
CosmosDBSqlParser.RULE_binary_expression = 37;
CosmosDBSqlParser.RULE_unary_expression = 38;
CosmosDBSqlParser.RULE_primary_expression = 39;
CosmosDBSqlParser.RULE_constant = 40;
CosmosDBSqlParser.RULE_array_constant = 41;
CosmosDBSqlParser.RULE_array_constant_list = 42;
CosmosDBSqlParser.RULE_object_constant = 43;
CosmosDBSqlParser.RULE_object_constant_item = 44;
CosmosDBSqlParser.RULE_object_constant_items = 45;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};




CosmosDBSqlParser.RootContext = RootContext;

CosmosDBSqlParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CosmosDBSqlParser.RULE_root);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.sql_query();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sql_queryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_sql_query;
    return this;
}

Sql_queryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sql_queryContext.prototype.constructor = Sql_queryContext;

Sql_queryContext.prototype.select_clause = function() {
    return this.getTypedRuleContext(Select_clauseContext,0);
};

Sql_queryContext.prototype.from_clause = function() {
    return this.getTypedRuleContext(From_clauseContext,0);
};

Sql_queryContext.prototype.where_clause = function() {
    return this.getTypedRuleContext(Where_clauseContext,0);
};

Sql_queryContext.prototype.orderby_clause = function() {
    return this.getTypedRuleContext(Orderby_clauseContext,0);
};




CosmosDBSqlParser.Sql_queryContext = Sql_queryContext;

CosmosDBSqlParser.prototype.sql_query = function() {

    var localctx = new Sql_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CosmosDBSqlParser.RULE_sql_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.select_clause();
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CosmosDBSqlParser.FROM) {
            this.state = 95;
            this.from_clause();
        }

        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CosmosDBSqlParser.WHERE) {
            this.state = 98;
            this.where_clause();
        }

        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CosmosDBSqlParser.ORDER) {
            this.state = 101;
            this.orderby_clause();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_select_clause;
    return this;
}

Select_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_clauseContext.prototype.constructor = Select_clauseContext;

Select_clauseContext.prototype.SELECT = function() {
    return this.getToken(CosmosDBSqlParser.SELECT, 0);
};

Select_clauseContext.prototype.selection = function() {
    return this.getTypedRuleContext(SelectionContext,0);
};

Select_clauseContext.prototype.top_spec = function() {
    return this.getTypedRuleContext(Top_specContext,0);
};




CosmosDBSqlParser.Select_clauseContext = Select_clauseContext;

CosmosDBSqlParser.prototype.select_clause = function() {

    var localctx = new Select_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CosmosDBSqlParser.RULE_select_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(CosmosDBSqlParser.SELECT);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CosmosDBSqlParser.TOP) {
            this.state = 105;
            this.top_spec();
        }

        this.state = 108;
        this.selection();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Top_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_top_spec;
    return this;
}

Top_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Top_specContext.prototype.constructor = Top_specContext;

Top_specContext.prototype.TOP = function() {
    return this.getToken(CosmosDBSqlParser.TOP, 0);
};

Top_specContext.prototype.NUMBER = function() {
    return this.getToken(CosmosDBSqlParser.NUMBER, 0);
};




CosmosDBSqlParser.Top_specContext = Top_specContext;

CosmosDBSqlParser.prototype.top_spec = function() {

    var localctx = new Top_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CosmosDBSqlParser.RULE_top_spec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(CosmosDBSqlParser.TOP);
        this.state = 111;
        this.match(CosmosDBSqlParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function From_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_from_clause;
    return this;
}

From_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
From_clauseContext.prototype.constructor = From_clauseContext;

From_clauseContext.prototype.FROM = function() {
    return this.getToken(CosmosDBSqlParser.FROM, 0);
};

From_clauseContext.prototype.from_specification = function() {
    return this.getTypedRuleContext(From_specificationContext,0);
};




CosmosDBSqlParser.From_clauseContext = From_clauseContext;

CosmosDBSqlParser.prototype.from_clause = function() {

    var localctx = new From_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CosmosDBSqlParser.RULE_from_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(CosmosDBSqlParser.FROM);
        this.state = 114;
        this.from_specification(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Where_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_where_clause;
    return this;
}

Where_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Where_clauseContext.prototype.constructor = Where_clauseContext;

Where_clauseContext.prototype.WHERE = function() {
    return this.getToken(CosmosDBSqlParser.WHERE, 0);
};

Where_clauseContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};




CosmosDBSqlParser.Where_clauseContext = Where_clauseContext;

CosmosDBSqlParser.prototype.where_clause = function() {

    var localctx = new Where_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CosmosDBSqlParser.RULE_where_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(CosmosDBSqlParser.WHERE);
        this.state = 117;
        this.scalar_expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Orderby_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_orderby_clause;
    return this;
}

Orderby_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Orderby_clauseContext.prototype.constructor = Orderby_clauseContext;

Orderby_clauseContext.prototype.ORDER = function() {
    return this.getToken(CosmosDBSqlParser.ORDER, 0);
};

Orderby_clauseContext.prototype.BY = function() {
    return this.getToken(CosmosDBSqlParser.BY, 0);
};

Orderby_clauseContext.prototype.orderby_item_list = function() {
    return this.getTypedRuleContext(Orderby_item_listContext,0);
};




CosmosDBSqlParser.Orderby_clauseContext = Orderby_clauseContext;

CosmosDBSqlParser.prototype.orderby_clause = function() {

    var localctx = new Orderby_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CosmosDBSqlParser.RULE_orderby_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(CosmosDBSqlParser.ORDER);
        this.state = 120;
        this.match(CosmosDBSqlParser.BY);
        this.state = 121;
        this.orderby_item_list(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SelectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_selection;
    return this;
}

SelectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectionContext.prototype.constructor = SelectionContext;

SelectionContext.prototype.select_list = function() {
    return this.getTypedRuleContext(Select_listContext,0);
};

SelectionContext.prototype.select_value_spec = function() {
    return this.getTypedRuleContext(Select_value_specContext,0);
};

SelectionContext.prototype.MUL = function() {
    return this.getToken(CosmosDBSqlParser.MUL, 0);
};




CosmosDBSqlParser.SelectionContext = SelectionContext;

CosmosDBSqlParser.prototype.selection = function() {

    var localctx = new SelectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CosmosDBSqlParser.RULE_selection);
    try {
        this.state = 126;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.ARRAY:
        case CosmosDBSqlParser.AS:
        case CosmosDBSqlParser.EXISTS:
        case CosmosDBSqlParser.K_false:
        case CosmosDBSqlParser.NOT:
        case CosmosDBSqlParser.K_null:
        case CosmosDBSqlParser.K_true:
        case CosmosDBSqlParser.K_udf:
        case CosmosDBSqlParser.K_undefined:
        case CosmosDBSqlParser.ID:
        case CosmosDBSqlParser.NUMBER:
        case CosmosDBSqlParser.ADD:
        case CosmosDBSqlParser.SUB:
        case CosmosDBSqlParser.BIT_NOT_OP:
        case CosmosDBSqlParser.LEFT_BRACE:
        case CosmosDBSqlParser.LEFT_BRACKET:
        case CosmosDBSqlParser.LEFT_PARENTHESIS:
        case CosmosDBSqlParser.QUOTE:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.select_list(0);
            break;
        case CosmosDBSqlParser.VALUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.select_value_spec();
            break;
        case CosmosDBSqlParser.MUL:
            this.enterOuterAlt(localctx, 3);
            this.state = 125;
            this.match(CosmosDBSqlParser.MUL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_value_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_select_value_spec;
    return this;
}

Select_value_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_value_specContext.prototype.constructor = Select_value_specContext;

Select_value_specContext.prototype.VALUE = function() {
    return this.getToken(CosmosDBSqlParser.VALUE, 0);
};

Select_value_specContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};




CosmosDBSqlParser.Select_value_specContext = Select_value_specContext;

CosmosDBSqlParser.prototype.select_value_spec = function() {

    var localctx = new Select_value_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CosmosDBSqlParser.RULE_select_value_spec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(CosmosDBSqlParser.VALUE);
        this.state = 129;
        this.scalar_expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_select_list;
    return this;
}

Select_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_listContext.prototype.constructor = Select_listContext;

Select_listContext.prototype.select_item = function() {
    return this.getTypedRuleContext(Select_itemContext,0);
};

Select_listContext.prototype.select_list = function() {
    return this.getTypedRuleContext(Select_listContext,0);
};

Select_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.select_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Select_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, CosmosDBSqlParser.RULE_select_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.select_item();
        this._ctx.stop = this._input.LT(-1);
        this.state = 139;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Select_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_select_list);
                this.state = 134;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 135;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 136;
                this.select_item(); 
            }
            this.state = 141;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Select_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_select_item;
    return this;
}

Select_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_itemContext.prototype.constructor = Select_itemContext;

Select_itemContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Select_itemContext.prototype.select_alias = function() {
    return this.getTypedRuleContext(Select_aliasContext,0);
};




CosmosDBSqlParser.Select_itemContext = Select_itemContext;

CosmosDBSqlParser.prototype.select_item = function() {

    var localctx = new Select_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CosmosDBSqlParser.RULE_select_item);
    try {
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.scalar_expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.scalar_expression();
            this.state = 144;
            this.select_alias();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_aliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_select_alias;
    return this;
}

Select_aliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_aliasContext.prototype.constructor = Select_aliasContext;

Select_aliasContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};

Select_aliasContext.prototype.AS = function() {
    return this.getToken(CosmosDBSqlParser.AS, 0);
};




CosmosDBSqlParser.Select_aliasContext = Select_aliasContext;

CosmosDBSqlParser.prototype.select_alias = function() {

    var localctx = new Select_aliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CosmosDBSqlParser.RULE_select_alias);
    try {
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.match(CosmosDBSqlParser.ID);
            break;
        case CosmosDBSqlParser.AS:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(CosmosDBSqlParser.AS);
            this.state = 150;
            this.match(CosmosDBSqlParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Orderby_item_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_orderby_item_list;
    return this;
}

Orderby_item_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Orderby_item_listContext.prototype.constructor = Orderby_item_listContext;

Orderby_item_listContext.prototype.orderby_item = function() {
    return this.getTypedRuleContext(Orderby_itemContext,0);
};

Orderby_item_listContext.prototype.orderby_item_list = function() {
    return this.getTypedRuleContext(Orderby_item_listContext,0);
};

Orderby_item_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.orderby_item_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Orderby_item_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, CosmosDBSqlParser.RULE_orderby_item_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.orderby_item();
        this._ctx.stop = this._input.LT(-1);
        this.state = 161;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Orderby_item_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_orderby_item_list);
                this.state = 156;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 157;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 158;
                this.orderby_item(); 
            }
            this.state = 163;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Orderby_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_orderby_item;
    return this;
}

Orderby_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Orderby_itemContext.prototype.constructor = Orderby_itemContext;

Orderby_itemContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Orderby_itemContext.prototype.ASC = function() {
    return this.getToken(CosmosDBSqlParser.ASC, 0);
};

Orderby_itemContext.prototype.DESC = function() {
    return this.getToken(CosmosDBSqlParser.DESC, 0);
};




CosmosDBSqlParser.Orderby_itemContext = Orderby_itemContext;

CosmosDBSqlParser.prototype.orderby_item = function() {

    var localctx = new Orderby_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CosmosDBSqlParser.RULE_orderby_item);
    try {
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 164;
            this.scalar_expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            this.scalar_expression();
            this.state = 166;
            this.match(CosmosDBSqlParser.ASC);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 168;
            this.scalar_expression();
            this.state = 169;
            this.match(CosmosDBSqlParser.DESC);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function From_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_from_specification;
    return this;
}

From_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
From_specificationContext.prototype.constructor = From_specificationContext;

From_specificationContext.prototype.primary_from_specification = function() {
    return this.getTypedRuleContext(Primary_from_specificationContext,0);
};

From_specificationContext.prototype.from_specification = function() {
    return this.getTypedRuleContext(From_specificationContext,0);
};

From_specificationContext.prototype.JOIN = function() {
    return this.getToken(CosmosDBSqlParser.JOIN, 0);
};



CosmosDBSqlParser.prototype.from_specification = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new From_specificationContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, CosmosDBSqlParser.RULE_from_specification, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.primary_from_specification();
        this._ctx.stop = this._input.LT(-1);
        this.state = 181;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new From_specificationContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_from_specification);
                this.state = 176;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 177;
                this.match(CosmosDBSqlParser.JOIN);
                this.state = 178;
                this.primary_from_specification(); 
            }
            this.state = 183;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Primary_from_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_primary_from_specification;
    return this;
}

Primary_from_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Primary_from_specificationContext.prototype.constructor = Primary_from_specificationContext;

Primary_from_specificationContext.prototype.input_collection = function() {
    return this.getTypedRuleContext(Input_collectionContext,0);
};

Primary_from_specificationContext.prototype.input_alias = function() {
    return this.getTypedRuleContext(Input_aliasContext,0);
};

Primary_from_specificationContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};

Primary_from_specificationContext.prototype.IN = function() {
    return this.getToken(CosmosDBSqlParser.IN, 0);
};




CosmosDBSqlParser.Primary_from_specificationContext = Primary_from_specificationContext;

CosmosDBSqlParser.prototype.primary_from_specification = function() {

    var localctx = new Primary_from_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CosmosDBSqlParser.RULE_primary_from_specification);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.input_collection();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.input_collection();
            this.state = 186;
            this.input_alias();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 188;
            this.match(CosmosDBSqlParser.ID);
            this.state = 189;
            this.match(CosmosDBSqlParser.IN);
            this.state = 190;
            this.input_collection();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Input_aliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_input_alias;
    return this;
}

Input_aliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Input_aliasContext.prototype.constructor = Input_aliasContext;

Input_aliasContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};

Input_aliasContext.prototype.AS = function() {
    return this.getToken(CosmosDBSqlParser.AS, 0);
};




CosmosDBSqlParser.Input_aliasContext = Input_aliasContext;

CosmosDBSqlParser.prototype.input_alias = function() {

    var localctx = new Input_aliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CosmosDBSqlParser.RULE_input_alias);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.match(CosmosDBSqlParser.ID);
            break;
        case CosmosDBSqlParser.AS:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.match(CosmosDBSqlParser.AS);
            this.state = 195;
            this.match(CosmosDBSqlParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Input_collectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_input_collection;
    return this;
}

Input_collectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Input_collectionContext.prototype.constructor = Input_collectionContext;

Input_collectionContext.prototype.relative_path = function() {
    return this.getTypedRuleContext(Relative_pathContext,0);
};

Input_collectionContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_PARENTHESIS, 0);
};

Input_collectionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};

Input_collectionContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_PARENTHESIS, 0);
};




CosmosDBSqlParser.Input_collectionContext = Input_collectionContext;

CosmosDBSqlParser.prototype.input_collection = function() {

    var localctx = new Input_collectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CosmosDBSqlParser.RULE_input_collection);
    try {
        this.state = 203;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.relative_path(0);
            break;
        case CosmosDBSqlParser.LEFT_PARENTHESIS:
            this.enterOuterAlt(localctx, 2);
            this.state = 199;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 200;
            this.sql_query();
            this.state = 201;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Relative_pathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_relative_path;
    return this;
}

Relative_pathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relative_pathContext.prototype.constructor = Relative_pathContext;

Relative_pathContext.prototype.relative_path_segment = function() {
    return this.getTypedRuleContext(Relative_path_segmentContext,0);
};

Relative_pathContext.prototype.relative_path = function() {
    return this.getTypedRuleContext(Relative_pathContext,0);
};

Relative_pathContext.prototype.DOT = function() {
    return this.getToken(CosmosDBSqlParser.DOT, 0);
};

Relative_pathContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_BRACKET, 0);
};

Relative_pathContext.prototype.NUMBER = function() {
    return this.getToken(CosmosDBSqlParser.NUMBER, 0);
};

Relative_pathContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_BRACKET, 0);
};

Relative_pathContext.prototype.QUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CosmosDBSqlParser.QUOTE);
    } else {
        return this.getToken(CosmosDBSqlParser.QUOTE, i);
    }
};




CosmosDBSqlParser.prototype.relative_path = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Relative_pathContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, CosmosDBSqlParser.RULE_relative_path, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.relative_path_segment();
        this._ctx.stop = this._input.LT(-1);
        this.state = 224;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 222;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Relative_pathContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_relative_path);
                    this.state = 208;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 209;
                    this.match(CosmosDBSqlParser.DOT);
                    this.state = 210;
                    this.relative_path_segment();
                    break;

                case 2:
                    localctx = new Relative_pathContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_relative_path);
                    this.state = 211;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 212;
                    this.match(CosmosDBSqlParser.LEFT_BRACKET);
                    this.state = 213;
                    this.match(CosmosDBSqlParser.NUMBER);
                    this.state = 214;
                    this.match(CosmosDBSqlParser.RIGHT_BRACKET);
                    break;

                case 3:
                    localctx = new Relative_pathContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_relative_path);
                    this.state = 215;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 216;
                    this.match(CosmosDBSqlParser.LEFT_BRACKET);
                    this.state = 217;
                    this.match(CosmosDBSqlParser.QUOTE);
                    this.state = 218;
                    this.relative_path_segment();
                    this.state = 219;
                    this.match(CosmosDBSqlParser.QUOTE);
                    this.state = 220;
                    this.match(CosmosDBSqlParser.RIGHT_BRACKET);
                    break;

                } 
            }
            this.state = 226;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Relative_path_segmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_relative_path_segment;
    return this;
}

Relative_path_segmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relative_path_segmentContext.prototype.constructor = Relative_path_segmentContext;

Relative_path_segmentContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};




CosmosDBSqlParser.Relative_path_segmentContext = Relative_path_segmentContext;

CosmosDBSqlParser.prototype.relative_path_segment = function() {

    var localctx = new Relative_path_segmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CosmosDBSqlParser.RULE_relative_path_segment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(CosmosDBSqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_item_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_array_item_list;
    return this;
}

Array_item_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_item_listContext.prototype.constructor = Array_item_listContext;

Array_item_listContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Array_item_listContext.prototype.array_item_list = function() {
    return this.getTypedRuleContext(Array_item_listContext,0);
};

Array_item_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.array_item_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Array_item_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 40;
    this.enterRecursionRule(localctx, 40, CosmosDBSqlParser.RULE_array_item_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.scalar_expression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 237;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Array_item_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_array_item_list);
                this.state = 232;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 233;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 234;
                this.scalar_expression(); 
            }
            this.state = 239;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Array_create_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_array_create_expression;
    return this;
}

Array_create_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_create_expressionContext.prototype.constructor = Array_create_expressionContext;

Array_create_expressionContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_BRACKET, 0);
};

Array_create_expressionContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_BRACKET, 0);
};

Array_create_expressionContext.prototype.array_item_list = function() {
    return this.getTypedRuleContext(Array_item_listContext,0);
};




CosmosDBSqlParser.Array_create_expressionContext = Array_create_expressionContext;

CosmosDBSqlParser.prototype.array_create_expression = function() {

    var localctx = new Array_create_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CosmosDBSqlParser.RULE_array_create_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(CosmosDBSqlParser.LEFT_BRACKET);
        this.state = 242;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CosmosDBSqlParser.ARRAY) | (1 << CosmosDBSqlParser.AS) | (1 << CosmosDBSqlParser.EXISTS) | (1 << CosmosDBSqlParser.K_false) | (1 << CosmosDBSqlParser.NOT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CosmosDBSqlParser.K_null - 32)) | (1 << (CosmosDBSqlParser.K_true - 32)) | (1 << (CosmosDBSqlParser.K_udf - 32)) | (1 << (CosmosDBSqlParser.K_undefined - 32)))) !== 0) || ((((_la - 117)) & ~0x1f) == 0 && ((1 << (_la - 117)) & ((1 << (CosmosDBSqlParser.ID - 117)) | (1 << (CosmosDBSqlParser.NUMBER - 117)) | (1 << (CosmosDBSqlParser.ADD - 117)) | (1 << (CosmosDBSqlParser.SUB - 117)) | (1 << (CosmosDBSqlParser.BIT_NOT_OP - 117)) | (1 << (CosmosDBSqlParser.LEFT_BRACE - 117)) | (1 << (CosmosDBSqlParser.LEFT_BRACKET - 117)) | (1 << (CosmosDBSqlParser.LEFT_PARENTHESIS - 117)) | (1 << (CosmosDBSqlParser.QUOTE - 117)))) !== 0)) {
            this.state = 241;
            this.array_item_list(0);
        }

        this.state = 244;
        this.match(CosmosDBSqlParser.RIGHT_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Property_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_property_name;
    return this;
}

Property_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Property_nameContext.prototype.constructor = Property_nameContext;

Property_nameContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};




CosmosDBSqlParser.Property_nameContext = Property_nameContext;

CosmosDBSqlParser.prototype.property_name = function() {

    var localctx = new Property_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CosmosDBSqlParser.RULE_property_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(CosmosDBSqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Object_propertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_object_property;
    return this;
}

Object_propertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_propertyContext.prototype.constructor = Object_propertyContext;

Object_propertyContext.prototype.property_name = function() {
    return this.getTypedRuleContext(Property_nameContext,0);
};

Object_propertyContext.prototype.COLON = function() {
    return this.getToken(CosmosDBSqlParser.COLON, 0);
};

Object_propertyContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};




CosmosDBSqlParser.Object_propertyContext = Object_propertyContext;

CosmosDBSqlParser.prototype.object_property = function() {

    var localctx = new Object_propertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CosmosDBSqlParser.RULE_object_property);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.property_name();
        this.state = 249;
        this.match(CosmosDBSqlParser.COLON);
        this.state = 250;
        this.scalar_expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Object_property_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_object_property_list;
    return this;
}

Object_property_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_property_listContext.prototype.constructor = Object_property_listContext;

Object_property_listContext.prototype.object_property = function() {
    return this.getTypedRuleContext(Object_propertyContext,0);
};

Object_property_listContext.prototype.object_property_list = function() {
    return this.getTypedRuleContext(Object_property_listContext,0);
};

Object_property_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.object_property_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Object_property_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 48;
    this.enterRecursionRule(localctx, 48, CosmosDBSqlParser.RULE_object_property_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.object_property();
        this._ctx.stop = this._input.LT(-1);
        this.state = 260;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Object_property_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_object_property_list);
                this.state = 255;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 256;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 257;
                this.object_property(); 
            }
            this.state = 262;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Object_create_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_object_create_expression;
    return this;
}

Object_create_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_create_expressionContext.prototype.constructor = Object_create_expressionContext;

Object_create_expressionContext.prototype.LEFT_BRACE = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_BRACE, 0);
};

Object_create_expressionContext.prototype.RIGHT_BRACE = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_BRACE, 0);
};

Object_create_expressionContext.prototype.object_property_list = function() {
    return this.getTypedRuleContext(Object_property_listContext,0);
};




CosmosDBSqlParser.Object_create_expressionContext = Object_create_expressionContext;

CosmosDBSqlParser.prototype.object_create_expression = function() {

    var localctx = new Object_create_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CosmosDBSqlParser.RULE_object_create_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(CosmosDBSqlParser.LEFT_BRACE);
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CosmosDBSqlParser.ID) {
            this.state = 264;
            this.object_property_list(0);
        }

        this.state = 267;
        this.match(CosmosDBSqlParser.RIGHT_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_arg_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_function_arg_list;
    return this;
}

Function_arg_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_arg_listContext.prototype.constructor = Function_arg_listContext;

Function_arg_listContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Function_arg_listContext.prototype.function_arg_list = function() {
    return this.getTypedRuleContext(Function_arg_listContext,0);
};

Function_arg_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.function_arg_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Function_arg_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 52;
    this.enterRecursionRule(localctx, 52, CosmosDBSqlParser.RULE_function_arg_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.scalar_expression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 277;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Function_arg_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_function_arg_list);
                this.state = 272;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 273;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 274;
                this.scalar_expression(); 
            }
            this.state = 279;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Sys_function_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_sys_function_name;
    return this;
}

Sys_function_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sys_function_nameContext.prototype.constructor = Sys_function_nameContext;

Sys_function_nameContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};




CosmosDBSqlParser.Sys_function_nameContext = Sys_function_nameContext;

CosmosDBSqlParser.prototype.sys_function_name = function() {

    var localctx = new Sys_function_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CosmosDBSqlParser.RULE_sys_function_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(CosmosDBSqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Udf_function_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_udf_function_name;
    return this;
}

Udf_function_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Udf_function_nameContext.prototype.constructor = Udf_function_nameContext;

Udf_function_nameContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};




CosmosDBSqlParser.Udf_function_nameContext = Udf_function_nameContext;

CosmosDBSqlParser.prototype.udf_function_name = function() {

    var localctx = new Udf_function_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, CosmosDBSqlParser.RULE_udf_function_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(CosmosDBSqlParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_call_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_function_call_expression;
    return this;
}

Function_call_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_call_expressionContext.prototype.constructor = Function_call_expressionContext;

Function_call_expressionContext.prototype.sys_function_name = function() {
    return this.getTypedRuleContext(Sys_function_nameContext,0);
};

Function_call_expressionContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_PARENTHESIS, 0);
};

Function_call_expressionContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_PARENTHESIS, 0);
};

Function_call_expressionContext.prototype.function_arg_list = function() {
    return this.getTypedRuleContext(Function_arg_listContext,0);
};

Function_call_expressionContext.prototype.K_udf = function() {
    return this.getToken(CosmosDBSqlParser.K_udf, 0);
};

Function_call_expressionContext.prototype.DOT = function() {
    return this.getToken(CosmosDBSqlParser.DOT, 0);
};

Function_call_expressionContext.prototype.udf_function_name = function() {
    return this.getTypedRuleContext(Udf_function_nameContext,0);
};




CosmosDBSqlParser.Function_call_expressionContext = Function_call_expressionContext;

CosmosDBSqlParser.prototype.function_call_expression = function() {

    var localctx = new Function_call_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, CosmosDBSqlParser.RULE_function_call_expression);
    var _la = 0; // Token type
    try {
        this.state = 300;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 284;
            this.sys_function_name();
            this.state = 285;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CosmosDBSqlParser.ARRAY) | (1 << CosmosDBSqlParser.AS) | (1 << CosmosDBSqlParser.EXISTS) | (1 << CosmosDBSqlParser.K_false) | (1 << CosmosDBSqlParser.NOT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CosmosDBSqlParser.K_null - 32)) | (1 << (CosmosDBSqlParser.K_true - 32)) | (1 << (CosmosDBSqlParser.K_udf - 32)) | (1 << (CosmosDBSqlParser.K_undefined - 32)))) !== 0) || ((((_la - 117)) & ~0x1f) == 0 && ((1 << (_la - 117)) & ((1 << (CosmosDBSqlParser.ID - 117)) | (1 << (CosmosDBSqlParser.NUMBER - 117)) | (1 << (CosmosDBSqlParser.ADD - 117)) | (1 << (CosmosDBSqlParser.SUB - 117)) | (1 << (CosmosDBSqlParser.BIT_NOT_OP - 117)) | (1 << (CosmosDBSqlParser.LEFT_BRACE - 117)) | (1 << (CosmosDBSqlParser.LEFT_BRACKET - 117)) | (1 << (CosmosDBSqlParser.LEFT_PARENTHESIS - 117)) | (1 << (CosmosDBSqlParser.QUOTE - 117)))) !== 0)) {
                this.state = 286;
                this.function_arg_list(0);
            }

            this.state = 289;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;
        case CosmosDBSqlParser.K_udf:
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
            this.match(CosmosDBSqlParser.K_udf);
            this.state = 292;
            this.match(CosmosDBSqlParser.DOT);
            this.state = 293;
            this.udf_function_name();
            this.state = 294;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CosmosDBSqlParser.ARRAY) | (1 << CosmosDBSqlParser.AS) | (1 << CosmosDBSqlParser.EXISTS) | (1 << CosmosDBSqlParser.K_false) | (1 << CosmosDBSqlParser.NOT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CosmosDBSqlParser.K_null - 32)) | (1 << (CosmosDBSqlParser.K_true - 32)) | (1 << (CosmosDBSqlParser.K_udf - 32)) | (1 << (CosmosDBSqlParser.K_undefined - 32)))) !== 0) || ((((_la - 117)) & ~0x1f) == 0 && ((1 << (_la - 117)) & ((1 << (CosmosDBSqlParser.ID - 117)) | (1 << (CosmosDBSqlParser.NUMBER - 117)) | (1 << (CosmosDBSqlParser.ADD - 117)) | (1 << (CosmosDBSqlParser.SUB - 117)) | (1 << (CosmosDBSqlParser.BIT_NOT_OP - 117)) | (1 << (CosmosDBSqlParser.LEFT_BRACE - 117)) | (1 << (CosmosDBSqlParser.LEFT_BRACKET - 117)) | (1 << (CosmosDBSqlParser.LEFT_PARENTHESIS - 117)) | (1 << (CosmosDBSqlParser.QUOTE - 117)))) !== 0)) {
                this.state = 295;
                this.function_arg_list(0);
            }

            this.state = 298;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_scalar_expression;
    return this;
}

Scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scalar_expressionContext.prototype.constructor = Scalar_expressionContext;

Scalar_expressionContext.prototype.logical_scalar_expression = function() {
    return this.getTypedRuleContext(Logical_scalar_expressionContext,0);
};

Scalar_expressionContext.prototype.between_scalar_expression = function() {
    return this.getTypedRuleContext(Between_scalar_expressionContext,0);
};




CosmosDBSqlParser.Scalar_expressionContext = Scalar_expressionContext;

CosmosDBSqlParser.prototype.scalar_expression = function() {

    var localctx = new Scalar_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, CosmosDBSqlParser.RULE_scalar_expression);
    try {
        this.state = 304;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 302;
            this.logical_scalar_expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 303;
            this.between_scalar_expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Logical_scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_logical_scalar_expression;
    return this;
}

Logical_scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logical_scalar_expressionContext.prototype.constructor = Logical_scalar_expressionContext;

Logical_scalar_expressionContext.prototype.binary_expression = function() {
    return this.getTypedRuleContext(Binary_expressionContext,0);
};

Logical_scalar_expressionContext.prototype.in_scalar_expression = function() {
    return this.getTypedRuleContext(In_scalar_expressionContext,0);
};

Logical_scalar_expressionContext.prototype.logical_scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Logical_scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Logical_scalar_expressionContext,i);
    }
};

Logical_scalar_expressionContext.prototype.AND = function() {
    return this.getToken(CosmosDBSqlParser.AND, 0);
};

Logical_scalar_expressionContext.prototype.OR = function() {
    return this.getToken(CosmosDBSqlParser.OR, 0);
};



CosmosDBSqlParser.prototype.logical_scalar_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Logical_scalar_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 62;
    this.enterRecursionRule(localctx, 62, CosmosDBSqlParser.RULE_logical_scalar_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.state = 307;
            this.binary_expression(0);
            break;

        case 2:
            this.state = 308;
            this.in_scalar_expression();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 319;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 317;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Logical_scalar_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_logical_scalar_expression);
                    this.state = 311;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 312;
                    this.match(CosmosDBSqlParser.AND);
                    this.state = 313;
                    this.logical_scalar_expression(3);
                    break;

                case 2:
                    localctx = new Logical_scalar_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_logical_scalar_expression);
                    this.state = 314;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 315;
                    this.match(CosmosDBSqlParser.OR);
                    this.state = 316;
                    this.logical_scalar_expression(2);
                    break;

                } 
            }
            this.state = 321;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Between_scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_between_scalar_expression;
    return this;
}

Between_scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Between_scalar_expressionContext.prototype.constructor = Between_scalar_expressionContext;

Between_scalar_expressionContext.prototype.binary_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Binary_expressionContext);
    } else {
        return this.getTypedRuleContext(Binary_expressionContext,i);
    }
};

Between_scalar_expressionContext.prototype.BETWEEN = function() {
    return this.getToken(CosmosDBSqlParser.BETWEEN, 0);
};

Between_scalar_expressionContext.prototype.AND = function() {
    return this.getToken(CosmosDBSqlParser.AND, 0);
};

Between_scalar_expressionContext.prototype.NOT = function() {
    return this.getToken(CosmosDBSqlParser.NOT, 0);
};




CosmosDBSqlParser.Between_scalar_expressionContext = Between_scalar_expressionContext;

CosmosDBSqlParser.prototype.between_scalar_expression = function() {

    var localctx = new Between_scalar_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, CosmosDBSqlParser.RULE_between_scalar_expression);
    try {
        this.state = 335;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 322;
            this.binary_expression(0);
            this.state = 323;
            this.match(CosmosDBSqlParser.BETWEEN);
            this.state = 324;
            this.binary_expression(0);
            this.state = 325;
            this.match(CosmosDBSqlParser.AND);
            this.state = 326;
            this.binary_expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 328;
            this.binary_expression(0);
            this.state = 329;
            this.match(CosmosDBSqlParser.NOT);
            this.state = 330;
            this.match(CosmosDBSqlParser.BETWEEN);
            this.state = 331;
            this.binary_expression(0);
            this.state = 332;
            this.match(CosmosDBSqlParser.AND);
            this.state = 333;
            this.binary_expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function In_scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_in_scalar_expression;
    return this;
}

In_scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
In_scalar_expressionContext.prototype.constructor = In_scalar_expressionContext;

In_scalar_expressionContext.prototype.binary_expression = function() {
    return this.getTypedRuleContext(Binary_expressionContext,0);
};

In_scalar_expressionContext.prototype.IN = function() {
    return this.getToken(CosmosDBSqlParser.IN, 0);
};

In_scalar_expressionContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_PARENTHESIS, 0);
};

In_scalar_expressionContext.prototype.in_scalar_expression_item_list = function() {
    return this.getTypedRuleContext(In_scalar_expression_item_listContext,0);
};

In_scalar_expressionContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_PARENTHESIS, 0);
};

In_scalar_expressionContext.prototype.NOT = function() {
    return this.getToken(CosmosDBSqlParser.NOT, 0);
};




CosmosDBSqlParser.In_scalar_expressionContext = In_scalar_expressionContext;

CosmosDBSqlParser.prototype.in_scalar_expression = function() {

    var localctx = new In_scalar_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, CosmosDBSqlParser.RULE_in_scalar_expression);
    try {
        this.state = 350;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 337;
            this.binary_expression(0);
            this.state = 338;
            this.match(CosmosDBSqlParser.IN);
            this.state = 339;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 340;
            this.in_scalar_expression_item_list(0);
            this.state = 341;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 343;
            this.binary_expression(0);
            this.state = 344;
            this.match(CosmosDBSqlParser.NOT);
            this.state = 345;
            this.match(CosmosDBSqlParser.IN);
            this.state = 346;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 347;
            this.in_scalar_expression_item_list(0);
            this.state = 348;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Exists_scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_exists_scalar_expression;
    return this;
}

Exists_scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Exists_scalar_expressionContext.prototype.constructor = Exists_scalar_expressionContext;

Exists_scalar_expressionContext.prototype.EXISTS = function() {
    return this.getToken(CosmosDBSqlParser.EXISTS, 0);
};

Exists_scalar_expressionContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_PARENTHESIS, 0);
};

Exists_scalar_expressionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};

Exists_scalar_expressionContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_PARENTHESIS, 0);
};




CosmosDBSqlParser.Exists_scalar_expressionContext = Exists_scalar_expressionContext;

CosmosDBSqlParser.prototype.exists_scalar_expression = function() {

    var localctx = new Exists_scalar_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, CosmosDBSqlParser.RULE_exists_scalar_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(CosmosDBSqlParser.EXISTS);
        this.state = 353;
        this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
        this.state = 354;
        this.sql_query();
        this.state = 355;
        this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_array_scalar_expression;
    return this;
}

Array_scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_scalar_expressionContext.prototype.constructor = Array_scalar_expressionContext;

Array_scalar_expressionContext.prototype.ARRAY = function() {
    return this.getToken(CosmosDBSqlParser.ARRAY, 0);
};

Array_scalar_expressionContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_PARENTHESIS, 0);
};

Array_scalar_expressionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};

Array_scalar_expressionContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_PARENTHESIS, 0);
};




CosmosDBSqlParser.Array_scalar_expressionContext = Array_scalar_expressionContext;

CosmosDBSqlParser.prototype.array_scalar_expression = function() {

    var localctx = new Array_scalar_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, CosmosDBSqlParser.RULE_array_scalar_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(CosmosDBSqlParser.ARRAY);
        this.state = 358;
        this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
        this.state = 359;
        this.sql_query();
        this.state = 360;
        this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function In_scalar_expression_item_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_in_scalar_expression_item_list;
    return this;
}

In_scalar_expression_item_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
In_scalar_expression_item_listContext.prototype.constructor = In_scalar_expression_item_listContext;

In_scalar_expression_item_listContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

In_scalar_expression_item_listContext.prototype.in_scalar_expression_item_list = function() {
    return this.getTypedRuleContext(In_scalar_expression_item_listContext,0);
};

In_scalar_expression_item_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.in_scalar_expression_item_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new In_scalar_expression_item_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 72;
    this.enterRecursionRule(localctx, 72, CosmosDBSqlParser.RULE_in_scalar_expression_item_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.scalar_expression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 370;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new In_scalar_expression_item_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_in_scalar_expression_item_list);
                this.state = 365;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 366;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 367;
                this.scalar_expression(); 
            }
            this.state = 372;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Binary_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_binary_expression;
    return this;
}

Binary_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_expressionContext.prototype.constructor = Binary_expressionContext;

Binary_expressionContext.prototype.unary_expression = function() {
    return this.getTypedRuleContext(Unary_expressionContext,0);
};

Binary_expressionContext.prototype.binary_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Binary_expressionContext);
    } else {
        return this.getTypedRuleContext(Binary_expressionContext,i);
    }
};

Binary_expressionContext.prototype.ADD = function() {
    return this.getToken(CosmosDBSqlParser.ADD, 0);
};

Binary_expressionContext.prototype.SUB = function() {
    return this.getToken(CosmosDBSqlParser.SUB, 0);
};

Binary_expressionContext.prototype.MUL = function() {
    return this.getToken(CosmosDBSqlParser.MUL, 0);
};

Binary_expressionContext.prototype.DIV = function() {
    return this.getToken(CosmosDBSqlParser.DIV, 0);
};

Binary_expressionContext.prototype.MOD = function() {
    return this.getToken(CosmosDBSqlParser.MOD, 0);
};

Binary_expressionContext.prototype.EQUAL = function() {
    return this.getToken(CosmosDBSqlParser.EQUAL, 0);
};

Binary_expressionContext.prototype.LESS = function() {
    return this.getToken(CosmosDBSqlParser.LESS, 0);
};

Binary_expressionContext.prototype.GREATER = function() {
    return this.getToken(CosmosDBSqlParser.GREATER, 0);
};

Binary_expressionContext.prototype.BIT_AND_OP = function() {
    return this.getToken(CosmosDBSqlParser.BIT_AND_OP, 0);
};

Binary_expressionContext.prototype.BIT_OR_OP = function() {
    return this.getToken(CosmosDBSqlParser.BIT_OR_OP, 0);
};

Binary_expressionContext.prototype.BIT_XOR_OP = function() {
    return this.getToken(CosmosDBSqlParser.BIT_XOR_OP, 0);
};



CosmosDBSqlParser.prototype.binary_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Binary_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 74;
    this.enterRecursionRule(localctx, 74, CosmosDBSqlParser.RULE_binary_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.unary_expression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 411;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 409;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 376;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 377;
                    this.match(CosmosDBSqlParser.ADD);
                    this.state = 378;
                    this.binary_expression(12);
                    break;

                case 2:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 379;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 380;
                    this.match(CosmosDBSqlParser.SUB);
                    this.state = 381;
                    this.binary_expression(11);
                    break;

                case 3:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 382;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 383;
                    this.match(CosmosDBSqlParser.MUL);
                    this.state = 384;
                    this.binary_expression(10);
                    break;

                case 4:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 385;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 386;
                    this.match(CosmosDBSqlParser.DIV);
                    this.state = 387;
                    this.binary_expression(9);
                    break;

                case 5:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 388;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 389;
                    this.match(CosmosDBSqlParser.MOD);
                    this.state = 390;
                    this.binary_expression(8);
                    break;

                case 6:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 391;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 392;
                    this.match(CosmosDBSqlParser.EQUAL);
                    this.state = 393;
                    this.binary_expression(7);
                    break;

                case 7:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 394;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 395;
                    this.match(CosmosDBSqlParser.LESS);
                    this.state = 396;
                    this.binary_expression(6);
                    break;

                case 8:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 397;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 398;
                    this.match(CosmosDBSqlParser.GREATER);
                    this.state = 399;
                    this.binary_expression(5);
                    break;

                case 9:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 400;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 401;
                    this.match(CosmosDBSqlParser.BIT_AND_OP);
                    this.state = 402;
                    this.binary_expression(4);
                    break;

                case 10:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 403;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 404;
                    this.match(CosmosDBSqlParser.BIT_OR_OP);
                    this.state = 405;
                    this.binary_expression(3);
                    break;

                case 11:
                    localctx = new Binary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_binary_expression);
                    this.state = 406;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 407;
                    this.match(CosmosDBSqlParser.BIT_XOR_OP);
                    this.state = 408;
                    this.binary_expression(2);
                    break;

                } 
            }
            this.state = 413;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Unary_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_unary_expression;
    return this;
}

Unary_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_expressionContext.prototype.constructor = Unary_expressionContext;

Unary_expressionContext.prototype.primary_expression = function() {
    return this.getTypedRuleContext(Primary_expressionContext,0);
};

Unary_expressionContext.prototype.SUB = function() {
    return this.getToken(CosmosDBSqlParser.SUB, 0);
};

Unary_expressionContext.prototype.unary_expression = function() {
    return this.getTypedRuleContext(Unary_expressionContext,0);
};

Unary_expressionContext.prototype.ADD = function() {
    return this.getToken(CosmosDBSqlParser.ADD, 0);
};

Unary_expressionContext.prototype.BIT_NOT_OP = function() {
    return this.getToken(CosmosDBSqlParser.BIT_NOT_OP, 0);
};

Unary_expressionContext.prototype.NOT = function() {
    return this.getToken(CosmosDBSqlParser.NOT, 0);
};




CosmosDBSqlParser.Unary_expressionContext = Unary_expressionContext;

CosmosDBSqlParser.prototype.unary_expression = function() {

    var localctx = new Unary_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, CosmosDBSqlParser.RULE_unary_expression);
    try {
        this.state = 423;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.ARRAY:
        case CosmosDBSqlParser.AS:
        case CosmosDBSqlParser.EXISTS:
        case CosmosDBSqlParser.K_false:
        case CosmosDBSqlParser.K_null:
        case CosmosDBSqlParser.K_true:
        case CosmosDBSqlParser.K_udf:
        case CosmosDBSqlParser.K_undefined:
        case CosmosDBSqlParser.ID:
        case CosmosDBSqlParser.NUMBER:
        case CosmosDBSqlParser.LEFT_BRACE:
        case CosmosDBSqlParser.LEFT_BRACKET:
        case CosmosDBSqlParser.LEFT_PARENTHESIS:
        case CosmosDBSqlParser.QUOTE:
            this.enterOuterAlt(localctx, 1);
            this.state = 414;
            this.primary_expression(0);
            break;
        case CosmosDBSqlParser.SUB:
            this.enterOuterAlt(localctx, 2);
            this.state = 415;
            this.match(CosmosDBSqlParser.SUB);
            this.state = 416;
            this.unary_expression();
            break;
        case CosmosDBSqlParser.ADD:
            this.enterOuterAlt(localctx, 3);
            this.state = 417;
            this.match(CosmosDBSqlParser.ADD);
            this.state = 418;
            this.unary_expression();
            break;
        case CosmosDBSqlParser.BIT_NOT_OP:
            this.enterOuterAlt(localctx, 4);
            this.state = 419;
            this.match(CosmosDBSqlParser.BIT_NOT_OP);
            this.state = 420;
            this.unary_expression();
            break;
        case CosmosDBSqlParser.NOT:
            this.enterOuterAlt(localctx, 5);
            this.state = 421;
            this.match(CosmosDBSqlParser.NOT);
            this.state = 422;
            this.unary_expression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Primary_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_primary_expression;
    return this;
}

Primary_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Primary_expressionContext.prototype.constructor = Primary_expressionContext;

Primary_expressionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

Primary_expressionContext.prototype.input_alias = function() {
    return this.getTypedRuleContext(Input_aliasContext,0);
};

Primary_expressionContext.prototype.array_create_expression = function() {
    return this.getTypedRuleContext(Array_create_expressionContext,0);
};

Primary_expressionContext.prototype.object_create_expression = function() {
    return this.getTypedRuleContext(Object_create_expressionContext,0);
};

Primary_expressionContext.prototype.function_call_expression = function() {
    return this.getTypedRuleContext(Function_call_expressionContext,0);
};

Primary_expressionContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_PARENTHESIS, 0);
};

Primary_expressionContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Primary_expressionContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_PARENTHESIS, 0);
};

Primary_expressionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};

Primary_expressionContext.prototype.exists_scalar_expression = function() {
    return this.getTypedRuleContext(Exists_scalar_expressionContext,0);
};

Primary_expressionContext.prototype.array_scalar_expression = function() {
    return this.getTypedRuleContext(Array_scalar_expressionContext,0);
};

Primary_expressionContext.prototype.primary_expression = function() {
    return this.getTypedRuleContext(Primary_expressionContext,0);
};

Primary_expressionContext.prototype.DOT = function() {
    return this.getToken(CosmosDBSqlParser.DOT, 0);
};

Primary_expressionContext.prototype.property_name = function() {
    return this.getTypedRuleContext(Property_nameContext,0);
};

Primary_expressionContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_BRACKET, 0);
};

Primary_expressionContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_BRACKET, 0);
};



CosmosDBSqlParser.prototype.primary_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Primary_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 78;
    this.enterRecursionRule(localctx, 78, CosmosDBSqlParser.RULE_primary_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 441;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.state = 426;
            this.constant();
            break;

        case 2:
            this.state = 427;
            this.input_alias();
            break;

        case 3:
            this.state = 428;
            this.array_create_expression();
            break;

        case 4:
            this.state = 429;
            this.object_create_expression();
            break;

        case 5:
            this.state = 430;
            this.function_call_expression();
            break;

        case 6:
            this.state = 431;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 432;
            this.scalar_expression();
            this.state = 433;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;

        case 7:
            this.state = 435;
            this.match(CosmosDBSqlParser.LEFT_PARENTHESIS);
            this.state = 436;
            this.sql_query();
            this.state = 437;
            this.match(CosmosDBSqlParser.RIGHT_PARENTHESIS);
            break;

        case 8:
            this.state = 439;
            this.exists_scalar_expression();
            break;

        case 9:
            this.state = 440;
            this.array_scalar_expression();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 453;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 451;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_primary_expression);
                    this.state = 443;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 444;
                    this.match(CosmosDBSqlParser.DOT);
                    this.state = 445;
                    this.property_name();
                    break;

                case 2:
                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_primary_expression);
                    this.state = 446;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 447;
                    this.match(CosmosDBSqlParser.LEFT_BRACKET);
                    this.state = 448;
                    this.scalar_expression();
                    this.state = 449;
                    this.match(CosmosDBSqlParser.RIGHT_BRACKET);
                    break;

                } 
            }
            this.state = 455;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.K_undefined = function() {
    return this.getToken(CosmosDBSqlParser.K_undefined, 0);
};

ConstantContext.prototype.K_null = function() {
    return this.getToken(CosmosDBSqlParser.K_null, 0);
};

ConstantContext.prototype.K_true = function() {
    return this.getToken(CosmosDBSqlParser.K_true, 0);
};

ConstantContext.prototype.K_false = function() {
    return this.getToken(CosmosDBSqlParser.K_false, 0);
};

ConstantContext.prototype.NUMBER = function() {
    return this.getToken(CosmosDBSqlParser.NUMBER, 0);
};

ConstantContext.prototype.QUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CosmosDBSqlParser.QUOTE);
    } else {
        return this.getToken(CosmosDBSqlParser.QUOTE, i);
    }
};


ConstantContext.prototype.ID = function() {
    return this.getToken(CosmosDBSqlParser.ID, 0);
};

ConstantContext.prototype.array_constant = function() {
    return this.getTypedRuleContext(Array_constantContext,0);
};

ConstantContext.prototype.object_constant = function() {
    return this.getTypedRuleContext(Object_constantContext,0);
};




CosmosDBSqlParser.ConstantContext = ConstantContext;

CosmosDBSqlParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, CosmosDBSqlParser.RULE_constant);
    try {
        this.state = 466;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CosmosDBSqlParser.K_undefined:
            this.enterOuterAlt(localctx, 1);
            this.state = 456;
            this.match(CosmosDBSqlParser.K_undefined);
            break;
        case CosmosDBSqlParser.K_null:
            this.enterOuterAlt(localctx, 2);
            this.state = 457;
            this.match(CosmosDBSqlParser.K_null);
            break;
        case CosmosDBSqlParser.K_true:
            this.enterOuterAlt(localctx, 3);
            this.state = 458;
            this.match(CosmosDBSqlParser.K_true);
            break;
        case CosmosDBSqlParser.K_false:
            this.enterOuterAlt(localctx, 4);
            this.state = 459;
            this.match(CosmosDBSqlParser.K_false);
            break;
        case CosmosDBSqlParser.NUMBER:
            this.enterOuterAlt(localctx, 5);
            this.state = 460;
            this.match(CosmosDBSqlParser.NUMBER);
            break;
        case CosmosDBSqlParser.QUOTE:
            this.enterOuterAlt(localctx, 6);
            this.state = 461;
            this.match(CosmosDBSqlParser.QUOTE);
            this.state = 462;
            this.match(CosmosDBSqlParser.ID);
            this.state = 463;
            this.match(CosmosDBSqlParser.QUOTE);
            break;
        case CosmosDBSqlParser.LEFT_BRACKET:
            this.enterOuterAlt(localctx, 7);
            this.state = 464;
            this.array_constant();
            break;
        case CosmosDBSqlParser.LEFT_BRACE:
            this.enterOuterAlt(localctx, 8);
            this.state = 465;
            this.object_constant();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_constantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_array_constant;
    return this;
}

Array_constantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_constantContext.prototype.constructor = Array_constantContext;

Array_constantContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_BRACKET, 0);
};

Array_constantContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_BRACKET, 0);
};

Array_constantContext.prototype.array_constant_list = function() {
    return this.getTypedRuleContext(Array_constant_listContext,0);
};




CosmosDBSqlParser.Array_constantContext = Array_constantContext;

CosmosDBSqlParser.prototype.array_constant = function() {

    var localctx = new Array_constantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, CosmosDBSqlParser.RULE_array_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        this.match(CosmosDBSqlParser.LEFT_BRACKET);
        this.state = 470;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (CosmosDBSqlParser.K_false - 17)) | (1 << (CosmosDBSqlParser.K_null - 17)) | (1 << (CosmosDBSqlParser.K_true - 17)) | (1 << (CosmosDBSqlParser.K_undefined - 17)))) !== 0) || ((((_la - 118)) & ~0x1f) == 0 && ((1 << (_la - 118)) & ((1 << (CosmosDBSqlParser.NUMBER - 118)) | (1 << (CosmosDBSqlParser.LEFT_BRACE - 118)) | (1 << (CosmosDBSqlParser.LEFT_BRACKET - 118)) | (1 << (CosmosDBSqlParser.QUOTE - 118)))) !== 0)) {
            this.state = 469;
            this.array_constant_list(0);
        }

        this.state = 472;
        this.match(CosmosDBSqlParser.RIGHT_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Array_constant_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_array_constant_list;
    return this;
}

Array_constant_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_constant_listContext.prototype.constructor = Array_constant_listContext;

Array_constant_listContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

Array_constant_listContext.prototype.array_constant_list = function() {
    return this.getTypedRuleContext(Array_constant_listContext,0);
};

Array_constant_listContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.array_constant_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Array_constant_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 84;
    this.enterRecursionRule(localctx, 84, CosmosDBSqlParser.RULE_array_constant_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 475;
        this.constant();
        this._ctx.stop = this._input.LT(-1);
        this.state = 482;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Array_constant_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_array_constant_list);
                this.state = 477;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 478;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 479;
                this.constant(); 
            }
            this.state = 484;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Object_constantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_object_constant;
    return this;
}

Object_constantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_constantContext.prototype.constructor = Object_constantContext;

Object_constantContext.prototype.LEFT_BRACE = function() {
    return this.getToken(CosmosDBSqlParser.LEFT_BRACE, 0);
};

Object_constantContext.prototype.RIGHT_BRACE = function() {
    return this.getToken(CosmosDBSqlParser.RIGHT_BRACE, 0);
};

Object_constantContext.prototype.object_constant_items = function() {
    return this.getTypedRuleContext(Object_constant_itemsContext,0);
};




CosmosDBSqlParser.Object_constantContext = Object_constantContext;

CosmosDBSqlParser.prototype.object_constant = function() {

    var localctx = new Object_constantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, CosmosDBSqlParser.RULE_object_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 485;
        this.match(CosmosDBSqlParser.LEFT_BRACE);
        this.state = 487;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CosmosDBSqlParser.ID) {
            this.state = 486;
            this.object_constant_items(0);
        }

        this.state = 489;
        this.match(CosmosDBSqlParser.RIGHT_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Object_constant_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_object_constant_item;
    return this;
}

Object_constant_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_constant_itemContext.prototype.constructor = Object_constant_itemContext;

Object_constant_itemContext.prototype.property_name = function() {
    return this.getTypedRuleContext(Property_nameContext,0);
};

Object_constant_itemContext.prototype.COLON = function() {
    return this.getToken(CosmosDBSqlParser.COLON, 0);
};

Object_constant_itemContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};




CosmosDBSqlParser.Object_constant_itemContext = Object_constant_itemContext;

CosmosDBSqlParser.prototype.object_constant_item = function() {

    var localctx = new Object_constant_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, CosmosDBSqlParser.RULE_object_constant_item);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
        this.property_name();
        this.state = 492;
        this.match(CosmosDBSqlParser.COLON);
        this.state = 493;
        this.constant();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Object_constant_itemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CosmosDBSqlParser.RULE_object_constant_items;
    return this;
}

Object_constant_itemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_constant_itemsContext.prototype.constructor = Object_constant_itemsContext;

Object_constant_itemsContext.prototype.object_constant_item = function() {
    return this.getTypedRuleContext(Object_constant_itemContext,0);
};

Object_constant_itemsContext.prototype.object_constant_items = function() {
    return this.getTypedRuleContext(Object_constant_itemsContext,0);
};

Object_constant_itemsContext.prototype.COMMA = function() {
    return this.getToken(CosmosDBSqlParser.COMMA, 0);
};



CosmosDBSqlParser.prototype.object_constant_items = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Object_constant_itemsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 90;
    this.enterRecursionRule(localctx, 90, CosmosDBSqlParser.RULE_object_constant_items, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        this.object_constant_item();
        this._ctx.stop = this._input.LT(-1);
        this.state = 503;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Object_constant_itemsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CosmosDBSqlParser.RULE_object_constant_items);
                this.state = 498;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 499;
                this.match(CosmosDBSqlParser.COMMA);
                this.state = 500;
                this.object_constant_item(); 
            }
            this.state = 505;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


CosmosDBSqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.select_list_sempred(localctx, predIndex);
	case 12:
			return this.orderby_item_list_sempred(localctx, predIndex);
	case 14:
			return this.from_specification_sempred(localctx, predIndex);
	case 18:
			return this.relative_path_sempred(localctx, predIndex);
	case 20:
			return this.array_item_list_sempred(localctx, predIndex);
	case 24:
			return this.object_property_list_sempred(localctx, predIndex);
	case 26:
			return this.function_arg_list_sempred(localctx, predIndex);
	case 31:
			return this.logical_scalar_expression_sempred(localctx, predIndex);
	case 36:
			return this.in_scalar_expression_item_list_sempred(localctx, predIndex);
	case 37:
			return this.binary_expression_sempred(localctx, predIndex);
	case 39:
			return this.primary_expression_sempred(localctx, predIndex);
	case 42:
			return this.array_constant_list_sempred(localctx, predIndex);
	case 45:
			return this.object_constant_items_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CosmosDBSqlParser.prototype.select_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.orderby_item_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.from_specification_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.relative_path_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.array_item_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.object_property_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.function_arg_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.logical_scalar_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.in_scalar_expression_item_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 11:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.binary_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 12:
			return this.precpred(this._ctx, 11);
		case 13:
			return this.precpred(this._ctx, 10);
		case 14:
			return this.precpred(this._ctx, 9);
		case 15:
			return this.precpred(this._ctx, 8);
		case 16:
			return this.precpred(this._ctx, 7);
		case 17:
			return this.precpred(this._ctx, 6);
		case 18:
			return this.precpred(this._ctx, 5);
		case 19:
			return this.precpred(this._ctx, 4);
		case 20:
			return this.precpred(this._ctx, 3);
		case 21:
			return this.precpred(this._ctx, 2);
		case 22:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.primary_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 23:
			return this.precpred(this._ctx, 4);
		case 24:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.array_constant_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 25:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CosmosDBSqlParser.prototype.object_constant_items_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 26:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CosmosDBSqlParser = CosmosDBSqlParser;
