lexer grammar CosmosDBSqlLexer;

// keywords

AND:                          A N D;
ARRAY:                        A R R A Y;
AS:                           A S;
ASC:                          A S C;
BETWEEN:                      B E T W E E N;
BY:                           B Y;
CASE:                         C A S E;
CAST:                         C A S T;
CONVERT:                      C O N V E R T;
CROSS:                        C R O S S;
DESC:                         D E S C;
DISTINCT:                     D I S T I N C T;
ELSE:                         E L S E;
END:                          E N D;
ESCAPE:                       E S C A P E;
EXISTS:                       E X I S T S;
K_false:                      'false';        // case sensitive
FOR:                          F O R;
FROM:                         F R O M ;
GROUP:                        G R O U P;
HAVING:                       H A V I N G;
IN:                           I N;
INNER:                        I N N E R;
INSERT:                       I N S E R T;
INTO:                         I N T O;
IS:                           I S;
JOIN:                         J O I N;
LEFT:                         L E F T;
LIKE:                         L I K E;
LIMIT:                        L I M I T;
NOT:                          N O T;
K_null:                       'null';         // case sensitive
OFFSET:                       O F F S E T;
ON:                           O N;
OR:                           O R;
ORDER:                        O R D E R;
OUTER:                        O U T E R;
OVER:                         O V E R;
RIGHT:                        R I G H T;
SELECT:                       S E L E C T;
SET:                          S E T;
THEN:                         T H E N;
TOP:                          T O P;
K_true:                       'true';         // case sensitive
K_udf:                        'udf';          // case sensitive
K_undefined:                  'undefined';    // case sensitive
UPDATE:                       U P D A T E;
VALUE:                        V A L U E;
WHEN:                         W H E N;
WHERE:                        W H E R E;
WITH:                         W I T H;
Infinity:                     'Infinity';     // case sensitive
NaN:                          'NaN';          // case sensitive

// build-in functions

ABS:                          A B S;
ACOS:                         A C O S;
ARRAY_CONCAT:                 A R R A Y '_' C O N C A T;
ARRAY_CONTAINS:               A R R A Y '_' C O N T A I N S;
ARRAY_LENGTH:                 A R R A Y '_' L E N G T H;
ARRAY_SLICE:                  A R R A Y '_' S L I C E;
ASIN:                         A S I N;
ATAN:                         A T A N;
ATN2:                         A T N '2';
AVG:                          A V G;
CEILING:                      C E I L I N G;
CONCAT:                       C O N C A T;
CONTAINS:                     C O N T A I N S;
COS:                          C O S;
COT:                          C O T;
COUNT:                        C O U N T;
DEGREES:                      D E G R E E S;
ENDSWITH:                     E N D S W I T H;
EXP:                          E X P;
FLOOR:                        F L O O R;
INDEX_OF:                     I N D E X '_' O F;
S_ARRAY:                      I S '_' A R R A Y;
IS_BOOL:                      I S '_' B O O L;
IS_DEFINED:                   I S '_' D E F I N E D;
IS_FINITE_NUMBER:             I S '_' F I N I T E '_' N U M B E R;
IS_NULL:                      I S '_' N U L L;
IS_NUMBER:                    I S '_' N U M B E R;
IS_OBJECT:                    I S '_' O B J E C T;
IS_PRIMITIVE:                 I S '_' P R I M I T I V E;
IS_STRING:                    I S '_' S T R I N G;
LENGTH:                       L E N G T H;
LOG:                          L O G;
LOG10:                        L O G '1' '0';
LOWER:                        L O W E R;
LTRIM:                        L T R I M;
MAX:                          M A X;
MIN:                          M I N;
PI:                           P I;
POWER:                        P O W E R;
RADIANS:                      R A D I A N S;
RAND:                         R A N D;
REPLACE:                      R E P L A C E;
REPLICATE:                    R E P L I C A T E;
REVERSE:                      R E V E R S E;
ROUND:                        R O U N D;
RTRIM:                        R T R I M;
SIGN:                         S I G N;
SIN:                          S I N;
SQRT:                         S Q R T;
SQUARE:                       S Q U A R E;
ST_DISTANCE:                  S T '_' D I S T A N C E;
ST_INTERSECTS:                S T '_' I N T E R S E C T S;
ST_ISVALID:                   S T '_' I S V A L I D;
ST_ISVALIDDETAILED:           S T '_' I S V A L I D D E T A I L E D;
ST_WITHIN:                    S T '_' W I T H I N;
STARTSWITH:                   S T A R T S W I T H;
SUBSTRING:                    S U B S T R I N G;
SUM:                          S U M;
TAN:                          T A N;
TRUNC:                        T R U N C;
UPPER:                        U P P E R;

// others

SPACE:                        [ \t\r\n]+                       -> skip;
COMMENTS:                     '-' '-' ~[\t\r\n]+ [\t\r\n]     -> skip;

// keywords type groups
ID:                           [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER:                       [1-9][0-9]*;

// operators
COL:                          'C';
COMMA:                        ',';
DOT:                          '.';
ADD:                          '+';
SUB:                          '-';
MUL:                          '*';
DIV:                          '/';
MOD:                          '%';
COLON:                        ':';
EQUAL:                        '=';
GREATER:                      '>';
LESS:                         '<';
BIT_NOT_OP:                   '~';
BIT_OR_OP:                    '|';
BIT_AND_OP:                   '&';
BIT_XOR_OP:                   '^';
QUEST:                        '?';
LEFT_BRACE:                   '{';
RIGHT_BRACE:                  '}';
LEFT_BRACKET:                 '[';
RIGHT_BRACKET:                ']';
LEFT_PARENTHESIS:             '(';
RIGHT_PARENTHESIS:            ')';
QUOTE:                        '"'|'\'';


fragment A : [aA]; 
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];
