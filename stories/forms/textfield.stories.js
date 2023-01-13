export default {
  title: 'Synergy Design System/Forms/Text Field',
};

export const Default = {
  title: 'Default',
  args: {
    label: 'Hello'
  },
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return /* html */`<form>
              <div class="group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Placeholder"/>
                <span>A clever desciption of this field</span>
              </div>
            </form>`;
  },
};

export const Required = {
  title: 'Required',
  args: {
    label: 'Hello',
    required: true
  },
  render: ({ label, required, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return /* html */`<form>
              <div class="group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Placeholder" ${required ? 'required' : ''}/>
                <span>${label}</span>
              </div>
            </form>`;
  },
};
