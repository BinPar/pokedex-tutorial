import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';
import getPokemonCards from '../logic/pokemonCards';
import getPokemonTypes from '../logic/getPokemonTypes';
import {setLastTypes, getLastTypes} from '../logic/persistentData';

interface IndexProps {
  pokemonCards: PokemonCard[];
  pokemonTypes: string[];
}

const Index = ({ pokemonCards, pokemonTypes }: IndexProps): JSX.Element => {
  if(!getLastTypes()){
    setLastTypes(pokemonTypes);
  }
  const [selectedTypes, setSelectedTypes] = useState<string[]>(getLastTypes());
  setLastTypes(selectedTypes);
  const togglePokemonType = (type: string, ev: React.MouseEvent): void => {
    if (ev.ctrlKey) {
      if (selectedTypes.includes(type)) {
        setSelectedTypes((types) => [...types].filter((item) => item !== type));
      } else {
        setSelectedTypes((types) => {
          const newTypes = [...types];
          newTypes.push(type);
          return newTypes;
        });
      }
    } else {
      setSelectedTypes(() => [type]);
    }
  };
  const selectAll = (): void => {
    setSelectedTypes([...pokemonTypes]);
  };
  const selectNone = (): void => {
    setSelectedTypes([]);
  };

  const isTypeIncludes = (card: PokemonCard): boolean => {
    return card.types
      .map((type) => selectedTypes.includes(type))
      .includes(true);
  };
  return (
    <React.Fragment>
      <Head>
        <title>BinPar Pokedex</title>
      </Head>
      <main>
        <h1>BinPar Pokedex</h1>
        <p className="pokemonTypes">
          {pokemonTypes.map((type) => (
            <button
              onClick={(ev): void => togglePokemonType(type,ev)}
              className={selectedTypes.includes(type) ? 'on' : 'off'}
              type="button"
              key={type}
            >
              {type}
            </button>
          ))}
          <button onClick={selectAll} type="button" className="special">
            All
          </button>
          <button onClick={selectNone} type="button" className="special">
            None
          </button>
        </p>

        <div id="app">
          {pokemonCards.map((card) => {
            if (isTypeIncludes(card)) {
              return <Card key={card.id} pokemonCard={card} />;
            }
            return null;
          })}
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
