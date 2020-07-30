import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import getPokemon from '../../logic/getPokemon';
import { Pokemon } from '../../model/pokemon';
import useToggle from '../../hooks/useToggle';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage = ({pokemon}: PokemonProps): JSX.Element => { 
  const [showInfo, toggleInfo] = useToggle(true);
  const [showStats, toggleStats] = useToggle(true);

  return (
    <React.Fragment>
      <Head>
        <title>{`Pokemon ${pokemon.name}`}</title>
      </Head>
      <main>           
        <h1>{`#${pokemon.id}`}</h1>
        <h1><img src={pokemon.imageURL} alt={pokemon.name} /></h1>
        <dt>{`Name: ${pokemon.name}`}</dt>
        <dt>
          <a href="" onClick={toggleInfo}>
            {showInfo? `-` : `+`}
            { `Info: `}
          </a>
        </dt>
        {showInfo ? (
          <dl>
            <dt>
              <dd>{`Height: ${pokemon.height}`}</dd>
              <dd>{`Weight: ${pokemon.weight}`}</dd>
              <dd>
                {`Type: `}
                {Object.keys(pokemon.types).map(key => (
                  <React.Fragment key={key}>
                    {`${pokemon.types[key]} `}
                  </React.Fragment>
            ))}
              </dd>
            </dt>
          </dl>
        ) : null}
        <dt>
          <a href="" onClick={toggleStats}>
            {showStats? `-` : `+`}
            { `Stats: `}
          </a>
          {showStats ? (
            <dl>
              {Object.keys(pokemon.stats).map(key => (
                <React.Fragment key={key}>
                  <dd>{` ${key}: ${pokemon.stats[key]}`}</dd>
                </React.Fragment>
            ))}
            </dl>
            ) : null}
        </dt>
        
        <dt><Link href="/"> Volver a home</Link></dt>
        
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