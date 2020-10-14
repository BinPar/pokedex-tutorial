import { GetStaticProps } from 'next';
import React from 'react';
import { PokemonCard } from '../model/pokemon';
import PokemonList from '../components/PokemonList';
import pokemonCardList from '../logic/pokemonCardList';

interface IndexProps {
  myPokemonCardList: PokemonCard[];
}

const index = ({myPokemonCardList}: IndexProps ): JSX.Element => (
  <>
    <h1>Pokemons</h1>
    <PokemonList title="Mi lista de pokemons" pokemonCardList={myPokemonCardList} />
  </>
);

export const getStaticProps: GetStaticProps<IndexProps> = async () => {  
  // Solo en servidor
  return {
    props: {
      myPokemonCardList: pokemonCardList
    }
  }
};

export default index;