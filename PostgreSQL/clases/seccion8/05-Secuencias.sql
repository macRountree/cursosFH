/*
**Secuencias es similar al Identity .. solo que tenemos mas control
*/


CREATE SEQUENCE user_sequence;

/*
* ELiminar la secuencia creada
*/
DROP SEQUENCE user_sequence;
/*next val es una funcion que nos trae el proximo valor de una secuencia*/
SELECT
    currval('user_sequence'), /*si ponemos elcurrent primero y despues el next p*/
    nextval('user_sequence'),/*no se puede devolver a un numero anterior*/
    currval('user_sequence');
CREATE TABLE users6(
    "user_id" INTEGER PRIMARY KEY DEFAULT nextval('user_sequence'),
    "username" VARCHAR
)