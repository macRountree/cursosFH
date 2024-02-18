/*
*CTE recursivo tabla de multiplicar
*/


WITH RECURSIVE multi_table(base, val, result) as (

SELECT 5 as base, 1 as val , 5 as result

union 
SELECT 5 as base, val + 1 , (val+1) * base from multi_table where val <10


)


SELECT * from multi_table;