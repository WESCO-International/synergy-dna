function p(r){return r.charAt(0).toUpperCase()+r.slice(1)}function t(r,e){const n=document.createElement("p");n.classList.add("button-container");let d;return e&&(d=`<span class='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>`),n.innerHTML=`<a href="javascript:void(0)" title=${r} class="button ${r}">${d||""}${p(r)}</a>`,n}const m={title:"Synergy Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}}},o={render:(r,e)=>t("primary")},s={render:(r,e)=>t("primary",!0)},a={render:(r,e)=>t("secondary")},c={render:(r,e)=>t("secondary",!0)},u={render:(r,e)=>t("quiet")},i={render:(r,e)=>t("quiet",!0)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('primary');
    return button;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('primary', true);
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('secondary');
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('secondary', true);
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('quiet');
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    return createButton('quiet', true);
  }
}`,...i.parameters?.docs?.source}}};const l=["Primary","PrimaryIcon","Secondary","SecondaryIcon","Quiet","QuietIcon"];export{o as Primary,s as PrimaryIcon,u as Quiet,i as QuietIcon,a as Secondary,c as SecondaryIcon,l as __namedExportsOrder,m as default};
//# sourceMappingURL=buttons.stories-0f75c5af.js.map
