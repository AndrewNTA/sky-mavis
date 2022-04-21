import React from 'react';
import renderer from 'react-test-renderer';
import AssetModal from './assetModal';

test('SendStep should render success modal', () => {
  const component = renderer.create(
    <AssetModal
      options={[{
        id: '12345',
        primaryValue: 10,
        primaryCurrency: 'USD',
        secondaryCurrency: 'VND',
        secondaryValue: 1000,
        icon: 'icon_url'
      }]}
      selectedId={'12345'}
      onSelect={() => {}}
      onClose={() => {}}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});