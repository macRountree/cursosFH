/*

Diferencia en tre Fechas yActualizaciones

Tenemos que tratar los queries de manera dinamica
En el futuro podemos utilizarlo y siempre cambian las fechas
*/
SELECT
    hire_date,
   
    /*El extract nos pide que casteemos
    
    Seleccionamos la fecha actual eneste caso 2024, y restamos con extract que seria los años del hiredate es decir si una persona fue contratada en el 87 --- le restamos el año actual para verificar su antiguedad
    */
    MAKE_INTERVAL(YEARS:= 2024 - EXTRACT(YEARS FROM hire_date)::INTEGER),
    /*Esta querie es computada con el año actual*/
    MAKE_INTERVAL(YEARS:= date_part('years', CURRENT_DATE)::INTEGER - EXTRACT(YEARS FROM hire_date)::INTEGER) as computed
FROM
    employees ORDER BY hire_date DESC;
    
    
    /*TAREA : Actualizar la base de datos de empleado y sumar la cantidad de años actual*/
    
    /*OJO : ANTES DE hacer actualizacion masiva,, probemos  todo 
    
    seteamos el hire_date  y le sumamos un intervalo del año actual
    */
    UPDATE employees set  hire_date = hire_date + INTERVAL '24 years';
    