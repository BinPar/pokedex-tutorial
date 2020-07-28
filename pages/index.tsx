/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';

interface IndexProps {
  pokemonCards: PokemonCard[];
}

const Index = ({ pokemonCards }: IndexProps): JSX.Element => {
  console.log(pokemonCards);
  return (
    <React.Fragment>
      <Head>
        <title>BinPar Pokedex</title>
      </Head>
      <main>
        <h1>BinPar Pokedex</h1>
        <div id="app">
          {pokemonCards.map((card) => (
            <Card key={card.id} pokemonCard={card} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

interface StaticProps {
  props: IndexProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const pokemonCards = (await axios.get('http://localhost:3000/api/allCards'))
    .data as PokemonCard[];
  return {
    props: {
      pokemonCards,
    },
  };
}

export default Index;
