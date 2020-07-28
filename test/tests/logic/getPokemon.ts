import getPokemon from '../../../logic/getPokemon';

export default test('Load pokemons', async (): Promise<void> => {
  const bulbasaur = await getPokemon('bulbasaur');  
  expect(bulbasaur.stats.hp).toBe(45);
});