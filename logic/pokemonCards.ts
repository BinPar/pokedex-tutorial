import pokemonInfo from './pokemonInfo';
import { PokemonCard } from '../model/pokemon';

const getAllPokemonCards = async (): Promise<PokemonCard[]> => {
  const allPokemon = await pokemonInfo();

  const cards = allPokemon.map((item) => {
    return {
      id: item.id,
      name: item.name,
      imageURL: item.imageURL,
      types: item.types,
    };
  });

  return cards;
};

export default getAllPokemonCards;
