import {Pokemon} from '../../../../Typescript/Bases/namespaces/TS-node/src/decorator/pokemon-class';
export const pokemonID = [1, 2, 3, 4, 5, 6];

pokemonID.push(+'1'); //! Esto es una conversion rápida en lugar de usar number

// Si queremos hacer que un objeto luzcade una manera usamos Interface

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}
export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
};
export const charmeleon: Pokemon = {
  id: 5,
  name: 'Charmeleon',
};

// Si se declara un arreglo vacio .. no se puede hacer push de un objeto de tipo Never
// si queremos utilizar el objeto como arreglo utilizamos pokemon[] como arreglo vacio
export const pokemons: Pokemon[] = [];

pokemons.push(charmeleon, bulbasaur);

console.log(pokemons);
