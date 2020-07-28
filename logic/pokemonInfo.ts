import axios from 'axios';
import { Pokemon, Stats } from '../model/pokemon';

interface DataItem {
  name: string;
  url: string;
}

interface DataResult {
  results: DataItem[];
}

const getPokemonInfo = async (url: string): Promise<Pokemon> => {
  const result = await axios.get(url);
  const { data } = result;

  const statsReducer = (stats: Stats, item): Stats => {
    return {
      ...stats,
      [item.stat.name]: item.base_stat as number,
    };
  };

  return {
    id: data.id as number,
    name: data.name as string,
    weight: data.weight as number,
    height: data.height as number,
    imageURL: data.sprites.front_default as string,
    types: data.types.map((item) => {
      return item.type.name;
    }),
    stats: data.stats.reduce(statsReducer, {}),
  };
};

const getAllPokemonsFromServer = async (): Promise<Pokemon[]> => {
  const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = result.data as DataResult;
  const promises = data.results.map((item) => getPokemonInfo(item.url));
  const results = await Promise.all(promises);
  return results;
};

let myPokemons: Pokemon[];

const getAllPokemons = async (): Promise<Pokemon[]> => {
  if (!myPokemons) {
    myPokemons = await getAllPokemonsFromServer();
  }
  return myPokemons;
};

export default getAllPokemons;
