import getAllPokemons from './pokemonInfo';
import { Pokemon } from '../model/pokemon';

const getPokemon = async (name: string): Promise<Pokemon> => {
  const allPokemons = await getAllPokemons();
  const pokemon = allPokemons.find(item  => item.name === name);
  return pokemon;
}

export default getPokemon;