import { Pokemon } from '../model/pokemon';
import pokemonList from './pokemonList';

/**
 * Obtain a pokemon card list from the pokemon linst
 */
const pokemonData = pokemonList.map((pokemon): Pokemon => (
  {
    id: pokemon.id,
    name: pokemon.name,
    imageURL: pokemon.imageURL,
    types: pokemon.types,
    stats: pokemon.stats,
    weight: pokemon.weight,
    height: pokemon.height
  }
));

export default pokemonData;