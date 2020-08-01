import pokemonInfo from './pokemonInfo';

const pokemonTypes: string[] = [];

const getPokemonTypes = async (): Promise<string[]> => {
  if (pokemonTypes.length === 0) {
    // obtenemos los pokemon para sacar todos los tipos
    const pokemons = await pokemonInfo();
    pokemons.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        if (!pokemonTypes.includes(type)) {
          pokemonTypes.push(type);
        }
      });
    });
    // ordenaods por orden alfabetico
    pokemonTypes.sort((a, b) => a.localeCompare(b));
  }
  return pokemonTypes;
};

export default getPokemonTypes;
