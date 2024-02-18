/*

Tarea comun es sumar fechas dias horas , o incrementar 

 Se nos pide que se sume 1 mes (por ejemplo 1 mes de servicio en Netflix)
 
 Sera volatil porque hay meses que tienen 28 30 y  31 dias
 
 Podemos usar intevar para sumar 1 dia , 1 mes o un año a la fecha establecida
*/
SELECT
    max(hire_date),
  --  MAX(hire_date) + INTERVAL '1 days' as days,
    
  --  MAX(hire_date) + INTERVAL '1 month' as months,
    /*aqui estamos sumando 1 año 1 mes*/
    MAX(hire_date) + INTERVAL '1.1 years' as years,
    /*Aqui estamos llamando el año actual*/
    date_part('year',now()),
    
    /*Aqui estamos diciendo los años que an pasado */
    MAKE_INTERVAL(YEARS := date_part('year',now())::INTEGER),
    MAX(hire_date) + MAKE_INTERVAL(YEARS := 23)
from
    employees;