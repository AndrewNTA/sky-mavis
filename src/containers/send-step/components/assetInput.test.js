import React from 'react';
import renderer from 'react-test-renderer';
import AssetInput from './assetInput';

test('SendStep should render asset input', () => {
  const component = renderer.create(
    <AssetInput
      selectedCurrency= {{
        primaryCurrency: 'USD',
        icon: 'icon_url'
      }}
      onOpenModal={() => {}}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});