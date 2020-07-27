import fs from 'fs';
import path from 'path';
import { Pokemon } from '../model/pokemon';

const jsonPath = path.join(process.cwd(), 'data/pokemon.json');

let myPokemons: Pokemon[];

const getAllPokemons = async (): Promise<Pokemon[]> => {
  if (!myPokemons) {
    const pokemonsJSON = await fs.promises.readFile(jsonPath,'utf8');
    myPokemons = JSON.parse(pokemonsJSON) as Pokemon[];    
  }
  return myPokemons;
}

export default getAllPokemons;