/*
CTE Common Table Expressions - CTE



Se prefieren utilizarlos en 2 casos

1- El mas comun es cuando queremos simplificar nuestros queries ... esto lo hacemos creando vistas temporales



*/
/*Despues de la creacion*/
/*Se nos pide los post cuyos total de claps sea mayor a 600
  Para esto utilizando el where para el año y having para > 600
  
  
  Esto se puede complicar pero ... podemos utilizar el CTE
  
  */
/*Para hacer CTE utilizamos el with nombre de CTE y as y encerramos nuestro querie*/
WITH posts_week_2021 as (
    SELECT
        date_trunc('week' :: text, posts.created_at) AS weeks,
        sum(claps.counter) AS total_claps,
        count(DISTINCT posts.post_id) AS number_of_posts,
        count(*) AS number_of_claps
    FROM
        posts
        JOIN claps ON claps.post_id = posts.post_id
    GROUP BY
        (date_trunc('week' :: text, posts.created_at))
    ORDER BY
        (date_trunc('week' :: text, posts.created_at)) DESC
)
SELECT
    *
FROM
    posts_week_2021 WHERE weeks BETWEEN '2024-01-01' and '2024-12-31' and total_claps > 600;
    
    /*el CTE simplifica la complejidad de un querie ... son Totalmente necesarios cuando queremos hacer Queries Recursivos*/