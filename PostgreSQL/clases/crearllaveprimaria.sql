-- crear LLave primaria manualmente
select
    *
from
    country;
ALTER TABLE
    country
    --Asi creamos una LLave primaria  ... Casi siempre el primer campo de una tabla es su llave primaria en este caso el código del pais dificilmente puede ser cambiado y todos son diferentes dependienddo del pais

add
    PRIMARY KEY (code);
    
    