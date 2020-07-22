import React from 'react';
import { mount } from 'enzyme';
import mockNextUseRouter from '../../mocks/mockNextUseRouter';
import Index from '../../../pages/index';

/**
 * Checks that the Home Page redirects to some sample
 */
test('Home Page', () => {
  /**
   * Mocks the next router
   */
  mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  });

  // Renders the page
  const page = mount(<Index />);

  // We check that the content of the page is not changed
  // expect(page).toMatchSnapshot();

  expect(page.find('h1')).toHaveLength(1);
  expect(page.find('h1').first().text()).toBe('BinPar Pokedex');
});
