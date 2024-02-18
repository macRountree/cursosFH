/*

Cambiar nombre de vistas  y vistas mat

*/


/* seleccionamos la vista normal  no habla nada de comentarios*/
/**/
SELECT *  from comments_per_week_mat;

/*La primera opcion es pegar todo el querie de comments y  le cambiamos el nombre y en el create le ponemos post_per_week ... es recomendable*/




/*La segunda opcion es utilizar el alter view*/
/*Si queremos cambiar las vistas materializadas no se pueden alteriar a menos que agreguemos la clausula Materialized*/

ALTER MATERIALIZED VIEW comments_per_week_mat RENAME to post_per_week_mat;