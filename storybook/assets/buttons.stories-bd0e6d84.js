function l({testid:r,label:n="GO",href:t,onClick:a,classes:m,variant:g}){const e=document.createElement(t?"a":"button");return e.classList.add("button"),m&&e.classList.add(m),g&&e.classList.add(g),r&&e.setAttribute("data-testid",r),t&&e.setAttribute("href",t),e.innerHTML=`
    <span>${n}</span>
  `,a&&e.addEventListener("click",a),e}function y(r){return r.charAt(0).toUpperCase()+r.slice(1)}function p(r,n){const t=document.createElement("p");t.classList.add("button-container");let a;return n&&(a=`<span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>`),t.innerHTML=`<a href="javascript:void(0)" title=${r} class="button ${r}">${a||""}${y(r)}</a>`,t}const x={title:"Synergy Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}},argTypes:{label:{control:"text"},variant:{options:["primary","secondary","quiet"],control:{type:"radio"}},classes:{control:"text"},href:{control:"text"},testid:{control:"text"},onClick:{control:"text"}}},o={args:{label:"Button",variant:"primary"},render:r=>l(r)},s={render:(r,n)=>p("primary",!0)},c={args:{label:"Button",variant:"secondary"},render:r=>l(r)},i={render:(r,n)=>p("secondary",!0)},u={args:{label:"Button",variant:"quiet"},render:r=>l(r)},d={render:(r,n)=>p("quiet",!0)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary'
  },
  render: args => makeButton(args)
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('primary', true);
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'secondary'
  },
  render: args => makeButton(args)
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('secondary', true);
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'quiet'
  },
  render: args => makeButton(args)
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('quiet', true);
  }
}`,...d.parameters?.docs?.source}}};const b=["Primary","PrimaryIcon","Secondary","SecondaryIcon","Quite","QuietIcon"];export{o as Primary,s as PrimaryIcon,d as QuietIcon,u as Quite,c as Secondary,i as SecondaryIcon,b as __namedExportsOrder,x as default};
//# sourceMappingURL=buttons.stories-bd0e6d84.js.map
