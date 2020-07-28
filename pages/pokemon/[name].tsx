import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Pokemon } from '../../model/pokemon';
import getPokemonByName from '../../logic/pokemonData';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: PokemonProps): JSX.Element => {
  const text = `Pokemon ${pokemon.name}`;
  // const estilo = {
  //   color: '#ff0',
  // };
  return (
    <React.Fragment>
      <Head>
        <title>{`${text}`}</title>
      </Head>
    </React.Fragment>
  );
};
export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({
  params,
}) => {
  const pokemonData = await getPokemonByName(`${params}`);
  return {
    props: {
      pokemon: pokemonData,
    },
  };
};

export default PokemonPage;
