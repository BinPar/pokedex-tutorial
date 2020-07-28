import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import getPokemon from '../../logic/getPokemon';
import { Pokemon } from '../../model/pokemon';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({pokemon}: PokemonProps): JSX.Element => {
  const text = `Pokemon ${pokemon.name}`;
  const estilo = {
    color: '#ff0',
  };
  
  return (
    <React.Fragment>
      <Head>
        <title>{`Pokemon ${pokemon.name}`}</title>
      </Head>
      <h1 style={estilo}>{text}</h1>
      <main>           
      
        <p>{`#${pokemon.id}`}</p>
        <img src={pokemon.imageURL} alt={pokemon.name} />
        <h2>Info</h2>
        <dl>
          <dt>
            Height:
          </dt>
          <dd>
            {pokemon.height}
          </dd>
          <dt>
            Weight:
          </dt>
          <dd>
            {pokemon.weight}
          </dd>
          <dt>
            Types:
          </dt>
          <dd>
            {pokemon.types.reduce((types, item) => `${types} ${item}`,'')}
          </dd>
        </dl>
        <h2>Stats</h2>
        <dl>
          {
            Object.keys(pokemon.stats).map(key => (
              <React.Fragment key={key}>
                <dt>{`${key}:`}</dt>
                <dd>{pokemon.stats[key]}</dd>
              </React.Fragment>
            ))
          }
        </dl>

        <div style={{width: '100%', clear: 'both', paddingTop: 20}}>
          <Link href='/'>
            <a href="/">
              Ir a home
            </a>
          </Link>
        </div>
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