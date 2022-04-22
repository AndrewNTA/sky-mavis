import React from 'react';
import renderer from 'react-test-renderer';
import SendStep from './index';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));
test('SendStep should render send step page', () => {
  const component = renderer.create(
    <SendStep />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});