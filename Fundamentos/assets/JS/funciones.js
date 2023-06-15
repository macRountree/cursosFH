function saludar(nombre) {
  //functions tiene un objeto implicito llamado arguments
  //no se define en ningun lugar.. y enlista todos los elementos que estan relacionados con la funcion
  // console.log(arguments);
  console.log("hola" + nombre);

  return 1, 2;
}

// var saludar = 53135;

//funcion anonima -- function no tiene nombre
//cuando asignamos una funcion a una constante... no se reutilizara
const saludar2 = function () {
  //
  console.log("hoasjda");
};

const saludarflecha = () => {
  console.log("holaflechar");
};

const saludarflecha2 = (nombre) => {
  console.log("Hola " + nombre);
};
saludar2();
const returnoSaludar = saludar("mac", 34, true, "Ecatepec");
console.log(returnoSaludar);

saludarflecha();
saludarflecha2("maui");

function sumar(a, b) {
  //el
  return a + b;
}

// console.log(sumar(1, 2));

// const sumar2 = (a, b) => {
//   return a + b;
// };

//funcion con return simplificado
const sumar2 = (a, b) => a + b;
console.log(sumar2(2, 2));
