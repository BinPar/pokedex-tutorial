import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PokemonReference, PokemonListResponse } from '../../model/pokemon';

export default async (
  _: NextApiRequest,
  res: NextApiResponse<PokemonReference[]>,
): Promise<void> => {
  const result = (await axios.get(
    'https://pokeapi.co/api/v2/pokemon',
  )).data as PokemonListResponse;
  res.status(200).json(result.results);
};
