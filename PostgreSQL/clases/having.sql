SELECT
    COUNT(*), /* Algunas DB trabajan con Alias y se puedeb declarar*/
    country -- Dará error si no usamos el group by
FROM
    user
GROUP BY
    country
HAVING
    COUNT(*) BETWEEN 1 and 5 --El having siempre va despues de grouby y antes de orderby
ORDER BY
    COUNT(*) DESC