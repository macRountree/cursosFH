/*
	Aggregations + Join
	OJO: recordar que para usar count necesito el fgrou
 Queremos la cantidad de paises que hay en cada continente... queremos que el name de la tabla continent se muestre en la columna continent de la tabla country  */
(
SELECT
   /*Contamos el numero de paisesen una columna y el nombre de los continentes */
   count(*) as numberOfCountries , b.name as continentName
from
    country a
    /*Utilizamos inner join para juntar la data  continent de la tabla country y la data de la tabla continent en su columna code*/
    inner JOIN continent b  on a.continent = b.code
    /*como utilizamos count debemos utilizar el group By ordenando el conteo de menor a mayor*/
    GROUP by  continentName)
    
    /*Si queremos que nuestros continentes inventados aparezcan en el querie como cero entonces hacemos otro querie*/
    UNION
    
   ( SELECT
   /*Contamos el numero de paisesen una columna y el nombre de los continentes */
  0 as numberOfCountries , b.name as continentName
from
    country a
    /*Utilizamos inner join para juntar la data  continent de la tabla country y la data de la tabla continent en su columna code*/
    RIGHT JOIN continent b  on a.continent = b.code
    WHERE a.continent  is NULL
    /*como utilizamos count debemos utilizar el group By ordenando el conteo de menor a mayor*/
    GROUP by  continentName 
    
    )
    ORDER BY numberOfCountries;