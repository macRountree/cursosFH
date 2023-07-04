const heroes = ["Batman", "Superman", "Flash", "WW"];
// const heroesCopy = heroes; //ssi igualamos se ordenan los 2arreglos
//sort manipula los en este caso los 2 arreglos pero solo
// const sortedHeroes = heroes.toSorted();

heroes.sort();

heroes.reverse(); //reverse revierte el arreglo

const reverseHeroes = heroes.toReversed(); ///To reversed deja el arreglo igual y el reverse  sale alreves
console.table(heroes);

console.table(reverseHeroes);
// console.table(heroesCopy);

// console.table(sortedHeroes);
