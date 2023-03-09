
import React from 'react';
import { addons, types } from '@storybook/addons';
import { Brands } from './addons';
import theme from './theme.js';

addons.setConfig({
  theme: theme,
});

addons.register('Brand', () => {
  addons.add('Brand', {
    title: 'Brand',
    type: types.TOOL,
    render: () => <Brands />,
  });
});