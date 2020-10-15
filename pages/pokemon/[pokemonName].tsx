import { GetStaticProps, GetStaticPaths } from 'next';
import { Pokemon } from '../../model/pokemon';
import pokemonList from '../../logic/pokemonList';
import Link from 'next/link';

interface IndexProps {
    myPokemon: Pokemon;
}

const index = ({myPokemon}: IndexProps ): JSX.Element => (
  <>
    <h2>{`Nombre: `}{myPokemon.name}</h2>
    <strong>{`ID: `}{myPokemon.id}</strong>
    <p><img src={myPokemon.imageURL} /></p>
    <p>
      <b>{`Peso: `}</b>
        <a>{myPokemon.weight}</a>
    </p>
    <p>
      <b>{`Altura: `}</b>
        <a>{myPokemon.height}</a>
    </p>
    <p>
      <b>{`Tipo: `}</b>
        <a>{
          myPokemon.types.map((type, i) => (
            <span key={type}> 
              {i===0?' ':', '}
              <a>{type}</a>
            </span>
          ))
        }</a>
    </p>
    <p>
      <b>{`Stats: `}</b>
        <ul>
          <li>{`HP: `}{myPokemon.stats.hp}</li>
          <li>{`Attack: `}{myPokemon.stats.attack}</li>
          <li>{`Defense: `}{myPokemon.stats.defense}</li>
          <li>{`Special attack: `}{myPokemon.stats["special-attack"]}</li>
          <li>{`Special defense: `}{myPokemon.stats["special-defense"]}</li>
          <li>{`Speed: `}{myPokemon.stats.speed}</li>
        </ul>
    </p>

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