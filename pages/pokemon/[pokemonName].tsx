import { GetStaticProps, GetStaticPaths } from 'next';
import { Pokemon } from '../../model/pokemon';
import pokemonList from '../../logic/pokemonList';
import Link from 'next/link';

interface IndexProps {
    myPokemon: Pokemon;
}
  

  const index = ({myPokemon}: IndexProps ): JSX.Element => (
    <>
      <h1>{`Nombre: `}{myPokemon.name}</h1>
      <strong>{`ID: `}{myPokemon.id}</strong>
      <img src={myPokemon.imageURL} />
      <b>{`Peso: `}{myPokemon.weight}</b>
      <b>{`Altura: `}{myPokemon.height}</b>
      {/* <b>{`Tipo: `}{
          <span key={myPokemon.ty}> 
          {i===0?' ':', '}
          <a>{type}</a>
        </span>
      }</b> */}
      <Link href="/">
      <a>Volver</a>
      </Link>
    </>
  );
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const names = pokemonList.reduce<string[]>(
      (stored, pokemon): string[] => {
        if(!stored.includes(pokemon.name)) {
            stored.push(pokemon.name);
          }
        return stored;
      }
      ,
      []
    );
    return {
      paths: names.map((name) => ({ params: { pokemonName: name } })),
      fallback: false,
    }
  }
  
  
  export const getStaticProps: GetStaticProps<IndexProps> = 
    async ({params}: {params: {pokemonName: string}}): Promise<{ props: IndexProps }> => {
      const myPokemon = pokemonList.find((pokemon) => pokemon.name === params.pokemonName);
      return {
        props: {
          myPokemon
        }
      }
  };
  
  export default index;