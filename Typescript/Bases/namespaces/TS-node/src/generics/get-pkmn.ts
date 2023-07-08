import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokeId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  );

  console.log(data.abilities[0].ability.url);

  return data;
};
