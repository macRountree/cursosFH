/*Queremos agrupar las fechas por semanas

Utilizamos el date_trunc



Supongamos que se nos pide la cantidad de claps por dicha semana
*/



/*Querie para crear views*/

CREATE view comments_per_week as
SELECT
    date_trunc('week', posts.created_at) as weeks,
    
    /*Contamos los diferentes post que hay por semanas .. y aplicamos los claps por post en esa semana*/
    COUNT( DISTINCT posts.post_id) as numbe_of_post,
     sum(claps.counter) as total_claps,
     
     COUNT(*) as number_of_claps
from
    posts
    
    INNER join claps on  claps.post_id = posts.post_id
GROUP BY
    weeks
ORDER BY
    weeks DESC; /*Nos muestra a la cantidad de semanas*/
    
    
    
   SELECT * FROM posts WHERE post_id = 1; /*Actualizamos el id con la fehca 2025*/
    SELECT * FROM claps WHERE post_id = 1;
    
    
    
    SELECT * FROM comments_per_week;  /*Podemos llamar la vista* pero si queremos sacar X info es mejor manipular la tabla y no la vista ... su 
    
    NO podemos hacer modificaciones en vistas , si queremos hacer cambios estructurales fuertes es mejor manipular la tabla -... o bien hacer un drop de la vista..... y actualizarla  en la tablla y crearla de nuevo
    
    */