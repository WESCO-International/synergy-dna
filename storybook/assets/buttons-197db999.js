import{j as n}from"./jsx-runtime-ccada58e.js";import{M as a,S as o}from"./index-3820782f.js";import{Primary as c,Secondary as i,PrimaryIcon as l}from"./buttons.stories-bd0e6d84.js";import{u as r}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function s(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",h4:"h4",pre:"pre"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Docs/Developers/Buttons"}),`
`,n.jsx(e.h1,{children:"Buttons"}),`
`,n.jsx(e.p,{children:"Buttons can be created one of two ways. By an author in a document or programatically using javascript by a developer."}),`
`,n.jsx(e.h2,{children:"Buttons created in javascript"}),`
`,n.jsxs(e.p,{children:["To get button styling two classes are required, ",n.jsx(e.code,{children:"button"})," and one of ",n.jsx(e.code,{children:"primary"}),", ",n.jsx(e.code,{children:"secondary"})," or ",n.jsx(e.code,{children:"quiet"}),". These classes can be used on an ",n.jsx(e.code,{children:"a"})," or a ",n.jsx(e.code,{children:"button"})," tag. The ",n.jsx(e.code,{children:"button-container"})," wrapper around the button adds margins, it is added as part of the franklin decoration process so it is best to include it when buttons are created programatically."]}),`
`,n.jsx(e.h3,{children:"Primary Buttons"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
  <a title="primary" class="button primary">Primary</a>
</p>
`})}),`
`,n.jsx(e.h3,{children:"Secondary Buttons"}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
  <a title="secondary" class="button secondary">Secondary</a>
</p>
`})}),`
`,n.jsx(e.h3,{children:"Quiet Buttons"}),`
`,n.jsx(o,{of:void 0}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
  <a title="quiet" class="button quiet">Quiet</a>
</p>
`})}),`
`,n.jsx(e.h2,{children:"Icon Buttons created in javascript"}),`
`,n.jsxs(e.p,{children:["To include an icon in a button you can use the ",n.jsx(e.code,{children:"decorateIcons"})," function to decorate a ",n.jsx(e.code,{children:"span"})," element as an icon. The ",n.jsx(e.code,{children:"decorateIcons"})," function will load the icon form the ",n.jsx(e.code,{children:"icons"})," folder. In the example below the ",n.jsx(e.code,{children:"icon-plus"})," class tells ",n.jsx(e.code,{children:"decorateIcons"})," to look for ",n.jsx(e.code,{children:"plus.svg"})," in the ",n.jsx(e.code,{children:"/icons"})," directory and load it into the span."]}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
  <a title="primary" class="button primary"><span class="icon icon-plus"></span>Primary</a>
</p>
`})}),`
`,n.jsxs(e.p,{children:["The HTMLElement above should then be passed into the ",n.jsx(e.code,{children:"decorateIcons"})," function to load the icon inside the span. Below is a full example."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { decorateIcons } from 'lib-franklin.js';

const container = document.createElement('p');
container.classList.add('button-container');
container.innerHTML = \`<a title="primary" class="button primary"><span class='icon icon-plus'></span>Primary</a>\`;
decorateIcons(container);
`})})]})}function q(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{q as default};
//# sourceMappingURL=buttons-197db999.js.map
