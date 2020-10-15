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
        <li>
          {`HP: `}{myPokemon.stats.hp}
          {`Attack: `}{myPokemon.stats.attack}
          {`Defense: `}{myPokemon.stats.defense}
          {`Special attack: `}{myPokemon.stats.specialAttack}
          {`Special defense: `}{myPokemon.stats.specialDefense}
          {`Speed: `}{myPokemon.stats.speed}
        </li>
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
    console.log(myPokemon);
    return {
      props: {
        myPokemon
      }
    }
};

export default index;