import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import getMyPokemon from '../../logic/getMyPokemon';
import { Pokemon } from '../../model/pokemon';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: PokemonProps): JSX.Element => {
  const text = `${pokemon.name}`;
  const style = {
    color: '#ff0',
  };

  return (
    <React.Fragment>
      <Head>
        <title>{`Pokemon ${pokemon.name}`}</title>
      </Head>
      <h1 style={style}>{text}</h1>
      <main>
        <p>{`#${pokemon.id}`}</p>
        <img
          className="detail--image"
          src={pokemon.imageURL}
          alt={pokemon.name}
        />
        <h2>Info</h2>
        <dl>
          <dt>Height: </dt>
          <dd>{pokemon.height}</dd>
          <dt>Weight: </dt>
          <dd>{pokemon.weight}</dd>
          <dt>Types: </dt>
          {/* Concatena cada type, siendo '' el valor inicial del resultado */}
          <dd>
            {pokemon.types.reduce((types, type) => `${types} ${type}`, '')}
          </dd>
        </dl>
        <h2>Stats</h2>
        <dl>
          {/* Genera dt y dl por cada valor de stat */}
          {Object.keys(pokemon.stats).map((key) => (
            <React.Fragment key={key}>
              <dt>{`${key}:`}</dt>
              <dd>{pokemon.stats[key]}</dd>
            </React.Fragment>
          ))}
        </dl>
      </main>
      <div style={{ width: '100%', clear: 'both', paddingTop: 20 }}>
        <Link href="/">
          <a href="/">Go Home</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({
  params,
}) => {
  const pokemon = await getMyPokemon(`${params.name}`);
  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
