/*

Tarea con Full outer Join


Tabla A -- country a - name, continent (codigo numerico)
Tabla b -- continent b   name as continentName

SELECT * FROM table_a A
FULL OUTER JOIN table_b B
ON A.key = B.key
*/
select
    a.name,
    a.continent as country,
    b.name as continentName
from
    country a FULL
    OUTER JOIN continent b  on a.continent = b.code
     ORDER BY  "name" DESC
    
    /*Muestra Null en name y country de los nuevos continentes */