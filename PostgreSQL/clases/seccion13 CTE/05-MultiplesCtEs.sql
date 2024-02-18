/*

 * Multimples CTEs
	?
	
	
	En estos par de queries podemos unirolos con un JOIN pero
	tambien podemos usar un CTE
	
	
	
*/
WITH claps_per_post as (
    /*Total de claps por post*/
    SELECT
        post_id,
        SUM(counter)
    FROM
        claps
    GROUP BY
        post_id
), post_from_2023 as (

/*Post hechos en 2023*/
SELECT * FROM posts WHERE created_at BETWEEN '2023-01-01' AND '2023-12-31'
)

SELECT * FROM claps_per_post where claps_per_post.post_id in ( SELECT post_id FROM post_from_2023)