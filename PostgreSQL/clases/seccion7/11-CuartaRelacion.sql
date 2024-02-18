/*
* Se pide que  no se genere  la columna  a."language", de countrylanguage
* Se pide que se use la columna name de de la tabla name con sus respectivos innerjoin
* columna 1 el name de Laanguage y columna 2 el continente

*/


select
    DISTINCT a.name as LanguageName,
    d."name" as ContinentName
from
    language a
    inner JOIN countrylanguage b ON a.code = b.languagecode
    inner JOIN country c on c.code = b.countrycode
    INNER JOIN continent d on d.code = c.continent
WHERE
    isofficial = true
ORDER BY
    LanguageName;