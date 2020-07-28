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
  const estilo = {
    color: '#ff0',
  };
  return (
    <React.Fragment>
      <Head>
        <title>{`${text}`}</title>
      </Head>
      <div style={estilo}>
        <h1>{`${pokemon.name} #${pokemon.id}`}</h1>
      </div>
      <img src={pokemon.imageURL} alt={pokemon.name} />
      <div>
        {Object.keys(pokemon.stats).reduce((acc, current) => {
          return <React.Fragment>{current}</React.Fragment>;
        }, '')}
      </div>
    </React.Fragment>
  );
};
export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({
  params,
}) => {
  const pokemonData = await getPokemonByName(`${params.name}`);
  return {
    props: {
      pokemon: pokemonData,
    },
  };
};

export default PokemonPage;
