import React from 'react';
import { PokemonCard } from '../model/pokemon';

const PokemonListItem = ({id,name,types}: PokemonCard ): JSX.Element => (
  <li key={id}>
    <strong>{name}</strong>
    :
    {
      types.map((type, i) => (
        <span key={type}> 
          {i===0?' ':', '}
          {type}
        </span>
))
    }
  </li>
);

export default PokemonListItem;