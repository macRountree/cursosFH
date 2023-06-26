// function crearPersona(nombre, apellido) {
//   return {
//    nombre : nombre se puede simplificar si es el mismo valor del argumento
//     nombre,
//     apellido,
//   };
// }

//declaracion de funcion simplificada.. se elimina el return
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

//nombre : nombre se puede simplificar si es el mismo valor del argumento

const persona = crearPersona("fer", "Mac");

console.log(persona);

function imprimeArgs() {
  console.log(arguments);
}

//si queremos que imprima todos los argumentos de imprimeArgs2 con una funcion flecha
//utilizamos el parametro rest (...args)... solo que no podemos poner otro argumento despues de este
//si queremos usar un argumento antes de rest... debemos tener su propio argumento independiente (edad:10)
//todo lo demas sera args
const imprimeArgs2 = (edad, ...args) => {
  // console.log({ edad, args });

  return args;
};
const [casado, vivo, frase] = imprimeArgs2(10, true, false, "hola");

console.log({ casado, vivo, frase }); //regresa un arreglo con todos los argumentos

//destructuracion de arguments

const tony = {
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

// const imprimeProps = (personaje) => {
//   console.log(personaje.nombre);
//   console.log(personaje.codeName);
//   console.log(personaje.vivo);
//   console.log(personaje.edad);
//   console.log(personaje.ultimaPelicula);
// };

//funcion flecha desctructurada
const imprimeProps = ({ nombre, codeName, ultimaPelicula, edad = 15 }) => {
  edad = edad || 0;
  console.log({ nombre });
  console.log({ codeName });
  console.log({ ultimaPelicula });
  console.log({ edad });
};

imprimeProps(tony);
