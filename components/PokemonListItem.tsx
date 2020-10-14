import React from 'react';
import Link from 'next/link';
import { PokemonCard } from '../model/pokemon';

const PokemonListItem = ({id,name,types}: PokemonCard ): JSX.Element => {
   
  const pokemonListItem: React.CSSProperties = {
    cursor: 'pointer'
  };

  return (
    <li key={id}>
      <Link href={`/pokemon/${id.toString()}`} >
        <strong>
          <a style={pokemonListItem} > {name} </a>
        </strong>
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