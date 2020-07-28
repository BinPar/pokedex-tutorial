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
  expect(page).toMatchSnapshot('All');
  expect(page.find('h1')).toHaveLength(1);
  expect(page.find('h1').first().text()).toBe('BinPar Pokedex');
  expect(page.find('.card').length).toBe(897);
  page.find('button').first().simulate('click');
  expect(page.find('.card').length).toBe(83);
  expect(page).toMatchSnapshot('Bugs');
  const fireButton = page.findWhere(item => item.text() === 'fire').first();
  fireButton.simulate('click',{ctrlKey: true});
  expect(page).toMatchSnapshot('Bugs and Fire');
  expect(page.find('.card').length).toBe(154);
  fireButton.simulate('click',{ctrlKey: true});
  expect(page).toMatchSnapshot('Bugs');
  expect(page.find('.card').length).toBe(83);
  const allButton = page.findWhere(item => item.text() === 'All').first();
  allButton.simulate('click');
  expect(page.find('.card').length).toBe(897);
  expect(page).toMatchSnapshot('All');
  const noneButton = page.findWhere(item => item.text() === 'None').first();
  noneButton.simulate('click');
  expect(page.find('.card').length).toBe(0);
  expect(page).toMatchSnapshot('None');

});
