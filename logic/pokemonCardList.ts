import { PokemonCard } from '../model/pokemon';
import pokemonList from './pokemonList';

/**
 * Obtain a pokemon card list from the pokemon linst
 */
const pokemonCardList = pokemonList.map((pokemon): PokemonCard => (
  {
    id: pokemon.id,
    name: pokemon.name,
    imageURL: pokemon.imageURL,
    types: pokemon.types,
  }
));

export default pokemonCardList;