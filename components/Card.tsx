import React from 'react';
import { PokemonCard } from '../model/pokemon';

interface CardProps {
  pokemonCard: PokemonCard;
}

const Card = ({ pokemonCard }: CardProps): JSX.Element => {
  return (
    <div className="card">
      <span className="card--id">{pokemonCard.id}</span>
      <img
        className="card--image"
        src={pokemonCard.imageURL}
        alt={pokemonCard.name}
      />
      <h2 className="card--name">{pokemonCard.name}</h2>
      {pokemonCard.types.map((type) => {
        return <span className="card--details">{type} &nbsp;</span>;
      })}
    </div>
  );
};

export default Card;
