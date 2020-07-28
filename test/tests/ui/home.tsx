import React from 'react';
import { mount } from 'enzyme';
import mockNextUseRouter from '../../mocks/mockNextUseRouter';
import Index, {getStaticProps} from '../../../pages/index';

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

  // We check that the content of the page is not changed
  // expect(page).toMatchSnapshot();

  expect(page.find('h1')).toHaveLength(1);
  expect(page.find('h1').first().text()).toBe('BinPar Pokedex');
});
