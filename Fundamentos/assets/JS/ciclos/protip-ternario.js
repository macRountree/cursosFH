const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2dolares" : "10dolares");

console.log(elMayor(1000, 1511));
console.log(tieneMembresia(false));

//generamos arreglos con una condicion implicita

const amigo = false;

const amigoarr = [
  "peter",
  "Tony",
  "Strange",
  amigo ? "thor" : "loki",
  (() => "nick fury")(), //Esto es una funcion anonima autoninvocada
  elMayor(10, 15),
];

console.log(amigoarr);

const nota = 100; //A,B,C

const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 75
    ? "C+"
    : "F";

console.log(grado);
