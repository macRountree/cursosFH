/*


*/
-- Tarea con countryLanguage

-- Crear la tabla de language

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS language_code_seq;


-- Table Definition
CREATE TABLE "public"."language" (
    "code" int4 NOT NULL DEFAULT 	nextval('language_code_seq'::regclass),
    "name" text NOT NULL,
    PRIMARY KEY ("code")
);

-- Crear una columna en countrylanguage
ALTER TABLE countrylanguage
ADD COLUMN languagecode varchar(3);

--
/*Antes debemos pasar la  columna language de country language a la tabla language.name*/
SELECT DISTINCT LANGUAGE from countrylanguage ORDER BY LANGUAGE ASC;

INSERT into language(name) SELECT DISTINCT LANGUAGE from countrylanguage ORDER BY LANGUAGE ASC;
-- Empezar con el select para confirmar lo que vamos a actualizar
/*queremos que la columna language de countrylanguage sea igual a la columna code de la tabla language */
select
    "language", (
        SELECT
            "code"
        from
            LANGUAGE b
        WHERE
            a."language" = b."name"
    )
from
/*Actualizar todos los registros (en la nueva tabla de countrylanguage (languagecode) actualizamos eel code de cada pais)*/
UPDATE
    countrylanguage a
set
    languagecode = (
        SELECT
            "code"
        from
            LANGUAGE b
        WHERE
            a."language" = b."name"
    );
    
    select  * from countrylanguage;
    
    -- Cambiar tipo de dato en countrylanguage - languagecode por int4
    ALTER TABLE countrylanguage
    ALTER COLUMN languagecode TYPE int4 USING languagecode::integer;
    -- Crear el forening key y constraints de no nulo el language_code
    ALTER TABLE countrylanguage add CONSTRAINT "fk_language_code"
    FOREIGN key (languagecode) REFERENCES language (code);
    
    -- Revisar lo creado
    
    SELECT * from countrylanguage;