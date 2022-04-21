import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));
test('Home should render home page', () => {
  const component = renderer.create(
    <Home />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});