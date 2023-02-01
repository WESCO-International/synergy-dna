import{j as e}from"./jsx-runtime-fea6ae26.js";import{M as l}from"./index-36bbc546.js";import{t as i}from"./theme-b3801c18.js";import{C as d}from"./index-0ddfa42e.js";import{u as t}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-e4cb6228.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-81978f50.js";import"./_getTag-61c90daa.js";import"./index-01b7eb35.js";import"./index-356e4a49.js";function c(r){const o=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Developers/Mixins/Color"}),`
`,e.jsx(o.h1,{children:"Color Mixins"}),`
`,e.jsx(o.p,{children:"Synergy provides the following mixins to work with colors."}),`
`,e.jsx(o.h2,{children:"Background Color Mixins"}),`
`,e.jsxs(o.p,{children:["The Synergy Design System supplies three primary background color types: ",e.jsx(o.code,{children:"base"}),", ",e.jsx(o.code,{children:"layer-1"}),", and ",e.jsx(o.code,{children:"layer-2"}),". The ",e.jsx(o.code,{children:"background-color"})," mixin can be utilized to select one of these color types and avoid having to work with the tokens directly."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@mixin background-color {type};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(o.code,{children:"type"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic.color.background).map(([n,s])=>e.jsx(d,{k:n,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-color--docs#background-color-tokens"}))})]})]}),`
`,e.jsx(o.h2,{children:"Foreground Color Mixins"}),`
`,e.jsxs(o.p,{children:["Each background color may require a different foreground color for typography and icons. In addition, there are different levels of foreground color including ",e.jsx(o.code,{children:"default"}),", ",e.jsx(o.code,{children:"subtle"})," and ",e.jsx(o.code,{children:"muted"}),"."]}),`
`,e.jsxs(o.p,{children:["To this end, the ",e.jsx(o.code,{children:"foreground-color"})," mixin can be used to select the correct foreground color given the layer type it sits on."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@mixin foreground-color {type}, {style};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"}),`
`,e.jsx("div",{children:"Default"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(o.code,{children:"type"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic.color.foreground).map(([n,s])=>e.jsx(d,{k:n,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-color--docs#foreground-color-tokens"}))}),`
`,e.jsx("div",{children:e.jsx(o.code,{children:"base"})})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(o.code,{children:"style"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic.color.foreground["on-layer-1"]).map(([n,s])=>e.jsx(d,{k:n,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-color--docs#foreground-color-tokens"}))}),`
`,e.jsx("div",{children:e.jsx(o.code,{children:"default"})})]})]})]})}function X(r={}){const{wrapper:o}=Object.assign({},t(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(c,r)})):c(r)}export{X as default};
//# sourceMappingURL=color-b1385a5d.js.map
