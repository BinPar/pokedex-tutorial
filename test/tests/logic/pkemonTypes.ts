import getPokemonTypes from '../../../logic/getPokemonTypes';

export default test('Check pokemon types', async (): Promise<void> => {
  let types = await getPokemonTypes();
  expect(types).toHaveLength(18);
  expect(types[0]).toBe('bug');
  expect(types[types.length-1]).toBe('water');
  types = await getPokemonTypes();
  expect(types).toHaveLength(18);
});
