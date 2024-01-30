import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';
// Las clases / interfaces que no tienen dependencias se pueden importar directo
export const BRANDS_SEED: Brand[] = [
  { id: uuid(), name: 'Mitsubishi', createdAt: new Date().getTime() },
  { id: uuid(), name: 'Tesla', createdAt: new Date().getTime() },
  { id: uuid(), name: 'VW', createdAt: new Date().getTime() },
];
