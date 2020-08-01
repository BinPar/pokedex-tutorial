import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';
import getPokemonCards from '../logic/pokemonCards';
import getPokemonTypes from '../logic/getPokemonTypes';
import { getLastTypes, setLastTypes } from '../logic/persistentTypes';

interface IndexProps {
  pokemonCards: PokemonCard[];
  pokemonTypes: string[];
}

const Index = ({ pokemonCards, pokemonTypes }: IndexProps): JSX.Element => {
  
  // Recupera el estado de la seleccion de types
  if (!getLastTypes()) {
    setLastTypes(pokemonTypes);
  }

  // Actualiza el estado del selector
  const [selectedTypes, setSelectedTypes] = useState<string[]>(getLastTypes());
  setLastTypes(selectedTypes);

  const togglePokemonType = (type: string, ev: React.MouseEvent): void => {
    if (ev.ctrlKey || ev.shiftKey) {
      if (selectedTypes.includes(type)) {
        setSelectedTypes((types) => [...types].filter((item) => item !== type));
        console.log('includes');
      } else {
        console.log('not includes');
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

  console.log(selectedTypes);

  const selectedPokemonCards = pokemonCards.filter((card) =>
    card.types.some((item) => selectedTypes.includes(item)),
  );

  const selectAll = (): void => {
    setSelectedTypes([...pokemonTypes]);
  };

  const selectNone = (): void => {
    setSelectedTypes([]);
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
              onClick={(ev): void => togglePokemonType(type, ev)}
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
          {selectedPokemonCards.map((card) => (
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
