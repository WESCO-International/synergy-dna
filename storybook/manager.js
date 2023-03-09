import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { Code, Brands } from './addons';

addons.register('Code', () => {
  addons.add('Code', {
    type: types.PANEL,
    title: 'Code',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Code />
      </AddonPanel>
    ),
  });
});

addons.register('Brand', () => {
  addons.add('Brand', {
    title: 'Brand',
    type: types.TOOL,
    render: () => <Brands />,
  });
});