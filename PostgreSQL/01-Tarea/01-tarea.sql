

-- 1. Ver todos los registros


-- 2. Ver el registro cuyo id sea igual a 10


-- 3. Quiero todos los registros que cuyo primer nombre sea Jim (engañosa)


-- 4. Todos los registros cuyo segundo nombre es Alexander


-- 5. Cambiar el nombre del registro con id = 1, por tu nombre Ej:'Fernando Herrera'


-- 6. Borrar el último registro de la tabla








-- 
SELECT
    name,
    SUBSTRING(name, 0, 5),
    POSITION('' in name),
    SUBSTRING(name, 0 , POSITION(' ' in name)) as first_name,
   SUBSTRING(name, POSITION(' ' in name)+1) as last_name
        
FROM
    users;