import axios from 'axios';
import {PokeapiResponse} from '../interfaces/pokeapi-response.interface';
export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  // Tenemos que declarar valores
  // La diferencia entre interfaces y clases. .. es que las interfaces no puedes crear instancias
  //
  //   public id: number;
  //   public name: string;  En lugar de declarar si las variiables son publicas... lo podemos poner dentro del constructor
  constructor(
    public readonly id: number,
    public name: string // public imageUrl: string
  ) {
    this.id = id;
    this.name = name;
  }
  public scream() {
    console.log(`${this.name.toLocaleUpperCase()}`);
  }
  //   Los metodos private solo se pueden utilizar dentro de la clase

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }
  async getMoves() {
    // !Debemos definir el tipo de dato en nuestras peticiones http
    // ! Creamos un archivo de interfaces de nuestra API de pokemon
    /**
     * ! Podemos obtener en GET la data y especificarle que nuestro poke API es una interface
     * !despues TS nos reconocera cada objeto o arreglo deentro de esa interface y la podemos importar aqui
     */
    const {data} = await axios.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon/5'
    );
    return data.moves[0].move.name; //*recibimos el 1er nombre del primer movimiento de los movimientos de charmeleon
  }
}
// Es la representacion de un objeto  en la vida real
// Any puede ser cualquier tipo  de dato
//
export const charmeleon = new Pokemon(5, 'Charmeleon');

// console.log(charmeleon.imageUrl);
// charmeleon.scream();
// charmeleon.speak();
console.log(charmeleon.getMoves());
