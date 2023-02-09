import{u as l,e as n,d as f}from"./dedent-ca873ae2.js";import"./index-0c9409f0.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-81c992b2.js";import"./_getTag-5d4511eb.js";import"./uniq-efb824e2.js";const b={title:"Synergy Design System/Atoms/Forms/Switch"},t=({label:e,required:a,checked:c,disabled:o,help:d,value:p})=>f`
    <form>
      <div class="group">
        <label for="wifi">${e}</label>
        <div>
          <input type="checkbox" id="wifi" class="switch" ${c?"checked":""} ${a?"required":""} ${o?"disabled":""}>
          <label for="wifi">${p}</label>
        </div>
        <span>${d}</span>
      </div>
    </form>`,s={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:e=>t(e)},i={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>t(e),play:async({canvasElement:e})=>{const a=document.querySelector("#wifi");await l.click(a),n(a.checked).toEqual(!0)}},r={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>t(e),play:async({canvasElement:e})=>{const a=document.querySelector("#wifi");await l.click(a),n(a.checked).toEqual(!1)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: args => SwitchExample(args)
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => SwitchExample(args),
  play: async ({
    canvasElement
  }) => {
    const switchElement = document.querySelector('#wifi');
    await userEvent.click(switchElement);
    expect(switchElement.checked).toEqual(true);
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => SwitchExample(args),
  play: async ({
    canvasElement
  }) => {
    const switchElement = document.querySelector('#wifi');
    await userEvent.click(switchElement);
    expect(switchElement.checked).toEqual(false);
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","Selected","Disabled"];export{s as Default,r as Disabled,i as Selected,y as __namedExportsOrder,b as default};
//# sourceMappingURL=switch.stories-0377177a.js.map
