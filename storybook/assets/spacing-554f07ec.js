import{j as i}from"./jsx-runtime-ccada58e.js";import{M as c}from"./index-3820782f.js";import{t as d}from"./theme-6bb2ed99.js";import{C as a}from"./index-c4b7e6b1.js";import{u as o}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function t(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},o(),r.components);return i.jsxs(i.Fragment,{children:[i.jsx(c,{title:"Docs/Developers/Mixins/Spacing"}),`
`,i.jsx(n.h1,{children:"Spacing Mixins"}),`
`,i.jsx(n.p,{children:"Synergy provides the following mixins to work with paddings, margin and gutters."}),`
`,i.jsx(n.h2,{children:"Padding Mixins"}),`
`,i.jsxs(n.p,{children:["Each mixins includes a required ",i.jsx(n.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),`
`,i.jsx(n.h3,{children:"Mixins"}),`
`,i.jsx(n.p,{children:"Set the padding on all sides (padding-top, padding-right, padding-bottom, padding-left)."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding {size};
`})}),`
`,i.jsx(n.p,{children:"Set the padding of an individual side."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding-top {size};

@mixin padding-bottom {size};

@mixin padding-left {size};

@mixin padding-right {size};
`})}),`
`,i.jsx(n.p,{children:"Set the vertical or horizontal padding."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding-vertical {size};

@mixin padding-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Size Parameter"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(d.semantic.spacing.around.component).map(([e,s])=>i.jsx(a,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs"}))})]})]}),`
`,i.jsx(n.h4,{children:"Padding by breakpoint"}),`
`,i.jsx(n.p,{children:"Setting the padding based on a breakpoint is also supported."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding-{breakpoint} {size};

@mixin padding-{breakpoint}-top {size};

@mixin padding-{breakpoint}-bottom {size};

@mixin padding-{breakpoint}-left {size};

@mixin padding-{breakpoint}-right {size};

@mixin padding-{breakpoint}-vertical {size};

@mixin padding-{breakpoint}-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Parameters"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"breakpoint"})}),`
`,i.jsx("div",{children:Object.entries(d.semantic.size.breakpoints).map(([e,s])=>i.jsx(a,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs"}))})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(d.semantic.spacing.around.component).map(([e,s])=>i.jsx(a,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs"}))})]})]}),`
`,i.jsx(n.h2,{children:"Margin Mixins"}),`
`,i.jsx(n.p,{children:"Synergy provides the following mixins to work with margins."}),`
`,i.jsxs(n.p,{children:["Each mixins includes a required ",i.jsx(n.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),`
`,i.jsx(n.h3,{children:"Mixins"}),`
`,i.jsx(n.p,{children:"Set the margin on all sides (margin-top, margin-right, margin-bottom, padding-left)."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin {size};
`})}),`
`,i.jsx(n.p,{children:"Set the margin of an individual side."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin-top {size};

@mixin margin-bottom {size};

@mixin margin-left {size};

@mixin margin-right {size};
`})}),`
`,i.jsx(n.p,{children:"Set the vertical or horizontal margin."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin-vertical {size};

@mixin margin-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Size Parameter"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(d.semantic.spacing.around.component).map(([e,s])=>i.jsx(a,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs"}))})]})]}),`
`,i.jsx(n.h4,{children:"Margin by breakpoint"}),`
`,i.jsx(n.p,{children:"Setting the margin based on a breakpoint is also supported."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin-{breakpoint} {size};

@mixin margin-{breakpoint}-top {size};

@mixin margin-{breakpoint}-bottom {size};

@mixin margin-{breakpoint}-left {size};

@mixin margin-{breakpoint}-right {size};

@mixin margin-{breakpoint}-vertical {size};

@mixin margin-{breakpoint}-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Parameters"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"breakpoint"})}),`
`,i.jsx("div",{children:Object.entries(d.semantic.size.breakpoints).map(([e,s])=>i.jsx(a,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs"}))})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(d.semantic.spacing.around.component).map(([e,s])=>i.jsx(a,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs"}))})]})]})]})}function q(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?i.jsx(n,Object.assign({},r,{children:i.jsx(t,r)})):t(r)}export{q as default};
//# sourceMappingURL=spacing-554f07ec.js.map
