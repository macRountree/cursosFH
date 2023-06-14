let juegos = ["Zelda", "Final Fantasy", "Mario", " RedDead"];

console.log("largo:", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log(primero, ultimo);

//forEach para iterar arreglos

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevoLenght = juegos.push("Crash");
console.log(nuevoLenght);

nuevoLenght = juegos.unshift("DK");
console.log(nuevoLenght);
//video24
