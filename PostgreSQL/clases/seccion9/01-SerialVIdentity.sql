/** Creacion automatica de LLaves Primarias
SERIAL
IDENTITY (define el tipo de entero )
PrimaryKey Compuesta
UUID
Secuenciaspersonalizadas

*/
/*

SERIAL (nos sirve para crear un id correlativo .. si creamos una tabla con serial ... podemos ponerle un id y manipularlo no necesariamente tiene que ser autoincremental .. pero si hay un id que no se asignó anteriormente el SERIAL lo asigna autocorrelativo Es muy volatil 

VS IDENTITY tiene beneficios .. podemos poner diferentes tipos de datos y permite que nadie pueda forzar manipular los id de manera manual

*/

create TABLE "users"("user_id" SERIAL PRIMARY KEY, "username" VARCHAR);
create TABLE "users2"("user_id" INTEGER GENERATED by DEFAULT as IDENTITY PRIMARY KEY, "username" VARCHAR);
/*
* Utilizamos el mismo querie pero quitando el by default ASI YA NO se podra manipular el ID*/
create TABLE "users3"(
    "user_id" INTEGER GENERATED ALWAYS as IDENTITY PRIMARY KEY,
    "username" VARCHAR
);

create TABLE "users4"(/** Si empezamos a manipular los id siempre nos saldra error ya que siempre se generaran automaticamente en la condicion establecida (empieza en 100 y se incrementa x 2*/    "user_id" INTEGER GENERATED ALWAYS as IDENTITY PRIMARY KEY(START WITH 100 INCREMENT by 2),
    "username" VARCHAR
);