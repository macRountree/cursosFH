/*
*LLave primaria compuesta
*/

/* 
* LLave Primaria Compuesta
Objetivo de llave primaria es tener un identificador unico
*/


CREATE TABLE usersDual (
	id1 int,
	id2 int,
	PRIMARY key (id1,id2) /*
    *Esto significa que la llave primaria se combinan los 2 ids y la combinacion de estos tambien seran unicos*/

)