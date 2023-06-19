//ciclo FOR

const heroes = ["Bat", "Superman", "Wonderwoman", "Aquaman"];

console.warn("For");

for (let heroe = 0; heroe < heroes.length; heroe++) {
  console.log(heroes[heroe]);
}
console.warn("For IN");

for (let heroe in heroes) {
  console.log(heroes[heroe]);
}

//Es para obtener referencias para objetos

console.warn("For on");

for (let heroe of heroes) {
  console.log(heroe);
}
