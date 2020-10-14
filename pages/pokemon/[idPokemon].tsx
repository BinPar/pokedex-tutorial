import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import { Pokemon } from '../../model/pokemon';
import pokemonList from '../../logic/pokemonList';

interface TypeProps {
  idPokemon: string;
  myPokemonList: Pokemon;
}

const pokemonIdStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
};

const index = ({myPokemonList, idPokemon}: TypeProps ): JSX.Element => (  
  <>
    <h1>
      Pokemon ID :
      {' '}
      {idPokemon}
    </h1>

      <ul>
        <strong> name:</strong>
        {
          myPokemonList.name
        }
      </ul>

      <ul style = {pokemonIdStyle} >
        <strong>types:</strong>
          { 
            //Lo ideal aqui sería reutilizar esta parte que se repite en la página home (Exportarlo como un componente)
            myPokemonList.types.map((type, index) =>
              <span key={type}> 
              { index == 0 ? ' ' : ', ' }
                <Link href={`/type/${type}`}>
                  <a>{type}</a>
                </Link>
              </span>
            )
          }
      </ul>
    
    <ul>
        <p> <strong>weight: </strong> {myPokemonList.weight}</p>
        <p> <strong>height: </strong> {myPokemonList.height}</p>
        <p> 
          { 
            //Tengo dudas si esta es la mejor manera de hacerlo, ya que también podría hacer un object.entries y recorrerlos con el map 
            JSON.stringify(myPokemonList.stats, null, 2) 
          } 
        </p>
    
    </ul>
    
        
    <img alt={myPokemonList.name} src= { myPokemonList.imageURL }></img>

    <p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </p>

  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: pokemonList.map(pokemon => ({ params: { idPokemon: pokemon.id.toString() } })),
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps<TypeProps> = 
  async ({params}: {params: {idPokemon: string}}): Promise<{ props: TypeProps }> => {
    const myPokemonList = pokemonList.find(pokemon => pokemon.id.toString() === params.idPokemon);
    return {
      props: {
        idPokemon: params.idPokemon,
        myPokemonList,
      }
    }
};

export default index;