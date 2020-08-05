import React from 'react';
import Link from 'next/link';
import { PokemonCard } from '../model/pokemon';

interface CardProps {
  pokemonCard: PokemonCard;
}

const Card = ({ pokemonCard }: CardProps): JSX.Element => {
  return (
    // se especifica la norma para construir la ruta. en este caso, será dinámica, dándole el nombre 'pokemonCard.name'
    <Link href="/myPokemon/[name]" as={`/myPokemon/${pokemonCard.name}`}>
      <a>
        <div className="card">
          <span className="card--id">{`#${pokemonCard.id}`}</span>
          <img
            className="card--image"
            src={pokemonCard.imageURL}
            alt={pokemonCard.name}
          />
          <h2 className="card--name">{pokemonCard.name}</h2>
          {pokemonCard.types.map((type) => (
            <span key={type} className="card--details">
              {type}
            </span>
          ))}
        </div>
      </a>
    </Link>
  );
};

export default Card;
