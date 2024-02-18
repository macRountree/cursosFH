/*

Queremos mostrar el pais con mas ciudades
columnas Total de Ciudades y nombre del pais

usar inner join


Country.code = city.code
*/
/*Muestra los codigos de los paises */
select
    count(*) as totalCities,
    b.countrycode as countryname
from
    country a
   
    INNER JOIN city b  on a.code = b.countrycode
    
    
GROUP BY
    countryname;
/*Otra solucion*/
SELECT
    COUNT(*) as totalCities,
    b.name as countryName
FROM
    city a
    INNER JOIN country b on a.countrycode = b.code
   
GROUP BY
    countryName
      HAVING COUNT(*) >100
    ORDER by totalCities DESC;
  
    