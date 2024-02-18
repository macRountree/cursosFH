/*
tablA WHERE ... no recomendble porque es muy propenso a errores

SE pueden poner alias  (country a )


En dado caso de que tengamos tablas con los mismos nombres ... siempre usar alias hasta donde sea posible

*/;
SELECT
    a.name as country,
    b.name as continent
FROM
    country a,
    continent b
where
    a.continent = b.code
order BY
    a.name ASC