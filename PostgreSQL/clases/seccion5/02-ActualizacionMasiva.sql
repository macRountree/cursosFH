/* Queremos que nuestra tabla de paises tengo una relacion con nuestra tabla continents con los continentes
Cuando hagamos una modificacion tenemos que hacer un backup..... si es en produccion hacemos el query en el backup

*/

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."country_backup" (
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

SELECT * from country ;
INSERT INTO
    country_backup (
        code,
        name,
        continent,
        region,
        surfacearea,
        indepyear,
        population,
        lifeexpectancy,
        gnp,
        gnpold,
        localname,
        governmentform,
        headofstate,
        capital,
        code2
    )
SELECT
    *
from
    country;
    
    /*TAmbien podiamos insertar solo poniendo el nombre en lugar de poner todos los campos
    
    Podemos hacer el volcado inverso  
    
    
    
    */
    
    
    
    
    SELECT * FROM country
    
    /*Si queremos hacer un cambio en un cambio tenemos que borrar el check del error arrojado*/
    
    ALTER TABLE country drop CONSTRAINT country_continent_check;
/**/
SELECT
    a.name,
    a.continent,
    (
        SELECT
            "code"
        from
            continent b
        WHERE
            b.name = a.continent
    )
from
    country a;
/* Actualizamos la tabña*/
UPDATE
    country a
set
    continent = (
        SELECT
            "code"
        from
            continent b
        WHERE
            b.name = a.continent
    );
    
    
    SELECT * FROM country