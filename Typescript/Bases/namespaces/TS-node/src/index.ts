import { Pokemon } from "./decorator/pokemon-class";

const charmander = new Pokemon("Charmander");

//marca error en customNmae prque Pokemon tiene le decorador blockprototipo
//lo cual no deja expandir propiedades
// (Pokemon.prototype as any).customName = "Pikachu";
// console.log(charmander);
charmander.publicApi = "https://fernando-herrera.com";
console.log(charmander);
