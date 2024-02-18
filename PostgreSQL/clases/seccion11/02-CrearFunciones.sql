/* Podemos utilizar y crear funciones en DB para facilitar la lectura  y reutilización de queries


*Este es el cuerpo de una funcion creada
	
*/
CREATE or REPLACE FUNCTION public.comment_replies(id INTEGER)  /*Es como cuaquier funcion en Progra y debe recibir un arg*/
RETURNS json  /*Le indicamos que tipo de variable devuelve*/
AS 
$$  /* Este es el scope de nuestra funcion parecido a las { } */

DECLARE result json;
BEGIN  /*Debemos indicarle el inicio y el fin*/
	     SELECT
json_agg(  /*El json agg puede encerrar el json build object teniendo un arrayObject*/
    json_build_object(
        'user',
        comments.user_id,
        'comment',
        COMMENTS.content
    )
) INTO result
FROM
    comments 
WHERE
    comment_parent_id = id; /*Podemos concatenarle el argumento recibido por users*/
    
    
    RETURN result;
END;
$$
LANGUAGE plpgsql; /*Debemos indicarle */



SELECT comment_replies(4); /*Podemos llamar la funcion con parametros y utilizarlo*/




/*Una vez realizada la funcion podemos utilizarla para tener mas  compacto el coódigo*/


    SELECT
    a.*,
	 comment_replies(a.post_id) as replies

FROM
    comments a 
WHERE
    comment_parent_id is NULL;