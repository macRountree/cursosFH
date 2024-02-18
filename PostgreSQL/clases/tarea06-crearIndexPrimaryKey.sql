-- 1.Crear una llave primaria en city (id)
SELECT
    *
FROM
    city;
    
    ALTER TABLE city ADD PRIMARY KEY(id)
    

-- 2. Crear un check en population, para que no soporte negativos
SELECT * FROM city;
	ALTER TABLE city ADD CHECK(population >= 0);

-- 3. Crear una llave primaria compuesta en "countrylanguage"
-- los campos a usar como llave compuesta son countrycode y language
	
	SELECT
    *
FROM
    city;
    	--Si queremos crear llaves primarias compuestas para 2 columnas esta es la sintaxis
    ALTER TABLE countrylanguage ADD PRIMARY KEY(countrycode,language);
    

-- 4. Crear check en percentage, 
-- Para que no permita negativos ni números superiores a 100

select * FROM countrylanguage;
 DELETE FROM countrylanguage  WHERE percentage = 0;
ALTER TABLE
    countrylanguage
ADD
    CHECK(
        percentage > 0
        AND percentage <= 100
    )