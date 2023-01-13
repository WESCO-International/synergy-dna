const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
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
  "staticDirs": ['./', '../styles/', { from: '../brands', to: '/brands' }],
}