/* Multiples Joins con agrupaciones

Quiero saber los idiomas oficiales que se hablan por continente


8998

*/

/* Primero : Listamos los idiomaas oficiales de la tabla country language*/
select
    *
from
    countrylanguage
WHERE
    isofficial = true;
    
    
    /*Utilizamos la tabla de country para pooder agrupar  los queries del lenguaje con el continente*/
    
    SELECT * from country;
    
    
  /*Listamos la lista de continentes de la tabla continents (No tiene relacion con la tabla country language*/  
    
    
    SELECT * from continent;
/*Resultado */
select
    DISTINCT 
    a."language",
    c."name" as continent
from
    countrylanguage a
    inner JOIN country b ON a.countrycode = b.code
    INNER JOIN continent c on b.continent = c.code
WHERE
    isofficial = true;

   /*Cuantos idiomas oficiales se hablan por continente*/
   
   SELECT count(*) as numLanguage, continent from (
   select
    DISTINCT 
    a."language",
    c."name" as continent
from
    countrylanguage a
    inner JOIN country b ON a.countrycode = b.code
    INNER JOIN continent c on b.continent = c.code
WHERE
    isofficial = true) as LANGUAGE
    GROUP BY continent
    ORDER BY  numLanguage
    