import pokemonInfo from '../../../logic/pokemonInfo';

export default test('Load pokemons', async (): Promise<void> => {
  const list = await pokemonInfo();
  expect(list[0].name).toBe('bulbasaur');
  expect(list[0].id).toBe(1);
  expect(list[0].weight).toBe(69);
  expect(list[0].height).toBe(7);
  expect(list[0].imageURL).toBe(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  );
  expect(list[0].stats.hp).toBe(45);
});
