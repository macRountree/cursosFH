SELECT
    *
from
    city
-- si nos manda duplicado ...verificar si es verdadero el error (2 ciudades tiene el mismo distrito y nombre)
WHERE
    name = 'Jinzhou'
    and countrycode = 'CHN'
    and district = 'Liaoning'; 
    -- si sale error podemos ponerle Old Jinzou  a la ciudad para diferenciarlos
    
    
-- podemos crear indices en el name de city pero habra varios cities con el mismo nombre y NO puede ser unico -- podemos crear un indice unico con 2 o mas columnas -- Es necesario crear indice sen aquellas columnas altamentes consultadas -- nos ayudara ai
CREATE UNIQUE INDEX "unique_name_countrycode_district" on city ( name, countrycode, district);

CREATE INDEX "district" on city (district);
