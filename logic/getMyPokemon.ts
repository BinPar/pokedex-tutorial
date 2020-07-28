import getAllPokemons from './pokemonInfo';
import { Pokemon } from '../model/pokemon';

const getMyPokemon = async (name: string): Promise<Pokemon> => {
  //  Obtiene todos los pokemon de pokemonInfo,
  const allPokemons = await getAllPokemons();
  //  Busca al pokemon por nombre. Nos devuelvo el primero que encuentre
  return allPokemons.find((item) => item.name === name);
};

export default getMyPokemon;
