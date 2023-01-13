import docs from './form.mdx';

export default {
  title: 'Synergy Design System/Forms/Switch',
};

export const Switch = {
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({ label, required, disabled, help, value,...args }) => {
    return /* html */`<form>
              <div class="group">
                <label for="wifi">${label}</label>
                <div>
                  <input type="checkbox" id="wifi" class="switch" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}>
                  <label for="wifi">${value}</label>
                </div>
                <span>${help}</span>
              </div>
            </form>`;
  },
};