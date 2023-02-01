import{j as n}from"./jsx-runtime-fea6ae26.js";import{M as d,S as r}from"./index-36bbc546.js";import{SpanColumns as c}from"./grid.stories-ae0b9090.js";import{u as o}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-e4cb6228.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-81978f50.js";import"./_getTag-61c90daa.js";import"./index-01b7eb35.js";import"./index-356e4a49.js";function e(s){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},o(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Developers/Mixins/Grid/grid-col-span"}),`
`,n.jsx(i.h1,{children:"grid-col-span"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"grid-col-span"})," mixin can be used to span grid columns."]}),`
`,n.jsx(r,{of:c}),`
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
`,n.jsx("div",{children:"The number of columns to span"})]})]})]})}function k(s={}){const{wrapper:i}=Object.assign({},o(),s.components);return i?n.jsx(i,Object.assign({},s,{children:n.jsx(e,s)})):e(s)}export{k as default};
//# sourceMappingURL=grid-col-span-852c66e0.js.map
