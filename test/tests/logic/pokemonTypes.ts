import getPokemonTypes from '../../../logic/getPokemonTypes';

export default test('Load pokemon Cards', async (): Promise<void> => {
  let list = await getPokemonTypes();
  expect(list[0]).toBe('bug');
  list = await getPokemonTypes();
  expect(list[0]).toBe('bug');
});
