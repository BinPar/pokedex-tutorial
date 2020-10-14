import React  from 'react';
import useWindowHeight from '../hooks/useWindowHeight';
import useToggle from '../hooks/useToggle';
import { PokemonCard } from '../model/pokemon';
import PokemonListItem from './PokemonListItem';

interface PokemonListProps {
  title: string;
  pokemonCardList: PokemonCard[];
}

const pokemonListStyle: React.CSSProperties = {
  textTransform: 'capitalize',
};

const PokemonList = ({title, pokemonCardList}: PokemonListProps): JSX.Element => {
  const [ascending,toggleAscending] = useToggle(true);
  const currentHeight = useWindowHeight();
  let orderedPokemonList = [...pokemonCardList];
  orderedPokemonList = orderedPokemonList.sort((a, b) => a.name.localeCompare(b.name) * (ascending ? 1: -1));
  return (
    <>
      <h2>{title}</h2>
      <p>{currentHeight}</p>
      <p>
        <button type="button" onClick={toggleAscending}>
          {ascending ? 'Order ascendente' : 'Orden descendente'}
        </button>
      </p>
      <ul style={pokemonListStyle}>
        {orderedPokemonList.map(PokemonListItem)}
      </ul>
    </>
  );
};

export default PokemonList;