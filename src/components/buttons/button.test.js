import React from 'react';
import renderer from 'react-test-renderer';
import Button, { SECONDARY, FULL, MEDIUM } from './button';

test('Button should render the primary button with small size', () => {
  const component = renderer.create(
    <Button
      text={'ok'}
      onClick={() => {}}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button should render the secondary button with full size', () => {
  const component = renderer.create(
    <Button
      text={'cancel'}
      onClick={() => {}}
      type={SECONDARY}
      size={FULL}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button should render the primary button with medium size', () => {
  const component = renderer.create(
    <Button
      text={'ok'}
      onClick={() => {}}
      size={MEDIUM}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});