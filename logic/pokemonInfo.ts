import axios from 'axios';
import fs from 'fs';
import path from 'path';
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
      [item.stat.name]: item.base_stat as number
    };
  };

  return {
    id: data.id as number,
    name: data.name as string,
    weight: data.weight as number,
    height: data.height as number,
    imageURL: data.sprites.front_default as string,
    types: data.types.map(item => item.type.name),
    stats: data.stats.reduce(statsReducer,{}),
  }
}

const jsonPath = path.join(process.cwd(), 'data/pokemon.json');

const updateAllPokemonsFromServer = async (): Promise<Pokemon[]> => {
  const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000');
  const data = result.data as DataResult;
  const results: Pokemon[] = [];
  while (data.results.length) {
    const item = data.results.shift();
    // eslint-disable-next-line no-await-in-loop
    const info = await getPokemonInfo(item.url);
    // eslint-disable-next-line no-console
    console.log(`loading...${item.name}`)
    
    results.push(info);
  }  
  await fs.promises.writeFile(jsonPath, JSON.stringify(results), 'utf8');
  return results;
}

let myPokemons: Pokemon[];

const getAllPokemons = async (): Promise<Pokemon[]> => {
  if (!myPokemons) {
    try {
      const pokemonsJSON = await fs.promises.readFile(jsonPath,'utf8');
      myPokemons = JSON.parse(pokemonsJSON) as Pokemon[];
    } catch {
      myPokemons = await updateAllPokemonsFromServer();
    }
  }
  return myPokemons;
}

export default getAllPokemons;