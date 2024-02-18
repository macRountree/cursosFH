/*
*CTE recursivos

Son utiles cuando tenemos una estructura Jerarquicas  ( Jefe, subjefes ,gerentes, subjerentes. Presidewnte}})
 
*/



--Nombre de nuestra tabla en memoria o virtual
--Campos que vamos a tener
WITH RECURSIVE  countdown(val) as (

	/* ! iniccializacion : el primer nivel o valores iniciales*/
	select 1 as val
	UNION
	
	/*Query Recursivo*/
	/*El valor de val resta las vueltas en 1 hasta que sea mayor a 1*/
	SELECT val + 1 from countdown where val < 10
) 


/* Select de los campos*/

SELECT * FROM countdown;