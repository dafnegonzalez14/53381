grammar comandos;

comando
    : nombre opcion* EOF
    ;

opcion
    : GUION id (IGUAL valor)?
    ;

valor
    : numero
    | cadena
    ;

nombre : ID ;

id : ID ;

numero : NUMERO ;

cadena : CADENA ;

GUION : '-' ;

IGUAL : '=' ;

ID : [a-zA-Z]+ ;

NUMERO : [0-9]+ ;

CADENA : '"' (~["\r\n])* '"' ;

WS : [ \t\r\n]+ -> skip ;