/*Querie para  Unir las 3 Americas*/


SELECT
    count(*) as numberOfCountries,
    b.name as continentName
from
    country a
   
    inner JOIN continent b on a.continent = b.code
    

    
GROUP by
    continentName
    
 
    ORDER BY numberOfCountries;




SELECT
    count(*) as numberOfCountries,
     CASE
        WHEN b.name IN ('Central America','South America','North America') THEN 'America'
        ELSE b.name
    END as continentName
from
    country a
    
    inner JOIN continent b on a.continent = b.code
GROUP by
    continentName 
    ORDER BY numberOfCountries;
    
    
    
    /*oTRA FORMA DE HACERLO*/
    
 ( select
    COUNT(*) as total, b.name as continentName
from
    country a
    INNER join continent b on a.continent = b.code
   where b."name"  not like '%America%'
GROUP BY
   continentName
    
    ORDER BY COUNT(*) ASC)
    UNION 
    
    (SELECT count(*) as total , 'America' as America from country a 
    INNER JOIN continent b on a.continent = b.code
       where b."name"   like '%America%')
       
       
       ORDER BY total asc