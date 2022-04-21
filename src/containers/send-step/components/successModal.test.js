import React from 'react';
import renderer from 'react-test-renderer';
import SuccessModal from './successModal';

test('SendStep should render success modal', () => {
  const component = renderer.create(
    <SuccessModal
      currency={'EUR'}
      onConfirm={() => {}}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});