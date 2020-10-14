import * as Types from '../../../model/pokemon';
import pokemonJSON from '../../../data/pokemon.json';

const pokemonList = pokemonJSON as Types.Pokemon[];

const filterByType = (type: string): Types.Pokemon[] => 
  pokemonList.filter(
    (pokemon: Types.Pokemon): boolean => pokemon.types.includes(type)
  );

test('Total grass pokemons', (): void => {
  const grassPokemons = filterByType('grass');
  expect(grassPokemons.length).toBe(108);
});

export default test('Total pokemons', (): void => {
  expect(pokemonList.length).toBe(897);
});
