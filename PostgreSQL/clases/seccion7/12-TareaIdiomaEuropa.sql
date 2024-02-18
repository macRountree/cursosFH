-- ¿ Cu á l es el idioma (y c ó digo del idioma) oficial m á s hablado por diferentes pa í ses en Europa ?
select
    count(*) as total,
    a."language" as languagename,
    c."name" as continent,
    a.languagecode
from
    countrylanguage a
    INNER JOIN country b on a.countrycode = b.code
    INNER JOIN continent c on b.continent = c.code
where
    isofficial = true
    and c."name" like 'Europe'
GROUP BY
    languagename,
    a.languagecode,
    c."name"
ORDER by
    total desc;
/*Solucion FH*/
select
    COUNT(*) as total,
    b.languagecode,
    b."language"
from
    country a
    INNER JOIN countrylanguage b on a.code = b.countrycode
WHERE
    continent = 5
    and b.isofficial = TRUE
GROUP BY
    b.languagecode,
    b."language"
ORDER BY
    total DESC LIMIT 1
    ;
select
    *
from
    continent;

Select * from "language";







-- Listado de todos los países cuyo idioma oficial es el más hablado de Europa 
-- (no hacer subquery, tomar el código anterior)


select
    COUNT(*) as total,
    b.languagecode,
    a."name" as country,
    b."language"
from
    country a
    INNER JOIN countrylanguage b on a.code = b.countrycode
WHERE
    a.continent = 5
    and b.languagecode = 135
    and b.isofficial = TRUE
GROUP BY
    b.languagecode,
    a."name",
    b."language"
ORDER BY
    total DESC 
    
    ;




