/*
Funciones basicas y comunes de Fechas

Funcion now() es la combinacion de CURRENT_TIME y CURRENT_DATE
 CURRENT_DATE
 CURRENT_TIME
 date_part( ) 
*/
SELECT
    now(),
    CURRENT_DATE,
    CURRENT_TIME,
    date_part('minutes', now()) as minutes,
    date_part('seconds', now()) as seconds,
    date_part('days', now()) as days,
    date_part('months', now()) as months;