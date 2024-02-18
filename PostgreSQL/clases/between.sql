--OPERADOR BETWEEN
SELECT
    first_name,
    last_name,
    followers
from
    users
WHERE
    --followers >= 4600
    --AND followers <= 4700
    followers BETWEEN 4600 and 4700
ORDER BY
    followers DESC;