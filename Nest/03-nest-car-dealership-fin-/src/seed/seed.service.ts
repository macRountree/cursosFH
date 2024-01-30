import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed copy';
import { CarsService } from 'src/cars/cars.service';
import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  // Necesito crear metodos  para llegar a los privates de Car y vrabds en sus respectivos services

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    //cargamos semilla de informacion y lo mandamos al controler del get
    // Este servicio puede servir como inyeccion de dependencias de otros servicios (el de cars y elde brands

    //!Inyectamos el metodo de cada servicio

    //Cars
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    //Brands
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED);
    return 'Seed success';
  }
}
