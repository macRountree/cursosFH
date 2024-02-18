-- Si observamos el surfacearea (area de superficie) vemos que podemos cambiar el valor a negativo lo cual es imposible..
-- esto porque el dataType es un float y este permite valores negativos

-- check : Son verificaciones que queremos realizar en los campos de nuestra tabla (trigger)


SELECT * FROM country;
--Para hacer una modificacion a la tabla en este caso un check, debemos alterar la table
-- añadir el check y la columna que queramos cambiar(surface) y condicionarla a que el area sea positiva siempre
ALTER TABLE
    country
add
    CHECK(surfacearea >= 0);--Si intentamos cambiar un valor negativo a la tabla nos arrojara un error
    --Queremos verificar que los continentes no se puedan manipular
    
SELECT
    DISTINCT continent
from
    country;
ALTER TABLE
    country
add
    CHECK(
    -- condicionamos que cada continente tenga sus nombres 
    -- tambien podemos castear cada continente, en este caso les asignamos un dato
        (continent = 'Asia'::TEXT)
        OR (continent = 'South America'::TEXT)
        OR (continent = 'North America'::TEXT)
        OR (continent = 'Central America'::TEXT)
        OR (continent = 'Oceania'::TEXT)
        OR (continent = 'Antarctica'::TEXT)
        OR (continent = 'Africa'::TEXT)
        OR (continent = 'Europe'::TEXT)
        --Si llegasemos a asignar Europe 2 o Oceania 2 en algun campo  de un pais .. nos arrojara error
    );
    
    
    --Si queremos agregar un check a continent y agregar Central America ... nos arrojara error.. para eso primero
    --Debemos hacer un DROP del contrain (country_continent_check) ya que no nos dejara manipular la col continent
    
    alter TABLE country DROP CONSTRAINT "country_continent_check1"; --Si sigue apareciendo error  dropeamos el constrain del mensaje
    
    
    
    
    
    
    -- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."country" (
    "code" bpchar(3) NOT NULL,
    "name" text NOT NULL,
    "continent" text NOT NULL,
    "region" text NOT NULL,
    "surfacearea" float4 NOT NULL,
    "indepyear" int2,
    "population" int4 NOT NULL,
    "lifeexpectancy" float4,
    "gnp" numeric(10,2),
    "gnpold" numeric(10,2),
    "localname" text NOT NULL,
    "governmentform" text NOT NULL,
    "headofstate" text,
    "capital" int4,
    "code2" bpchar(2) NOT NULL,
    PRIMARY KEY ("code")
);
    