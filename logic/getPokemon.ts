import getAllPokemons from './pokemonInfo';
import { Pokemon } from '../model/pokemon';

const getPokemon = async (name: string): Promise<Pokemon> => {
  const all = await getAllPokemons();

  return all.find(i => i.name === name);
}

export default getPokemon;