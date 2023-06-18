let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coord: {
    lat: 52.0,
    Ing: -1188,
  },
  trajes: ["Marks", "Tony", "Hulkb"],
  direccion: {
    zip: "234234, 234324",
    ubicacion: "Malibu, CA",
  },
  ultimaPelicula: "Infinity War",
};

console.log(personaje);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);
console.log("Coord", personaje.coord.lat);
console.log("Trajes", personaje.trajes.length);
console.log("Trajes", personaje["ultimaPelicula"]);

//Busqueda de valores dentro de objetos
//En este caso vivo lo busca en personaje .. le podemos asignar x en el arreglo
const x = "vivo";
console.log("Vivo", personaje[x]);

//==============MAS DETALLES

//Borrando propiedad

personaje.edad = null;
