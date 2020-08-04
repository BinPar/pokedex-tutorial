import getPokemonCards from './pokemonCards';

const pokemonTypes: string[] = [];

const getPokemonTypes = async (): Promise<string[]> => {
  const allCards = await getPokemonCards();
  if (pokemonTypes.length === 0) {
    allCards.forEach((card) => {
      card.types.forEach((type) => {
        if (!pokemonTypes.includes(type)) pokemonTypes.push(type);
      });
    });
    pokemonTypes.sort();
  }
  return pokemonTypes;
};

export default getPokemonTypes;
