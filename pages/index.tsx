/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';
import getAllPokemonCards from '../logic/pokemonCards';

interface IndexProps {
  pokemonCards: PokemonCard[];
}

const Index = ({ pokemonCards }: IndexProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>BinPar Pokedex</title>
      </Head>
      <main>
        <h1>BinPar Pokedex</h1>

        <div id="app">
          {pokemonCards.map((card) => (
            <Link href="/pokemon/[name]" as={`/pokemon/${card.name}`}>
              <a>
                <Card key={card.id} pokemonCard={card} />
              </a>
            </Link>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const pokemonCards = await getAllPokemonCards();
  return {
    props: {
      pokemonCards,
    },
  };
};

export default Index;
