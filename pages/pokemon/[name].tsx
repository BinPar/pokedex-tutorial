import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import getPokemon from '../../logic/getPokemon';
import { Pokemon } from '../../model/pokemon';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({pokemon}: PokemonProps): JSX.Element => {  
  return (
    <React.Fragment>
      <Head>
        <title>{`Pokemon ${pokemon.name}`}</title>
      </Head>
      <main>           
      
        <p>{`#${pokemon.id}`}</p>
        <img src={pokemon.imageURL} alt={pokemon.name} />
        <p>{`Name: ${pokemon.name}`}</p>
        <p>{`Height: ${pokemon.height}`}</p>
        <p>{`Weight: ${pokemon.weight}`}</p>
        <p>
          {`${pokemon.types.map(key => (
            <React.Fragment key={key}>
              <dt>{`${key}:`}</dt>
            </React.Fragment>
            ))}`}

        </p>
        
      </main>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({params}) => {  
  const pokemon = await getPokemon(`${params.name}`);
  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;