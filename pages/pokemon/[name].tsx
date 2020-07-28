import React from 'react';
import Head from 'next/head';
import { Pokemon } from '../../model/pokemon';

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

export default PokemonPage;
