import React from 'react';
import Link from 'next/link';
import { PokemonCard } from '../model/pokemon';

const PokemonListItem = ({id,name,types}: PokemonCard ): JSX.Element => {
   
  return (
    <li key={id}>
      <Link href={`/id/${id}`} >
        <strong>{name}</strong>
      </Link>    
      :
      {
        types.map((type, i) => (
          <span key={type}> 
            {i===0?' ':', '}
            <Link href={`/type/${type}`}>
              <a>{type}</a>
            </Link>
          </span>
        ))
      }
    </li>
  );
};

export default PokemonListItem;