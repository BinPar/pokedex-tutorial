import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import filterByType from '../../logic/filterByType';
import { PokemonCard } from '../../model/pokemon';
import PokemonList from '../../components/PokemonList';
import pokemonCardList from '../../logic/pokemonCardList';

interface TypeProps {
  typeName: string;
  myPokemonCardList: PokemonCard[];
}

const index = ({myPokemonCardList, typeName}: TypeProps ): JSX.Element => (
  <>
    <h1>
      Pokemons
      {' '}
      {typeName}
    </h1>
    <Link href="/">
      <a>Home</a>
    </Link>
    <PokemonList title={`My list of pokemons of type ${typeName}`} pokemonCardList={myPokemonCardList} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const types = pokemonCardList.reduce<string[]>(
    (stored, pokemon): string[] => {
      pokemon.types.forEach((type): void => {
        if(!stored.includes(type)) {
          stored.push(type);
        }
      });
      return stored;
    }
    ,
    []
  );
  return {
    paths: types.map((type) => ({ params: { typeName: type } })),
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps<TypeProps> = 
  async ({params}: {params: {typeName: string}}): Promise<{ props: TypeProps }> => {
    const filter = filterByType(params.typeName);
    const myPokemonCardList = filter(pokemonCardList);
    return {
      props: {
        typeName: params.typeName,
        myPokemonCardList,
      }
    }
};

export default index;