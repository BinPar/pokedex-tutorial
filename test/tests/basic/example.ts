import  * as IPokemons from '../../../model/pokemon';
import PokemonJSON  from '../../../data/pokemon.json';

let pokemonList = PokemonJSON.map((pokemon: IPokemons.Pokemon): IPokemons.PokemonCard => 
    ({
        id: pokemon.id,
        name: pokemon.name,
        imageURL: pokemon.imageURL,
        types: pokemon.types
    })
);

export default test('Total Pokemon list', (): void => {
    expect(pokemonList.length).toBe(897);
});

const pokemonsByType = (type: string): IPokemons.PokemonCard[] => pokemonList.filter((pokemon: IPokemons.Pokemon) => pokemon.types.includes(type))

test('Total Pokemon grass', (): void => {
    const pokemonsGrass: IPokemons.PokemonCard[] = pokemonsByType('grass');
    expect(pokemonsGrass.length).toBe(108);
});

test('Total Pokemon poison', (): void => {
    const pokemonsPoison: IPokemons.PokemonCard[] = pokemonsByType('poison');
    expect(pokemonsPoison.length).toBe(69);
});

test('Total Pokemon Fire', (): void => {
    const pokemonsFire: IPokemons.PokemonCard[] = pokemonsByType('fire');
    expect(pokemonsFire.length).toBe(73);
});



