import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './textInput';

test('TextInput should render the input type text without action icon', () => {
  const component = renderer.create(
    <TextInput />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextInput should render the data readonly', () => {
  const component = renderer.create(
    <TextInput
      readonly={true}
      defaultValue={'Hello'}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextInput should render the input with action icon', () => {
  const ActionIcon = <div>close</div>;
  const component = renderer.create(
    <TextInput
      actionIcon={ActionIcon}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextInput should render the input type password', () => {
  const component = renderer.create(
    <TextInput
      type={'password'}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});