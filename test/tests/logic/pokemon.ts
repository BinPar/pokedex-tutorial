import pokemonInfo from '../../../logic/pokemonInfo';
import pokemonCards from '../../../logic/pokemonCards';

export default test('Load Pokemons', async (): Promise<void> => {
  const list = await pokemonInfo();
  console.log(list);
  expect(list[0].name).toBe('bulbasaur');
  expect(list[0].id).toBe(1);
  expect(list[0].weight).toBe(69);
  expect(list[0].height).toBe(7);
  expect(list[0].imageURL).toBe(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  );

  const cards = await pokemonCards();
  console.log(cards);
});
