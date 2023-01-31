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
  babel: async () => {
    return {
      presets: ['@babel/preset-react'],
    };
  },
  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": ['./', { from: '../dist', to: '/dist' }],
}