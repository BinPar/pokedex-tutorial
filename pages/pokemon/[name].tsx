import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import getPokemon from '../../logic/getPokemon';
import { Pokemon } from '../../model/pokemon';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: PokemonProps): JSX.Element => {
  const estilo = {
    color: '#ff0',
  };

  return (
    <React.Fragment>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <Link href="/">
        <a>Return to Pokédex</a>
      </Link>
      <h1 style={estilo}>{`#${pokemon.id}  ${pokemon.name.toUpperCase()}`}</h1>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({
  params,
}) => {
  const pokemon = await getPokemon(`${params.name}`);
  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
