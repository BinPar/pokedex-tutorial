import React from 'react';
import { mount } from 'enzyme';
import mockNextUseRouter from '../../mocks/mockNextUseRouter';
import Index, {getStaticProps} from '../../../pages/index';
import { getStaticPaths } from '../../../pages/pokemon/[name]'


/**
 * Checks that the Home Page redirects to some sample
 */
test('Home Page', async (): Promise<void> => {
  /**
   * Mocks the next router
   */
  mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  });

  const staticProps = await getStaticProps({});
  // Renders the page
  const page = mount(<Index {...staticProps.props}  />);

  const staticPaths = await getStaticPaths();
  expect(staticPaths.paths).toHaveLength(897);

  // We check that the content of the page is not changed
  expect(page).toMatchSnapshot('All');

  expect(page.find('h1')).toHaveLength(1);
  expect(page.find('h1').first().text()).toBe('BinPar Pokedex');
  expect(page.find('button').first().text()).toBe('bug');
  expect(page.find('.card').length).toBe(897);
  expect(page.find('button').first().simulate('click'));
  expect(page.find('.card').length).toBe(83);
  expect(page).toMatchSnapshot('Bug');
  const allButton = page.findWhere(item => item.text() === 'All').first();
  allButton.simulate('click');
  expect(page.find('.card').length).toBe(897);
  expect(page).toMatchSnapshot('All');
  expect(page.find('button').first().simulate('click'));
  const waterButton = page.findWhere(item => item.text() === 'water').first();
  waterButton.simulate('click',{ctrlKey: true});
  expect(page.find('.card').length).toBe(219);
  expect(page).toMatchSnapshot('Bug and water');
  waterButton.simulate('click',{ctrlKey: true});
  expect(page.find('.card').length).toBe(83);
  expect(page).toMatchSnapshot('Bug');
  const noneButton = page.findWhere(item => item.text() === 'None').first();
  noneButton.simulate('click');
  expect(page.find('.card').length).toBe(0);
  expect(page).toMatchSnapshot('None');

});
