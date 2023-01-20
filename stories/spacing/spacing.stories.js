import theme from '../../dist/EECOL/theme.json';

export default {
  title: 'Synergy Design System/Demo/Spacing',
};

export const Spacing = {
  title: 'Spacing',
  render: ({ label, ...args }) => {
    const options = Object.entries(theme.semantic.spacing.around.component).map(([key, value]) => {
      return /* html */`<div class='space'>
        <div>${key}</div>
        <div><span style="width:${value}"/></div>
      </div>`;
    }).join(' ');
    return options;
  }
};

export const Gaps = {
  title: 'Gaps',
  render: ({ label, ...args }) => {
    const options = Object.entries(theme.semantic.spacing.gap.component).map(([key, value]) => {
      return /* html */`<div class='space'>
        <div>${key}</div>
        <div><span style="width:${value}"/></div>
      </div>`;
    }).join(' ');
    return options;
  }
};
