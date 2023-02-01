import theme from '@sds-theme/EECOL/theme.json';

export default {
  title: 'Synergy Design System/Demo/Spacing',
};

export const Spacing = {
  title: 'Spacing',
  render: () => {
    const options = Object.entries(theme.semantic.spacing.around.component).map(([key, value]) => /* html */`<div class='space'>
        <div>${key} (${value})</div>
        <div><span style="width:${value}"/></div>
      </div>`).join(' ');
    return options;
  },
};

export const Gaps = {
  title: 'Gaps',
  render: () => {
    const options = Object.entries(theme.semantic.spacing.gap.component).map(([key, value]) => /* html */`<div class='space'>
        <div>${key} (${value})</div>
        <div><span style="width:${value}"/></div>
      </div>`).join(' ');
    return options;
  },
};

