/**!
 * !Los decoradores son simples funciones que se utilizan:
 *
 */

class newPokemon {
  constructor(public readonly id: number, public name: string) {}
  screan() {
    console.log(` NO`);
  }
  speak() {
    console.log(` Si`);
  }
}
const MyDecorator = () => {
  return (target: Function) => {
    return newPokemon; //los decoradores expanden a la definicion de la clase metodo o propiedad
  };
};
//
@MyDecorator() //si nos da error  aplicamos experimentalDecorators en ts.config
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}
  screan() {
    console.log(` ${this.name.toUpperCase()}`);
  }
  speak() {
    console.log(` ${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.screan();
charmander.speak();
