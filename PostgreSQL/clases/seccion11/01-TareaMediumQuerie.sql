-- 1. Cuantos Post hay - 1050

SELECT count(*) from posts;


-- 2. Cuantos Post publicados hay - 543
 SELECT COUNT(*) from posts WHERE published = true;

-- 3. Cual es el Post mas reciente
-- 544 - nisi commodo officia...2024-05-30 00:29:21.277


SELECT * from posts order by created_at DESC LIMIT 1;
-- 4. Quiero los 10 usuarios con más post, cantidad de posts, id y nombre
/*
4	1553	Jessie Sexton
3	1400	Prince Fuentes
3	1830	Hull George
3	470	Traci Wood
3	441	Livingston Davis
3	1942	Inez Dennis
3	1665	Maggie Davidson
3	524	Lidia Sparks
3	436	Mccoy Boone
3	2034	Bonita Rowe
*/
SELECT
    count(*) as total,
    a.created_by,
    b."name" as nombre_usuario
from
    posts a
    INNER JOIN users b ON a.created_by = b.user_id
GROUP BY
    created_by,
    nombre_usuario
ORDER by
    total DESC
LIMIT
    10;
    
    SELECT * from users WHERE user_id = 1553;
-- 5. Quiero los 5 post con más "Claps" sumando la columna "counter"
/*
692	sit excepteur ex ipsum magna fugiat laborum exercitation fugiat
646	do deserunt ea
542	do
504	ea est sunt magna consectetur tempor cupidatat
502	amet exercitation tempor laborum fugiat aliquip dolore
*/
SELECT
    sum(a.counter),
    /* * Literal quiere que sumemos la columna counter*/
    b.title
from
    claps a
    INNER JOIN posts b on b.post_id = a.post_id
GROUP BY
    b.title
ORDER BY
    SUM DESC
LIMIT
    5;
-- 6. Top 5 de personas que han dado más claps (voto único no acumulado ) *count
/*
7	Lillian Hodge
6	Dominguez Carson
6	Marva Joyner
6	Lela Cardenas
6	Rose Owen
*/
SELECT
    count(*) as total_claps,
    
    b."name"
from
    claps a
    
    
    INNER JOIN users b ON a.user_id = b.user_id
GROUP BY
    b."name"
ORDER BY
    total_claps DESC LIMIT 5;
-- 7. Top 5 personas con votos acumulados (sumar counter)
/*
437	Rose Owen
394	Marva Joyner
386	Marquez Kennedy
379	Jenna Roth
364	Lillian Hodge
*/
SELECT
    sum(a.counter) as suma_claps,
    b."name"
FROM
    claps a
    
    
    INNER JOIN users b on b.user_id = a.user_id
GROUP by
    b."name"
ORDER by
    suma_claps DESC LIMIT 5;
-- 8. Cuantos usuarios NO tienen listas de favoritos creada
-- 329
/*
*Usamos el left join con exclusion
*/
SELECT
   COUNT(*)
FROM
    users a
    LEFT JOIN user_lists b ON b.user_id = a.user_id WHERE b.user_list_id is NULL;

-- 9. Quiero el comentario con id 1
-- Y en el mismo resultado, quiero sus respuestas (visibles e invisibles)
-- Tip: union
/*
1	    648	1905	elit id...
3058	583	1797	tempor mollit...
4649	51	1842	laborum mollit...
4768	835	1447	nostrud nulla...
*/

SELECT * from COMMENTS WHERE comment_id = 1

UNION
 /*
 * Recordad que los comentarios hijos (los anidados ) tienen un id padre es decir esas respuestas a comentarios 
 */
SELECT * FROM "comments" WHERE comment_parent_id = 1;
-- ** 10. Avanzado
-- Investigar sobre el json_agg y json_build_object
-- Crear una única linea de respuesta, con las respuestas
-- del comentario con id 1 (comment_parent_id = 1)
-- Mostrar el user_id y el contenido del comentario
-- Salida esperada:
/*
"[{""user"" : 1797, ""comment"" : ""tempor mollit aliqua dolore cupidatat dolor tempor""}, {""user"" : 1842, ""comment"" : ""laborum mollit amet aliqua enim eiusmod ut""}, {""user"" : 1447, ""comment"" : ""nostrud nulla duis enim duis reprehenderit laboris voluptate cupidatat""}]"
*/

    --     json_agg(comment_id)
    
    /*json_build_object es una funcion json que convierte una serie de datos en un objeto JSON..
    	En este caso nos pide como argumento una llave y un valor 
    	El problema nos pide que en 1 linea tengamos el id del usuario del commentario y la resppuesta al comentario padre en 1 sola linea*/
    
    json_build_object(
        'user',
        comments.user_id,
        'comment',
        COMMENTS.content
    ) ,/* Esto nos lanzara 3 rows con la respuesta de cada user ... pero el problema nos pide que este todo en 1 row
    
    para esto encerammos nuestros 3 resultados en un json_agg para que muestre todo en 1 sola linea
    */
    SELECT
json_agg(  /*El json agg puede encerrar el json build object teniendo un arrayObject*/
    json_build_object(
        'user',
        comments.user_id,
        'comment',
        COMMENTS.content
    )
)
FROM
    comments
WHERE
    comment_parent_id = 1;
-- ** 11. Avanzado
-- Listar todos los comentarios principales (no respuestas)
-- Y crear una columna adicional "replies" con las respuestas en formato JSON
/*Los comentarios principales son todos aquellos que son PADRES .. entonces como son padres su comment_parent_id es null*/
SELECT
    a.*,
    (
        SELECT
            json_agg(
                /*El json agg puede encerrar el json build object teniendo un arrayObject*/
                json_build_object(
                    'user',
                    b.user_id,
                    'comment',
                    b.content
                )
            ) as replies
        FROM
            comments b
        WHERE
            b.comment_parent_id =  a.comment_id
    )
FROM
    COMMENTS a
WHERE
    comment_parent_id ISNULL; /*Para filtrar los comentarios Padres no deben tener el comment_parent_id es decir debe ser nulo*/



