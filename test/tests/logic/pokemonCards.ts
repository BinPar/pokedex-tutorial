import getPokemonCards from '../../../logic/pokemonCards';

export default test('Load pokemon Cards', async (): Promise<void> => {
  const list = await getPokemonCards();
  expect(list[0].name).toBe('bulbasaur');
  expect(list[0].id).toBe(1);
  expect(list[0].imageURL).toBe(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  );
});
