export default {
  title: 'Synergy Design System/Forms',
};

export const TextField = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({ label, required, disabled, help, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return /* html */`<form>
              <div class="group">
                <label for="name">${label}</label>
                <input type="text" id="name" placeholder="Placeholder" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}/>
                <span>${help}</span>
              </div>
            </form>`;
  },
};