import React from 'react';
import Head from 'next/head';
import { GetStaticPaths } from 'next';
import useToggle from '../../hooks/useToggle';
import getPokemon from '../../logic/getPokemon';
import { Pokemon } from '../../model/pokemon';
import getPokemonCards from '../../logic/pokemonCards';
import Link from 'next/link';

interface PokemonProps {
  pokemon: Pokemon;
}

const toggleStyle: React.CSSProperties = {
  width: 15,
  display: 'block',
  float: 'left',
};

const estilo = {
  color: '#ff0',
};

const PokemonPage = ({ pokemon }: PokemonProps): JSX.Element => {
  const [showInfo, toggleInfo] = useToggle(true);
  const [showStats, toggleStats] = useToggle(true);

  const text = `Pokemon ${pokemon.name}`;

  return (
    <React.Fragment>
      <Head>
        <title>{text}</title>
      </Head>
      <main>
        <h1 style={estilo}>{text}</h1>
        <p>{`#${pokemon.id}`}</p>
        <img src={pokemon.imageURL} alt={pokemon.name} />
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
        <div style={{ width: '100%', clear: 'both', paddingTop: 20 }}>          
          <Link href="/">
            <a href="/">Back</a>
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

interface ServerSideProps {
  ({ params: { name: string } }): Promise<{ props: PokemonProps }>;
}

export const getStaticProps: ServerSideProps = async ({ params }) => {
  const pokemon = await getPokemon(`${params.name}`);
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
