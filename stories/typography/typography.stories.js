export default {
  title: 'Synergy Design System/Typography',
};

export const Display = {
  title: 'Display',
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return /* html */`<div>
  <h1 class="display1">Display 1</h1>
  <h1 class="display2">Display 2</h1>
  <h1 class="display3">Display 3</h1>
</div>`;
  }
};