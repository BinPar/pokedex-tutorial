import React from 'react';
import PokemonList from '../components/PokemonList';

const index = (): JSX.Element => (
  <>
    <h1>Pokedex Home</h1>
    <PokemonList title="Mi lista de pokemons" />
  </>
);

export default index;