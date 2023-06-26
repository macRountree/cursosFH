let a = 10;

let b = a;
a = 30;

// console.log({ a, b });

let juan = { nombre: "juan" };

let ana = { ...juan };
ana.nombre = "ana";
// console.log(juan);
// console.log(ana);

//el operador spread {...persona} rompe la referencia y
//ahora si hay diferenciacion en los nombres de esta funcion
const cambiaName = ({ ...persona }) => {
  persona.nombre = "tony";
  return persona;
};

let peter = { nombre: "peter" };
//peter pasa por referencia ala funcion  cambiaName
//esto hace que se cambie  el nombre a tony
//
let tony = cambiaName(peter);

// console.log(peter, tony);

//========Arreglos

const frutas = ["manzana", "pera", "piña"];
//para que no imprima mango dentro del arreglo frutas podremos hacer el spread dentro de [...frutas]
// const otrasFrutas = [...frutas];

//Otra manera de romper la referencia es con slice

console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");
console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");

otrasFrutas.push("mango");

console.table({ frutas, otrasFrutas });
