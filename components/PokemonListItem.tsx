import React from 'react';
import { PokemonCard } from '../model/pokemon';

const PokemonListItem = ({id,name}: PokemonCard ): JSX.Element => (
  <li key={id}>{name}</li>
);

export default PokemonListItem;