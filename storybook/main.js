const path = require('path');
module.exports = {
  "stories": ["../docs/**/*.mdx", "../docs/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@dylandepass/franklin-storybook-addon", "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  babel: async () => {
    return {
      presets: ['@babel/preset-react']
    };
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sds-theme': path.resolve(__dirname, '../dist/'),
      '@sds-stories': path.resolve(__dirname, '../docs/stories')
    };
    return config;
  },
  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": ['./', {
    from: '../dist',
    to: '/dist'
  }]
};