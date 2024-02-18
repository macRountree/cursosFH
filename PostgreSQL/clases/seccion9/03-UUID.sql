/*
*UUID   

el gen_random_uuid() viene por defecto en Postgres 
pero si queremos utiliazr diferentes versiones de uuid debemos instalarlo
*/


/*Creamos una extension para utillizar el uuid */


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


/*
*Si queremos eliminar  la extension de uuid (aunque no ocupe mucho espacion en nuesytro DB utilizamos un drop
*/

DROP EXTENSION "uuid-ossp";

SELECT gen_random_uuid(), uuid_generate_v4();
CREATE TABLE users5(
    "user_id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    "username" VARCHAR
)