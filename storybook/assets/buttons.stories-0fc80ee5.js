function y({testid:e,label:a="GO",href:r,onClick:t,classes:s,variant:g="primary"}){const n=document.createElement(r?"a":"button");return n.classList.add("button"),s&&n.classList.add(s),g&&n.classList.add(g),e&&n.setAttribute("data-testid",e),r&&n.setAttribute("href",r),n.innerHTML=`
    <span>${a}</span>
  `,t&&n.addEventListener("click",t),n}function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,a){const r=document.createElement("p");r.classList.add("button-container");let t;return a&&(t=`<span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>`),r.innerHTML=`<a href="javascript:void(0)" title=${e} class="button ${e}">${t||""}${b(e)}</a>`,r}const B={title:"Synergy Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}},argTypes:{label:{control:"text"},variant:{options:["primary","secondary","quiet"],control:{type:"radio"}},classes:{control:"text"},href:{control:"text"},testid:{control:"text"},onClick:{control:"text"}}},c={args:{label:"Button",variant:"primary"},render:e=>y(e)},u={render:(e,a)=>o("primary",!0)},i={args:{label:"Button",variant:"secondary"},render:e=>y(e)},d={render:(e,a)=>o("secondary",!0)},p={args:{label:"Button",variant:"quiet"},render:e=>y(e)},m={render:(e,a)=>o("quiet",!0)},l={render:(e,a)=>{const r=document.createElement("div"),t=document.createElement("div");t.append(o("primary",!0)),t.append(o("secondary",!0));const s=document.createElement("div");return s.append(o("primary",!0)),s.append(o("secondary",!0)),r.append(t),r.append(s),r}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary'
  },
  render: args => makeButton(args)
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('primary', true);
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'secondary'
  },
  render: args => makeButton(args)
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('secondary', true);
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'quiet'
  },
  render: args => makeButton(args)
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('quiet', true);
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const container = document.createElement('div');
    const buttonGroup1 = document.createElement('div');
    buttonGroup1.append(createButton('primary', true));
    buttonGroup1.append(createButton('secondary', true));
    const buttonGroup2 = document.createElement('div');
    buttonGroup2.append(createButton('primary', true));
    buttonGroup2.append(createButton('secondary', true));
    container.append(buttonGroup1);
    container.append(buttonGroup2);
    return container;
  }
}`,...l.parameters?.docs?.source}}};const x=["Primary","PrimaryIcon","Secondary","SecondaryIcon","Quiet","QuietIcon","ButtonGroup"];export{l as ButtonGroup,c as Primary,u as PrimaryIcon,p as Quiet,m as QuietIcon,i as Secondary,d as SecondaryIcon,x as __namedExportsOrder,B as default};
//# sourceMappingURL=buttons.stories-0fc80ee5.js.map
