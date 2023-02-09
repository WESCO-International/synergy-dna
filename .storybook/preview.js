const customViewports = {
  xs: {
    name: "XS",
    styles: {
      width: "400px",
      height: "600px",
    },
  },
  s: {
    name: "SM",
    styles: {
      width: "576px",
      height: "801px",
    },
  },
  m: {
    name: "MD",
    styles: {
      width: "768px",
      height: "700px",
    },
  },
  l: {
    name: "LG",
    styles: {
      width: "992px",
      height: "800px",
    },
  },
  xl: {
    name: "XL",
    styles: {
      width: "1200px",
      height: "900px",
    },
  },
  xxl: {
    name: "XXL",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Brands', 'Developer Docs', '*'],
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
}
