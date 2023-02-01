const v={title:"Synergy Design System/Atoms/Forms"},o={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label:e,required:a,disabled:n,help:r,...l})=>`<form>
              <div class="group">
                <label for="name">${e}</label>
                <input type="text" id="name" placeholder="Placeholder" ${a?"required":""} ${n?"disabled":""}/>
                <span>${r}</span>
              </div>
            </form>`},s={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label:e,required:a,disabled:n,help:r,...l})=>`<form>
              <div class="group">
                <label for="name">${e}</label>
                <textarea type="text" id="name" placeholder="Placeholder" ${a?"required":""}  ${n?"disabled":""}></textarea>
                <span>${r}</span>
              </div>
            </form>`},d={args:{label:"Favorite Car Manufacturer",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label:e,required:a,disabled:n,help:r,value:l,...i})=>`<form>
              <div class="group">
                <label for="car">${e}</label>
                <div class="select">
                  <select id="car" ${a?"required":""}  ${n?"disabled":""}>
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
                <span>${r}</span>
              </div>
            </form>`},t={args:{label:"Agree to Terms",value:"Completed Task",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label:e,required:a,checked:n,disabled:r,help:l,value:i,...f})=>`<form>
              <div class="group">
                <label for="terms">${e}</label>
                <div>
                  <input type="checkbox" id="terms" ${n?"checked":""}  ${a?"required":""}  ${r?"disabled":""} onclick="(event) => event.target.checked = true">
                  <label for="terms">${i}</label>
                </div>
                <span>${l}</span>
              </div>
            </form>`},p={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label:e,required:a,checked:n,disabled:r,help:l,value:i,...f})=>`<form>
              <div class="group">
                <label for="wifi">${e}</label>
                <div>
                  <input type="checkbox" id="wifi" class="switch" ${n?"checked":""} ${a?"required":""} ${r?"disabled":""}>
                  <label for="wifi">${i}</label>
                </div>
                <span>${l}</span>
              </div>
            </form>`},c={args:{label:"Meal Preference",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label:e,required:a,checked:n,disabled:r,help:l,values:i,...f})=>`<form>
              <div class="group">
                <label for="meal">${e}</label>
                <div>
                  ${i.map(u=>`
                              <input id="${u}" type="radio" name="meal" ${n?"checked":""} ${a?"required":""}  ${r?"disabled":""}>
                              <label for="${u}">${u}</label>
                          `).join(" ")}
                </div>
                <span>${l}</span>
              </div>
            </form>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    disabled,
    help,
    ...args
  }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return \`<div>\${label}</div>\`;
    return (/* html */\`<form>
              <div class="group">
                <label for="name">\${label}</label>
                <input type="text" id="name" placeholder="Placeholder" \${required ? 'required' : ''} \${disabled ? 'disabled' : ''}/>
                <span>\${help}</span>
              </div>
            </form>\`
    );
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    disabled,
    help,
    ...args
  }) => {
    return (/* html */\`<form>
              <div class="group">
                <label for="name">\${label}</label>
                <textarea type="text" id="name" placeholder="Placeholder" \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''}></textarea>
                <span>\${help}</span>
              </div>
            </form>\`
    );
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    disabled,
    help,
    value,
    ...args
  }) => {
    return (/* html */\`<form>
              <div class="group">
                <label for="car">\${label}</label>
                <div class="select">
                  <select id="car" \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''}>
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
                <span>\${help}</span>
              </div>
            </form>\`
    );
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    checked,
    disabled,
    help,
    value,
    ...args
  }) => {
    return (/* html */\`<form>
              <div class="group">
                <label for="terms">\${label}</label>
                <div>
                  <input type="checkbox" id="terms" \${checked ? 'checked' : ''}  \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''} onclick="(event) => event.target.checked = true">
                  <label for="terms">\${value}</label>
                </div>
                <span>\${help}</span>
              </div>
            </form>\`
    );
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    checked,
    disabled,
    help,
    value,
    ...args
  }) => {
    return (/* html */\`<form>
              <div class="group">
                <label for="wifi">\${label}</label>
                <div>
                  <input type="checkbox" id="wifi" class="switch" \${checked ? 'checked' : ''} \${required ? 'required' : ''} \${disabled ? 'disabled' : ''}>
                  <label for="wifi">\${value}</label>
                </div>
                <span>\${help}</span>
              </div>
            </form>\`
    );
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    checked,
    disabled,
    help,
    values,
    ...args
  }) => {
    return (/* html */\`<form>
              <div class="group">
                <label for="meal">\${label}</label>
                <div>
                  \${values.map(value => {
        return (/* html */\`
                              <input id="\${value}" type="radio" name="meal" \${checked ? 'checked' : ''} \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''}>
                              <label for="\${value}">\${value}</label>
                          \`
        );
      }).join(' ')}
                </div>
                <span>\${help}</span>
              </div>
            </form>\`
    );
  }
}`,...c.parameters?.docs?.source}}};const b=["TextField","TextArea","Select","Checkbox","Switch","Radio"];export{t as Checkbox,c as Radio,d as Select,p as Switch,s as TextArea,o as TextField,b as __namedExportsOrder,v as default};
//# sourceMappingURL=forms.stories-933a0ee1.js.map
