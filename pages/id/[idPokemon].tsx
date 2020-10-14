import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import { PokemonCard } from '../../model/pokemon';
import pokemonCardList from '../../logic/pokemonCardList';

interface TypeProps {
  idPokemon: string;
  myPokemonCardList: PokemonCard;
}

const pokemonIdStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'

};

const index = ({myPokemonCardList, idPokemon}: TypeProps ): JSX.Element => (  
  <>
    <h1>
      Pokemon ID :
      {' '}
      {idPokemon}
    </h1>

    <div>
      <ul>
        <strong> name:</strong>
        {
          myPokemonCardList.name
        }
      </ul>
      <ul style = {pokemonIdStyle} >
        <strong>types:</strong>
          { 
            //Lo ideal aqui sería reutilizar esta parte que se repite en la página home (Exportarlo como un componente)
            myPokemonCardList.types.map((type, i) =>
              <span key={type}> 
              {i===0?' ':', '}
              <Link href={`/type/${type}`}>
                <a>{type}</a>
              </Link>
              </span>
            )
          }
      </ul>
    </div>
      <img alt={myPokemonCardList.name} src= { myPokemonCardList.imageURL }></img>
    
    <p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </p>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: pokemonCardList.map(pokemon => ({ params: { idPokemon: pokemon.id.toString() } })),
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps<TypeProps> = 
  async ({params}: {params: {idPokemon: string}}): Promise<{ props: TypeProps }> => {
    const myPokemonCardList = pokemonCardList.find(pokemon => pokemon.id.toString() === params.idPokemon);
    return {
      props: {
        idPokemon: params.idPokemon,
        myPokemonCardList,
      }
    }
};

export default index;