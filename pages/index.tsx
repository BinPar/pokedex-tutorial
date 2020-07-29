import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/Link';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';
import getPokemonCards from '../logic/pokemonCards';
import getPokemonTypes from '../logic/getPokemonTypes';

interface IndexProps {
  pokemonCards: PokemonCard[];
  pokemonTypes: string[];
}

const Index = ({ pokemonCards, pokemonTypes }: IndexProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>BinPar Pokedex</title>
      </Head>
      <main>
        <h1>BinPar Pokedex</h1>
        <p className="pokemonTypes">
          <div id="types">
            {pokemonTypes.map((type) => (
              <button
              // onClick={(ev): void => togglePokemonType(type, ev)}
              // className={selectedTypes.includes(type) ? 'on' : 'off'}
                type="button"
                key={type}
              >
                {type}
              </button>
          ))}
          </div>
        </p>
        <div id="app">
          {pokemonCards.map((card) => (
            <Card key={card.id} pokemonCard={card} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const pokemonCards = await getPokemonCards();
  const pokemonTypes = await getPokemonTypes();
  return {
    props: {
      pokemonCards,
      pokemonTypes,
    },
  };
};

export default Index;
