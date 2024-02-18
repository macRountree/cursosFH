SELECT
    COUNT(*) as total_users, -- cantidad de usuarios 
    MIN(followers) as min_followers, -- minimo seguidores
    MAX(followers) as max_followers, -- Maximo de seguidores
    round( AVG(followers)) as avg_followers, --Promedio de seguidores redondeado
	SUM(followers) / COUNT(*) as avg_manual  -- funciones sumar y dividir conteo
FROM
    users;
-- --
select
    *
FROM
    users;
select
    first_name,
    last_name,
    followers
from
    users
WHERE
    followers = 4
    OR followers = 4999 --Si la palabra clave es AND .. es falso porqque estamos esperando resultados diferentes
FROM
    users;
-- Seleccionamos la cantidad de usuarios que tenga 4999
select
    count(*), --despliega la cantidad
    followers--despliquega los followers
from
    users
WHERE
    followers BETWEEN 4500
    and 4999 -- los followers entre 4500 y 4999. si usamos el AND debemos usar el GROUP BY si no el OR
    
    GROUP BY followers
    ORDER BY followers DESC;
    

