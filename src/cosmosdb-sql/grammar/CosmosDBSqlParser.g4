parser grammar CosmosDBSqlParser;

options {
    tokenVocab = CosmosDBSqlLexer;
}

root
    : sql_query
    ;

sql_query
    : select_clause from_clause? where_clause? orderby_clause?
    ;

select_clause
    : SELECT top_spec? selection
    ;

top_spec
    : TOP NUMBER
    ;

from_clause
    : FROM from_specification
    ;

where_clause
    : WHERE scalar_expression
    ;

orderby_clause
    : ORDER BY orderby_item_list
    ;

selection
    : select_list
    | select_value_spec
    | MUL // FIXME 'SELECT *<EOF>' is not supported actually
    ;

select_value_spec
    : VALUE scalar_expression
    ;

select_list
    : select_item 
    | select_list COMMA select_item
    ;

select_item
    : scalar_expression
    | scalar_expression select_alias
    ;

select_alias
    : ID
    | AS ID
    ;

orderby_item_list
    : orderby_item
    | orderby_item_list COMMA orderby_item
    ;

orderby_item:
    scalar_expression
    | scalar_expression ASC
    | scalar_expression DESC
    ;

from_specification
    : primary_from_specification
    | from_specification JOIN primary_from_specification
    ;

primary_from_specification
    : input_collection
    | input_collection input_alias
    | ID IN input_collection
    ;

input_alias
    : ID
    | AS ID
    ;

input_collection
    : relative_path 
    | LEFT_PARENTHESIS sql_query RIGHT_PARENTHESIS
    ;

relative_path
    : relative_path_segment
    | relative_path DOT relative_path_segment
    | relative_path LEFT_BRACKET NUMBER RIGHT_BRACKET
    | relative_path LEFT_BRACKET QUOTE relative_path_segment QUOTE RIGHT_BRACKET
    ;

relative_path_segment
    : ID
    ;

array_item_list
    : scalar_expression
    | array_item_list COMMA scalar_expression
    ;

array_create_expression
    : LEFT_BRACKET array_item_list? RIGHT_BRACKET
    ;

property_name
    : ID
    ;

object_property
    : property_name COLON scalar_expression
    ;

object_property_list:
    object_property
    | object_property_list COMMA object_property
    ;

object_create_expression
    : LEFT_BRACE object_property_list? RIGHT_BRACE
    ;

function_arg_list:
    scalar_expression
    | function_arg_list COMMA scalar_expression
    ;

sys_function_name
    : ID 
    ;

udf_function_name
    : ID
    ;

function_call_expression
    : sys_function_name LEFT_PARENTHESIS function_arg_list? RIGHT_PARENTHESIS
    | K_udf DOT udf_function_name LEFT_PARENTHESIS function_arg_list? RIGHT_PARENTHESIS
    ;

scalar_expression
    : logical_scalar_expression
    | between_scalar_expression
    ;

logical_scalar_expression
    : binary_expression
    | in_scalar_expression
    | logical_scalar_expression AND logical_scalar_expression
    | logical_scalar_expression OR logical_scalar_expression
    ;

between_scalar_expression
    : binary_expression BETWEEN binary_expression AND binary_expression
    | binary_expression NOT BETWEEN binary_expression AND binary_expression 
    ;

in_scalar_expression
    : binary_expression IN LEFT_PARENTHESIS in_scalar_expression_item_list RIGHT_PARENTHESIS
    | binary_expression NOT IN LEFT_PARENTHESIS in_scalar_expression_item_list RIGHT_PARENTHESIS
    ;

exists_scalar_expression
    : EXISTS LEFT_PARENTHESIS sql_query RIGHT_PARENTHESIS
    ;

array_scalar_expression
    : ARRAY LEFT_PARENTHESIS sql_query RIGHT_PARENTHESIS
    ;

in_scalar_expression_item_list
    : scalar_expression
    | in_scalar_expression_item_list COMMA scalar_expression
    ;

binary_expression:
    unary_expression
    | binary_expression ADD binary_expression
    | binary_expression SUB binary_expression
    | binary_expression MUL binary_expression
    | binary_expression DIV binary_expression
    | binary_expression MOD binary_expression
    | binary_expression EQUAL binary_expression
    | binary_expression LESS binary_expression
    | binary_expression GREATER binary_expression
    | binary_expression BIT_AND_OP binary_expression
    | binary_expression BIT_OR_OP binary_expression
    | binary_expression BIT_XOR_OP binary_expression
    ;

unary_expression:
    primary_expression
    | SUB unary_expression
    | ADD unary_expression
    | BIT_NOT_OP unary_expression
    | NOT unary_expression;

primary_expression
    : constant
    | input_alias
    // parameter_name: Represents a value of the specified parameter name. Parameter names must have a single @ as the first character.
    | array_create_expression
    | object_create_expression
    | function_call_expression
    | LEFT_PARENTHESIS scalar_expression RIGHT_PARENTHESIS
    | LEFT_PARENTHESIS sql_query RIGHT_PARENTHESIS
    | primary_expression DOT property_name
    | primary_expression LEFT_BRACKET scalar_expression RIGHT_BRACKET
    | exists_scalar_expression
    | array_scalar_expression
    ;

constant
    : K_undefined
    | K_null
    | K_true
    | K_false
    | NUMBER
    | QUOTE ID QUOTE
    | array_constant
    | object_constant
    ;

array_constant
    : LEFT_BRACKET array_constant_list? RIGHT_BRACKET
    ;
    
array_constant_list
    : constant
    | array_constant_list COMMA constant
    ;

object_constant
    : LEFT_BRACE object_constant_items? RIGHT_BRACE
    ;

object_constant_item
    : property_name COLON constant
    ;

object_constant_items
    : object_constant_item
    | object_constant_items COMMA object_constant_item
    ;
