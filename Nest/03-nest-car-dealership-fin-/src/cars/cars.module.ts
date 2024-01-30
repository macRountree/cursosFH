import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  // Exportamos nuestro CarsService  para que no nos de error al momento de crear el sEED
  exports: [CarsService],
})
export class CarsModule {}
