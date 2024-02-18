/*
Formas de encontrar el codigo de los continentes de america
     
     select * FROM continent where code in (4,6,8);
	select * FROM continent where name like'%America%';

*/
select
    *
FROM
    continent
where
    name like '%America%'
    /*
                	si queremos unir estas 2 queries (arriba y la (3,5) ) utilizamos la clausula UNION
                	OJO::: Si queremos utilizar la clausula UNION debe haber el mismo numero de columnas y que estas columnas hagan MATCH con el mismo tipo de dato
                */
UNION SELECT*from continent where code in (3, 5) order by name asc