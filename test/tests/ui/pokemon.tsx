import React from 'react';
import { mount } from 'enzyme';
import mockNextUseRouter from '../../mocks/mockNextUseRouter';
import Pokemon, { getStaticProps } from '../../../pages/pokemon/[name]';

test('Pokemon Page', async (): Promise<void> => {
  /**
   * Mocks the next router
   */
  mockNextUseRouter({
    route: '/pokemon/bulbasaur',
    pathname: '/pokemon/bulbasaur',
    query: {
      name: 'bulbasaur',
    },
    asPath: '/pokemon/bulbasaur',
  });

  const serverSideProps = await getStaticProps({
    params: { name: 'bulbasaur' },    
  });

  // Renders the page
  const page = mount(<Pokemon {...serverSideProps.props} />);

  // We check that the content of the page is not changed
  expect(page).toMatchSnapshot('expanded');
  
  expect(page.find('h1')).toHaveLength(1);
  expect(page.find('h1').first().text()).toBe('Pokemon bulbasaur');
  page.find('h2 a').forEach(item => {
    expect(item.text()[0]).toBe('-');        
    item.simulate('click');
    expect(item.text()[0]).toBe('+');
  });

  expect(page).toMatchSnapshot('notExpanded');
});
