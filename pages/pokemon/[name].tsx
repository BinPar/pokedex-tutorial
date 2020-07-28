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
      
        <h1>{`#${pokemon.id}`}</h1>
        <h1><img src={pokemon.imageURL} alt={pokemon.name} /></h1>
        <h1>{`Name: ${pokemon.name}`}</h1>
        <h1>{`Height: ${pokemon.height}`}</h1>
        <h1>{`Weight: ${pokemon.weight}`}</h1>
        <h1>
          {Object.keys(pokemon.types).map(key => (
            <React.Fragment key={key}>
              {`${pokemon.types[key]} `}
            </React.Fragment>
            ))}
        </h1>
        <h1>
          {Object.keys(pokemon.stats).map(key => (
            <React.Fragment key={key}>
              <dd>{` ${key}: ${pokemon.stats[key]}`}</dd>
            </React.Fragment>
            ))}
        </h1>
        
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