WITH RECURSIVE bosses as (
    -- init
    /* podemos poner especificamente las columnas en lugar de traernos todo (*)*/
    
    /*Podemos crear una columna llamada deptth para verificar el nivel deprodundidad de nuestro CTE recursivo*/
  SELECT id, name, report_to, 1 as depth FROM employees WHERE id = 1
    UNION
        -- Recursive
 SELECT employees.id, employees.name, employees.report_to ,  depth + 1
    FROM
        employees
        /* Unimos el id de bosses con el id del reports to para desplegar los subordinados del Jefe carlos*/
        INNER JOIN bosses on bosses.id = employees.report_to 
        /*OJO: es recomendable tener una condicion para detener nuestro querie recursivo y hacerlo dentro de ka parte recursiva (Osea aqui)*/
        WHERE DEPTH <2
)
SELECT
    bosses.*, employees."name" as reports_to_name
FROM
    bosses 
    /*Queremos agregar los nombres de los report to*/
    LEFT JOIN employees on employees.id = bosses.report_to ORDER by DEPTH ;