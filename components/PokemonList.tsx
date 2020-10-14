import { PokemonCard } from 'model/pokemon';
import React from 'react';
import PokemonListItem from './PokemonListItem';

interface PokemonListProps {
  title: string;
  pokemonCardList: PokemonCard[];
}

const pokemonListStyle: React.CSSProperties = {
  textTransform: 'capitalize',
};

const PokemonList = ({title, pokemonCardList}: PokemonListProps): JSX.Element => {
  const ascending = true;
  let orderedPokemonList = [...pokemonCardList];
  orderedPokemonList = orderedPokemonList.sort((a, b) => a.name.localeCompare(b.name) * (ascending ? 1: -1));
  return (
    <>
      <h2>{title}</h2>
      <ul style={pokemonListStyle}>
        {orderedPokemonList.map(PokemonListItem)}
      </ul>
    </>
  );
};

export default PokemonList;