import { NextApiRequest, NextApiResponse } from 'next';
import { PokemonCard } from '../../model/pokemon';
import getPokemonCards from '../../logic/pokemonCards';

const pokemons = async (
  _: NextApiRequest,
  res: NextApiResponse<PokemonCard[]>,
): Promise<void> => {
  const result = await getPokemonCards();
  res.end(JSON.stringify(result));
};

export default pokemons;
