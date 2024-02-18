
/*

Utilizaremos el lenguaje plpgsql para crear funciones, triggerws etc


El objetivo de las funciones es facilitarnos la vida 


*Debemos utilizar el snakeCase
*/
SELECT greet_employee('Mac');
/*la funcion se puede concatenar la respuesta que queramos como argunmento
En este caso podemos crear una columna de nuestra funcion con el firstname de la tabla employees como argumento
*/
SELECT first_name, greet_employee(first_name) FROM employees;
/*Creamos o remplazamos la funcion ---- recibiendo el nombre del empleado*/
CREATE or REPLACE FUNCTION greet_employee(employee_name VARCHAR)

RETURNs VARCHAR /*En nuestras funciones queremos regresar un dato como varchar, json etec como tenemos un holamundo en el return .... debemos declarar varchar en el RETURNS*/

as
$$
BEGIN
	RETURN 'hola ' || employee_name;
END
$$

LANGUAGE plpgsql;