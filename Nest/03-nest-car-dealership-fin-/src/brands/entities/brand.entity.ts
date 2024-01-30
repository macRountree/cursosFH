// ! Es parecido al interface pero entities es la representación de una tabla Brands
//!  Es como si tuvieramos una referencia abstreacta de lo que inyectariamos a la DB
export class Brand {
  // ! OJO AQUI ESTRUCTURAMOS LAS PROPIEDADES DE LA TABLA DE LA BD

  id: string;
  name: string;
  createdAt: number;
  updatedAt?: number;

  //   *Mandamos el entity a nuestro services
}
