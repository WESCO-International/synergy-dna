const path = require('path');
module.exports = {
  "stories": [
    "../docs/**/*.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  babel: async () => {
    return {
      presets: ['@babel/preset-react'],
    };
  },
  viteFinal: async config => {
    config.build = { ...(config.build ?? {}), target: 'esnext' };
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sds-theme': path.resolve(__dirname, '../dist/'),
      '@sds-stories': path.resolve(__dirname, '../docs/stories'),
    };
    return config;
  },
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": ['./', '../dist'],
}