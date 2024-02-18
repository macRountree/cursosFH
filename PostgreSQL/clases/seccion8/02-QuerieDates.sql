/*Consultas sobre Fechas

es un campo con un tipo de dato

*/
SELECT
    *
FROM
    employees
WHERE
    hire_date > '1998-02-05' ORDER BY hire_date DESC;
    /**/
SELECT
    max(hire_date) as mas_nuevo
FROM
    employees
    
;

SELECT
   * 

FROM
    employees
       WHERE hire_date BETWEEN '1999-01-01' and '2000-01-01' /*Si la persona entro el 2000-01-01 tambien saldra en la sentencia*/
    
;