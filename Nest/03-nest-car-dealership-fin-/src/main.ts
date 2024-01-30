// !Esta vez haremos todo de nuevo pero trabajando con laparte de brands
// ! Utilizaremos el nest CLI resourse
// ! Haremos un nuevo endtpoint con Brands teniendo un listado de marcas al tener un Get
// !Adicionaremos fecha de entrada y otras cosas
// !Crearemos un modulo para las brands y el modulo de auth
// ! podemos hacer un crud resource con un comando de nest para no teneer que realizar todo lo de la carpeta carsre

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
