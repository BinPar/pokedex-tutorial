import React from 'react';
import Link from 'next/link'
import useToggle from 'hooks/useToggle';
import { PokemonCard } from '../model/pokemon';

const PokemonListItem = ({id,name,types,imageURL}: PokemonCard ): JSX.Element => {
  const [showImage,toggleImage] = useToggle(false);
  return (
    <li key={id}>
      <strong>{name}</strong>
      <a href="#" onClick={toggleImage}>[I]</a>
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
      {
        showImage?(
          <img src={imageURL} alt={name} />
        ):null
      }
    </li>
  );
};

export default PokemonListItem;