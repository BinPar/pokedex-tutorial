import React from 'react';
import { mount } from 'enzyme';
import useToggle from '../../../hooks/useToggle';

test('Use Toggle', async (): Promise<void> => {
  const TestToggle = (): JSX.Element => {
    const [value] = useToggle();
    return <p>{value?'open':'closed'}</p>;
  }
  const component = mount(<TestToggle />);
  expect(component.text()).toBe('closed');
});
