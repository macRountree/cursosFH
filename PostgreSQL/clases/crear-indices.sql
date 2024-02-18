--Hay varias columnas para poder crear indicces (paises por nombre o por continente o por codigo
--podemos crear indices unicos (no se repiten , por ejemplo: nombre paises) o indices duplicados ( paises por region )
-- Los indices toman ciertos pesos en la DB , y sera proporcional su peso a la db

--Considerar crear indices antes de crear tablas con millones de datos para que no demore su ordenamiento

SELECT
    *
FROM
    country WHERE continent = 'Africa';
--crear indices de name (unico)
CREATE  index "country_continent" on country (
    --sabemos que el nombre de un pais sera unico
    --name.
    -- en el caso de continent debemos quitarle el unique en el string y en la clausula
    continent
);