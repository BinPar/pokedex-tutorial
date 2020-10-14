import { GetStaticProps } from 'next';
import React from 'react';
import filterByType from '../../logic/filterByType';
import { PokemonCard } from '../../model/pokemon';
import PokemonList from '../../components/PokemonList';
import pokemonCardList from '../../logic/pokemonCardList';

interface TypeProps {
  myPokemonCardList: PokemonCard[];
}

const index = ({myPokemonCardList}: TypeProps ): JSX.Element => (
  <>
    <h1>Pokemons agua</h1>
    <PokemonList title="Mi lista de pokemons" pokemonCardList={myPokemonCardList} />
  </>
);

export async function getStaticPaths() {
  return {
    paths: [
      { params: { typeName: 'water' } }, 
      { params: { typeName: 'grass' } },
    ],
  }
}


export const getStaticProps: GetStaticProps<TypeProps> = 
  async ({params}: {params: {typeName: string}}): Promise<{ props: TypeProps }> => {
    // Solo en servidor
    const filter = filterByType(params.typeName);    
    return {
      props: {
        myPokemonCardList: filter(pokemonCardList)
      }
    }
};

export default index;