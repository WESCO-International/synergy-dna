export default {
  title: 'Synergy Design System/Developer Docs/CSS Utility/Typography',
};

export const FontSizeUtilities = {
  title: 'FontSizeUtilities',
  render: ({ label, ...args }) => {
    return /* html */`<div class="story"><h1>This is an h1</h1>
  <h2 class="h4">This is an h2, with the size of an h4</h2></div>`;
  }
}

export const FontWeightUtilities = {
  title: 'FontWeightUtilities',
  render: ({ label, ...args }) => {
    return /* html */`<div class="story"><h3>This is an <span class="bold">h3</span></h3></div>`;
  }
}

export const TextAlignmentUtilities = {
  title: 'TextAlignmentUtilities',
  render: ({ label, ...args }) => {
    return /* html */`<div class="story">
    <div class="text-align-left">Let Aligned</div>
    <div class="text-align-center">Center Aligned</div>
    <div class="text-align-right">Right Aligned</div>
</div>`;
  }
}