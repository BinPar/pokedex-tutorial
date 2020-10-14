import { Pokemon } from '../model/pokemon';
import pokemonJSON from '../data/pokemon.json';

/**
 * We take the JSON file and cast it as a Pokemon Array
 */
const pokemonList = pokemonJSON as Pokemon[];

export default pokemonList;