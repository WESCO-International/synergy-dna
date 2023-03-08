/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { makeButton } from '../../../components';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createButton(type, icon) {
  const container = document.createElement('p');
  container.classList.add('button-container');

  let iconSpan;
  if (icon) {
    iconSpan = `<span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>`;
  }
  container.innerHTML = /* html */ `<a href="javascript:void(0)" title=${type} class="button ${type}">${iconSpan || ''}${capitalizeFirstLetter(type)}</a>`;
  return container;
}

/**
 * Default Config
 */
export default {
  title: 'Synergy Design System/Atoms/Buttons',
  parameters: {
    docs: {
      description: {
        component: 'A block to display buttons',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      options: ['primary', 'secondary', 'quiet'],
      control: { type: 'radio' },
    },
    classes: { control: 'text' },
    href: { control: 'text' },
    testid: { control: 'text' },
    onClick: { control: 'text' }
  },
};

export const Primary = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
  render: args => makeButton(args),
};

export const PrimaryIcon = {
  render: (args, context) => {
    return createButton('primary', true);
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
  render: args => makeButton(args),
};

export const SecondaryIcon = {
  render: (args, context) => {
    return createButton('secondary', true);
  },
};

export const Quiet = {
  args: {
    label: 'Button',
    variant: 'quiet',
  },
  render: args => makeButton(args),
};

export const QuietIcon = {
  render: (args, context) => {
    return createButton('quiet', true);
  },
};

export const ButtonGroup = {
  render: (args, context) => {
    const container = document.createElement('div');

    
    const buttonGroup1 = document.createElement('div');
    buttonGroup1.append(createButton('primary', true));
    buttonGroup1.append(createButton('secondary', true));

    const buttonGroup2 = document.createElement('div');
    buttonGroup2.append(createButton('primary', true));
    buttonGroup2.append(createButton('secondary', true));

    container.append(buttonGroup1);
    container.append(buttonGroup2);
    return container;
  },
};
