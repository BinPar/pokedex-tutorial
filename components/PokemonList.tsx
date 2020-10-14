import React from 'react';
import pokemonCardList from '../logic/pokemonCardList';

interface PokemonListProps {
  title: string;
}

const pokemonListStyle: React.CSSProperties = {
  textTransform: 'capitalize',
};

const PokemonList = ({title}: PokemonListProps): JSX.Element => {
  const ascending = true;
  let orderedPokemonList = [...pokemonCardList];
  orderedPokemonList = orderedPokemonList.sort((a, b) => a.name.localeCompare(b.name) * (ascending ? 1: -1));
  return (
    <>
      <h2>{title}</h2>
      <ul style={pokemonListStyle}>
        {
          orderedPokemonList.map(({id,name}) => <li key={id}>{name}</li>)
        }
      </ul>
    </>
  );
};

export default PokemonList;