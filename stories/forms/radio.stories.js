import docs from './form.mdx';

export default {
  title: 'Synergy Design System/Forms',
};

export const Radio = {
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({ label, required, disabled, help, values, ...args }) => {
    return /* html */`<form>
              <div class="group">
                <label for="meal">${label}</label>
                <div>
                  ${values.map((value) => {
                    return /* html */`
                              <input id="${value}" type="radio" name="meal" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
                              <label for="${value}">${value}</label>
                          `
                  }).join(' ')}
                </div>
                <span>${help}</span>
              </div>
            </form>`;
  },
};