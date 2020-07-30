import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PokemonCard } from '../model/pokemon';
import Card from '../components/Card';
import getPokemonCards from '../logic/pokemonCards';
import getPokemonTypes from '../logic/getPokemonTypes';

interface IndexProps {
  pokemonCards: PokemonCard[];
  pokemonTypes: string[];
}

let persistentTypes: string[];

const Index = ({ pokemonCards, pokemonTypes }: IndexProps): JSX.Element => {
  
  if (!persistentTypes)
    persistentTypes = pokemonTypes;
  const [selectedTypes, setSelectedTypes] = useState<string[]>(persistentTypes);
  persistentTypes = selectedTypes;

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

  const selectedPokemonCards = pokemonCards.filter((card) =>
    card.types.some((item) => selectedTypes.includes(item)),
  );

   /* const selectedPokemonCards = (): PokemonCard[] =>{
    const selected: PokemonCard[] = [];
  
    pokemonCards.forEach(pokemon => {
      pokemon.types.forEach(element => {
        if(!selectedTypes.includes(element))
        selected.push(pokemon);
      });
    });
  
    return selected;
  }; */
  
const selectAll = (): void =>{
  setSelectedTypes([...pokemonTypes]);
};
const selectNone = (): void =>{

  setSelectedTypes([]);
  // persistentTypes = [];
};

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
                onClick={(ev): void => togglePokemonType(type, ev)}
                className={selectedTypes.includes(type) ? 'on' : 'off'}
                type="button"
                key={type}
              >
                {type}
              </button>
          ))}          
            <button
              onClick={selectAll}
              type="button"
              className="special"
            >
              All
            </button>
            <button
              onClick={selectNone}
              type="button"
              className="special"
            >
              None
            </button>
          </div>
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
