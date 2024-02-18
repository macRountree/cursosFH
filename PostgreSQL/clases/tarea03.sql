--*---Escribir 2 nuevas columnas llamadas fisrstname y last_name y llenarlas con nombre y apellidos respectivamente



SELECT * FROM users;

SELECT
    name,
    SUBSTRING(name, 0, 5),
    POSITION('' in name);
    --SUBSTRING(name, 0, POSITION(' ' in name)) as first_name,
    -- SUBSTRING(name, POSITION(' ' in name) + 1) as last_name;
   -- TRIM(SUBSTRING(name, POSITION('' in name))) as last_name
FROM
    users;
    --
    -- ? Agregamos   nuevas columnas a nuestra tabla y seteamos los nombres y apellidos
UPDATE
    users
SET
    first_name = SUBSTRING(name, 0, POSITION(' ' in name)),
    last_name = SUBSTRING(name, POSITION(' ' in name) + 1);
    
    
 SELECT * from users;