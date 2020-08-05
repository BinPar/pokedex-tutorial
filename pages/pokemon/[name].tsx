import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticPaths } from 'next';
import useToggle from '../../hooks/useToggle';
import getMyPokemon from '../../logic/getMyPokemon';
import { Pokemon } from '../../model/pokemon';
import getPokemonCards from '../../logic/pokemonCards';

interface PokemonProps {
  pokemon: Pokemon;
}

const toggleStyle: React.CSSProperties = {
  width: 15,
  display: 'block',
  float: 'left',
};

const style = {
  color: '#ff0',
};

const PokemonPage = ({ pokemon }: PokemonProps): JSX.Element => {
  const text = `${pokemon.name}`;
  const [showInfo, toggleInfo] = useToggle(true);
  const [showStats, toggleStats] = useToggle(true);

  return (
    <React.Fragment>
      <Head>
        <title>{text}</title>
      </Head>
      <h1 style={style}>{text}</h1>
      <main>
        <p>{`#${pokemon.id}`}</p>
        <img
          className="detail--image"
          src={pokemon.imageURL}
          alt={pokemon.name}
        />
        <h2>
          <a href="" onClick={toggleInfo}>
            <strong style={toggleStyle}>{showInfo ? '-' : '+'}</strong>
            <div>Info</div>
          </a>
        </h2>
        {showInfo ? (
          <dl>
            <dt>Height:</dt>
            <dd>{pokemon.height}</dd>
            <dt>Weight:</dt>
            <dd>{pokemon.weight}</dd>
            <dt>Types:</dt>
            <dd>
              {pokemon.types.reduce((types, item) => `${types} ${item}`, '')}
            </dd>
          </dl>
        ) : null}
        <h2>
          <a href="" onClick={toggleStats}>
            <strong style={toggleStyle}>{showStats ? '-' : '+'}</strong>
            <div>Stats</div>
          </a>
        </h2>
        {showStats ? (
          <dl>
            {Object.keys(pokemon.stats).map((key) => (
              <React.Fragment key={key}>
                <dt>{`${key}:`}</dt>
                <dd>{pokemon.stats[key]}</dd>
              </React.Fragment>
            ))}
          </dl>
        ) : null}
      </main>
      <div style={{ width: '100%', clear: 'both', paddingTop: 20 }}>
        <Link href="/">
          <a href="/">Go Home</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

interface ServerSideProps {
  ({ params: { name: string } }): Promise<{ props: PokemonProps }>;
}

export const getStaticProps: ServerSideProps = async ({ params }) => {
  const pokemon = await getMyPokemon(`${params.name}`);
  return {
    props: {
      pokemon,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemonCards = await getPokemonCards();
  return {
    paths: pokemonCards.map((card) => ({
      params: {
        name: card.name,
      },
    })),
    fallback: false,
  };
};

export default PokemonPage;
