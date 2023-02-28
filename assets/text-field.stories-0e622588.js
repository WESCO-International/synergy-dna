import{w as s,e as t,u as p,d as h}from"./dedent-ca873ae2.js";import"./index-0c9409f0.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-81c992b2.js";import"./_getTag-5d4511eb.js";import"./uniq-efb824e2.js";const E={title:"Synergy Design System/Atoms/Forms/TextField"},r=({label:e,required:n,disabled:a,help:u})=>h`
  <form>
    <div class="group">
      <label for="name">${e}</label>
      <input type="text" id="name" placeholder="Placeholder" ${n?"required":""} ${a?"disabled":""}/>
      <span>${u}</span>
    </div>
  </form>`,l={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const n=s(e);t(n.getByText("First Name")).toBeInTheDocument(),t(n.getByPlaceholderText("Placeholder")).toBeInTheDocument(),t(n.getByText("A clever desciption of this field")).toBeInTheDocument()}},c={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");p.type(a,"Johnny Appleseed"),t(a.value).toEqual("Johnny Appleseed")}},i={args:{label:"First Name",help:"A clever desciption of this field",required:!0,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");t(a.hasAttribute("required")).toBeTruthy(),p.click(a)}},o={args:{label:"First Name",help:"A clever desciption of this field",required:!0,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");t(a.hasAttribute("required")).toBeTruthy(),p.type(a,"Johnny Appleseed"),t(a.value).toEqual("Johnny Appleseed")}},d={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");p.type(a,"Johnny Appleseed"),t(a.value).toEqual("")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('First Name')).toBeInTheDocument();
    expect(canvas.getByPlaceholderText('Placeholder')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('Johnny Appleseed');
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: true,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    expect(input.hasAttribute('required')).toBeTruthy();
    userEvent.click(input);
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: true,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    expect(input.hasAttribute('required')).toBeTruthy();
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('Johnny Appleseed');
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('');
  }
}`,...d.parameters?.docs?.source}}};const A=["Default","Filled","Required","Valid","Disabled"];export{l as Default,d as Disabled,c as Filled,i as Required,o as Valid,A as __namedExportsOrder,E as default};
//# sourceMappingURL=text-field.stories-0e622588.js.map
