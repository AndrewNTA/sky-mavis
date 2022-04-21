import React from 'react';
import renderer from 'react-test-renderer';
import UnlockWallet from './index';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));
test('UnlockWallet should render Unlock wallet page', () => {
  const component = renderer.create(
    <UnlockWallet />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});