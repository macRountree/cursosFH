    /*la data no es una alias ... si toma espacio en nuestro DB y es tangible*/
    CREATE MATERIALIZED view comments_per_week_mat as
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
    weeks DESC; 
     
     
     
     
     SELECT * FROM comments_per_week;