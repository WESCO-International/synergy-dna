import{j as n}from"./jsx-runtime-ccada58e.js";import{M as r,S as d}from"./index-3820782f.js";import{SpanColumns as c}from"./grid.stories-ae0b9090.js";import{u as o}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function e(s){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},o(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Docs/Developers/Mixins/Grid/grid-col-span"}),`
`,n.jsx(i.h1,{children:"grid-col-span"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"grid-col-span"})," mixin can be used to span grid columns."]}),`
`,n.jsx(d,{of:c}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-span-columns">
    <div>col (span 3)</div>
    <div>col (span 9)</div>
    <div>col (span 3)</div>
    <div>col (span 9)</div>
</div>
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`.grid-demo-span-columns {
    display: grid;
    @mixin grid-cols 12;

    & > div {
        &:nth-child(even) {
            @mixin grid-col-span 9;
        }

        &:nth-child(odd) {
            @mixin grid-col-span 3;
        }
    }
}
`})}),`
`,n.jsx(i.h3,{children:"Responsive Column Span"}),`
`,n.jsx(i.p,{children:"The column span can be adjusted by breakpoint using the responsive versions of the column span mixins."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin grid-{breakpoint}-col-span {columns};
`})}),`
`,n.jsxs("div",{className:"table margin-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"breakpoint"})}),`
`,n.jsxs("div",{children:[n.jsx(i.code,{children:"sm"})," ",n.jsx(i.code,{children:"md"})," ",n.jsx(i.code,{children:"lg"})," ",n.jsx(i.code,{children:"xl"})," ",n.jsx(i.code,{children:"xxl"})]})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"columns"})}),`
`,n.jsx("div",{children:"The number of columns to span"})]})]})]})}function R(s={}){const{wrapper:i}=Object.assign({},o(),s.components);return i?n.jsx(i,Object.assign({},s,{children:n.jsx(e,s)})):e(s)}export{R as default};
//# sourceMappingURL=grid-col-span-6c9082d2.js.map
