WITH RECURSIVE bosses as (
    -- init
    /* podemos poner especificamente las columnas en lugar de traernos todo (*)*/
    SELECT
        id,
        name,
        report_to
    FROM
        employees
    WHERE
        id = 5
    UNION
        -- Recursive
 SELECT employees.id, employees.name, employees.report_to
    FROM
        employees
        /* Unimos el id de bosses con el id del reports to para desplegar los subordinados del Jefe carlos*/
        INNER JOIN bosses on bosses.id = employees.report_to
)
SELECT
    *
FROM
    bosses;