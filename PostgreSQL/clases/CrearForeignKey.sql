-- CREAR LLAVES FORANEAS

-- Podemos hacerlo en la estructura de nuestra tabla y ahi crearlas pero tambien podemos crearla con sentenciasSQL

--Sabemos que las 3 tablas 1 es la principal (Country) --- y la relacion con city es de 1 a muchos (1 pais tiene muchas ciudades),  y 1 pais puede tener muchos lenguajes (city y countrylanguages respectivamente )  city es dependiente de countre porque tiene el countrycode en su estructura 

ALTER table countrylanguage add CONSTRAINT "fk_country_code"
	FOREIGN KEY (countrycode) REFERENCES country (code); -- on delete cascade .. si borramos el code de countrry borrara las referencias
	
	
	--nos salta error porque el coountry code  AFG no esta en la tabla 
		
	SELECT * FROM country where code = 'NAM'; -- nos mostrara que no tenemos nada entonces tenenmos 2 opciones , agregar AFG a-  sdf  -sdfsdf -afganistan o  borrar el codigo AFG
	
	
	SELECT * FROM city WHERE countrycode = 'NAM';
	
	INSERT INTO country
		values('AFG', 'Afghanistan', 'Asia', 'Southern Asia', 652860, 1919, 40000000, 62, 69000000, NULL, 'Afghanistan', 'Totalitarian', NULL, NULL, 'AF');
		
		INSERT INTO country
VALUES ('NAM', 'Namibia', 'Africa', 'Southern Africa', 825418, 1990, 2540905, 63.7, 7137, 7834, 'Namibia', 'Republic', 'Hage Geingob', 3375, 'NA');




-- Si queremos borrar un pais de la llave primaria country ... nos arrojara error... ya que mi constraint de llaves foraneas dependen de mi llave primaria
