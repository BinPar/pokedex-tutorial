import getAllPokemons from './pokemonInfo';
import { Pokemon } from '../model/pokemon';

const getPokemonByName = async (pokemonName: string): Promise<Pokemon> => {
  const allPokemons = await getAllPokemons();
  return allPokemons.find(
    (currentPokemon) => currentPokemon.name === pokemonName,
  );
};

export default getPokemonByName;
