let a = 110;
if (a == 10) {
  console.log("a es menor o igual a 10");
} else {
  console.log("a es diferente de 10");
}
console.log("Termina");

const hoy = new Date();

let dia = hoy.getDay();

console.log({ dia });

if (dia === 5) {
  console.log("Viernes");
} else {
  if (dia === 1) {
    console.log("lunes");
  } else {
    console.log("No es lunes");
  }
}
console.log(dia);

//SIN USAR IF,ELSE, SWitCH, solo objetos/arreglos

dia = 6; //domingo es 0, lunes,

//dia de la semana

const diaLetras = {
  0: "Lunes",
  1: "Martes",
  2: "Miercoles",
  3: "Jueves",
  4: "Viernes",
  5: "Sadabo",
  6: "Domingo",
};

const diasArr = [
  "Domingo",
  "lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

console.log(diaLetras[dia] || "Dia no valido");
console.log(diasArr[dia]);
