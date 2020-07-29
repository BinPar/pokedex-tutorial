import getAllPokemons from './pokemonInfo';

const getPokemonTypes = async (): Promise<string []> => {

  const pokemonTypes: string[] = [];
  const allPokemons = await getAllPokemons();

  allPokemons.forEach(pokemon => {
    pokemon.types.forEach(element => {
      if(!pokemonTypes.includes(element))
      pokemonTypes.push(element);
    });
  });

  return pokemonTypes;
}

export default getPokemonTypes;