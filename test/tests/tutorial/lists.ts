import pokemonList from '../../../logic/pokemonList';
import pokemonCardList from '../../../logic/pokemonCardList';
import filterByType from '../../../logic/filterByType';

const grassFilter = filterByType('grass');

test('Total grass pokemons', (): void => {  
  const grassPokemons = grassFilter(pokemonCardList);
  expect(grassPokemons.length).toBe(108);
});

export default test('Total pokemons', (): void => {
  expect(pokemonList.length).toBe(897);
});
