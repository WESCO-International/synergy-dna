import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { Code } from './addons';

addons.register('Code', api => {
  
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