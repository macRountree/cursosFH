/*
El inner join solo mostrara los resultados de la relacion entre tabla A y B
left OUTER JOIN : Mostrar Todos los registros de la Tabla A y los resultados en relacion con la TABLA B

Right OUTER JOIN es lo mismo que Left solo que la Tabla B saldran todos los resultados


Full OUTER JOIN : Todos los resultados de la tabla A Y B y sus MATCH 

*/


/*
APlicamos  inner JOIN
*/

/*Seleccionamos el nombre de continente (TABLA A) y el nombre de continente (TABLA B)
 unimos la tabla continente de la columna continente de Country y la igualamos al código de la tabla continente
	
*/
SELECT
    a.name as country,
    b.name as continent
FROM
    country a
    INNER JOIN continent b on a.continent = b.code