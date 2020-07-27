import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';
import getPokemonCards from '../logic/pokemonCards';


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
            <Card key={card.id} pokemonCard={card} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const pokemonCards = await getPokemonCards();
  return {
    props: {
      pokemonCards,
    },
  };
};

export default Index;
