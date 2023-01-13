import docs from './form.mdx';

export default {
  title: 'Synergy Design System/Forms',
};

export const Checkbox = {
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({ label, required, disabled, help, value, ...args }) => {
    return /* html */`<form>
              <div class="group">
                <label for="terms">${label}</label>
                <div>
                  <input type="checkbox" id="terms" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
                  <label for="terms">${value}</label>
                </div>
                <span>${help}</span>
              </div>
            </form>`;
  },
};