/*GROUP BY con otras funciones*/
/*obtener el dominio de email y contarlos cuantos usuarios tienen determinado correo*/
SELECT
    COUNT(*),
    SUBSTRING(email, POSITION('@' in email)+1) as domain
    /*Recordar que para partir un string es substring y  tomar cierta posicion con POSITION*/
from
    users
    
    GROUP by DOMAIN //* Podemos utilizar el alias*/
    HAVING COUNT(*) >1
    
    ORDER BY  DOMAIN DESC