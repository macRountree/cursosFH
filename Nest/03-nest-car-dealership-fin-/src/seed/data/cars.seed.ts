import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
// Las clases / interfaces que no tienen dependencias se pueden importar directo
export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
  { id: uuid(), brand: 'Ford', model: 'Fusion' },
];
