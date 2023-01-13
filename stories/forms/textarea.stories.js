import docs from './form.mdx';

export default {
  title: 'Synergy Design System/Forms',
};

export const TextArea = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false
  },
  render: ({ label, required, disabled, help, ...args }) => {
    return /* html */`<form>
              <div class="group">
                <label for="name">${label}</label>
                <textarea type="text" id="name" placeholder="Placeholder" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}></textarea>
                <span>${help}</span>
              </div>
            </form>`;
  },
};
