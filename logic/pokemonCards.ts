import { PokemonCard } from '../model/pokemon';
import getAllPokemons from './pokemonInfo'

const getPokemonCards = async (): Promise<PokemonCard[]> => {
  const allData = await getAllPokemons();
  return allData.map(
    (item): PokemonCard => {
      const { id, name, types, imageURL } = item;
      return {
        id,
        name,
        types,
        imageURL,
      };
    },
  );
};

export default getPokemonCards;
