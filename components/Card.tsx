import React from 'react';
import Link from 'next/link';
import { PokemonCard }   from '../model/pokemon';

interface CardProps {
  pokemonCard: PokemonCard;
}

const Card = ({ pokemonCard }: CardProps): JSX.Element => {
  return (
    <Link href="/pokemon/[name]" as={`/pokemon/${pokemonCard.name}`}>
      <div className="card">
        <span className="card--id">{`#${pokemonCard.id}`}</span>
        <img
          className="card--image"
          src={pokemonCard.imageURL}
          alt={pokemonCard.name}
        />
        <h2 className="card--name">{pokemonCard.name}</h2>
        {
        pokemonCard.types.map((type) => (
          <span key={type} className="card--details">{type}</span>
        ))
      }
      </div>
    </Link>
  );
};

export default Card;
