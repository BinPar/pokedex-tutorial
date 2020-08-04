import React from 'react';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Pokemon } from '../../model/pokemon';
import getPokemon from '../../logic/getPokemon';
import useToggle from '../../hooks/toggle';
import getPokemonCards from '../../logic/pokemonCards';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: PokemonProps): JSX.Element => {
  const [showStats, setShowStats] = useToggle(true);
  const [showInfo, setShowInfo] = useToggle(true);

  const toggleStyle: React.CSSProperties = {
    width: 40,
    display: 'block',
    float: 'left',
  };
  return (
    <React.Fragment>
      <Head>
        <title>{`Pokemon ${pokemon.name}`}</title>
      </Head>
      <main>
        <h1>{`#${pokemon.id} ${pokemon.name}`}</h1>
        <img src={pokemon.imageURL} alt={pokemon.name} />
        <h2>
          <a href="" onClick={setShowInfo}>
            <strong style={toggleStyle}>{showInfo ? '-' : '+'}</strong>
            Info
          </a>
        </h2>
        <dl>
          {showInfo ? (
            <React.Fragment>
              <dt>Height:</dt>
              <dd>{pokemon.height}</dd>
              <dt>Weight:</dt>
              <dd>{pokemon.weight}</dd>
              <dt>Types:</dt>
              <dd>
                {pokemon.types.reduce((types, item) => `${types} ${item}`, '')}
              </dd>
            </React.Fragment>
          ) : null}
        </dl>
        <h2>
          <a href="" onClick={setShowStats}>
            <strong style={toggleStyle}>{showStats ? '-' : '+'}</strong>
            Stats
          </a>
        </h2>
        <dl>
          {showStats
            ? Object.keys(pokemon.stats).map((item) => (
              <React.Fragment key={item}>
                <dt>{`${item}: `}</dt>
                <dd>{pokemon.stats[item]}</dd>
              </React.Fragment>
              ))
            : null}
        </dl>
      </main>
      <div style={{ clear: 'both' }}>
        <Link href="/">
          <a>Ir a home</a>
        </Link>
      </div>
    </React.Fragment>
  );
};
interface ServerProps {
  ({ params: { name: string } }): Promise<{ props: PokemonProps }>;
}
export const getStaticProps: ServerProps = async ({ params }) => {
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
