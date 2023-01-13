import docs from './form.mdx';

export default {
  title: 'Synergy Design System/Forms',
};

export const Select = {
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({ label, required, disabled, help, value,...args }) => {
    return /* html */`<form>
              <div class="group">
                <label for="car">${label}</label>
                <div class="select">
                  <select id="car" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
                    <option value="" disabled selected hidden>Select car:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                  </select>
                </div>
                <span>${help}</span>
              </div>
            </form>`;
  },
};