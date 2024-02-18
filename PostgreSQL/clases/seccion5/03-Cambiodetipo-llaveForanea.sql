/* CAmbio ed tipo y llave foranea

Queremos cambiar el tipo de dato a continen de country ... a integer ya que el code dela tabla continent es por  numeros

*/

SELECT *FROM country;
ALTER TABLE
    country
ALTER COLUMN
    continent TYPE int4 USING continent :: integer;
/* Otra manera de castear la columna*/
/*
    ALTER TABLE
    country
ALTER COLUMN
    continent TYPE int4 USING continent/1;*/