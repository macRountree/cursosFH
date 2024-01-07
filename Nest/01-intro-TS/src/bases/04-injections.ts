import {
  HttpAdapter,
  PokeApiFetchAdapter,
  PokeapiAdapter,
} from '../api/pokeApi.adapter';
import {PokeapiResponse} from '../interfaces/pokeapi-response.interface';
export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string, // public imageUrl: string
    // sI QUEREMOS USAR el adaptador de hht lo ponemos aqui ... inyectamos la dependencia las peticiones (yya sea fetch o axios)
    // puede ser una clase,
    private readonly http: HttpAdapter
  ) {
    this.id = id;
    this.name = name;
  }
  public scream() {
    console.log(`${this.name.toLocaleUpperCase()}`);
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }
  async getMoves() {
    const data = await this.http.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon/5'
    );
    console.log(data.moves);
    return data.moves; //*recibimos el 1er nombre del primer movimiento de los movimientos de charmeleon
  }
}
const pokeApi = new PokeapiAdapter();
const pokeFetch = new PokeApiFetchAdapter();
export const charmeleon = new Pokemon(5, 'Charmeleon', pokeFetch);

charmeleon.getMoves();

// console.log(pokeApi);
