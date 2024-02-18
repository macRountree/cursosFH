/*
User Rigth OUTER JOIN- exclusive


Necesito todos los listados de los continentes que no tienen registros en nuestra tabla de country
Esto para saber los serios candidatos a continentes que pueden ser borrados



/*
select
    a.name,
    a.continent as country,
    b.name as continentName
from
    country a FULL
    OUTER JOIN continent b  on a.continent = b.code
     ORDER BY  "name" DESC;


*/
*/
select
    a.name as countryName,
    a.continent as continentCountry,
    b.name as continentName
from
    country a 
   RIGHT JOIN continent b  on a.continent = b.code where a.continent is NULL;
/*
         ------
     SELECT *
FROM table_a A
RIGHT JOIN table_b B
ON A.key = B.key
WHERE A.key IS NULL
    */;

