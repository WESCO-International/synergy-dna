import{j as n}from"./jsx-runtime-ccada58e.js";import{M as o,S as d}from"./index-3820782f.js";import{SpanRows as c}from"./grid.stories-ae0b9090.js";import{u as e}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function r(s){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},e(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Docs/Developers/Mixins/Grid/grid-row-span"}),`
`,n.jsx(i.h1,{children:"grid-row-span"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"grid-row-span"})," mixin can be used to span grid row."]}),`
`,n.jsx(d,{of:c}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-span-rows">
    <div>col (row 3)</div>
    <div>col (span 9)</div>
    <div>col (span 9)</div>
    <div>col (span 9)</div>
</div>
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`.grid-demo-span-rows {
    display: grid;
    @mixin grid-cols 12;

    & > div {
        &:first-of-type {
            @mixin grid-row-span 3;
        }

        &:not(:first-of-type) {
            @mixin grid-col-span 11;
        }
    }
}
`})}),`
`,n.jsx(i.h3,{children:"Responsive Row Span"}),`
`,n.jsx(i.p,{children:"The column span can be adjusted by breakpoint using the responsive versions of the row span mixins."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin grid-{breakpoint}-row-span {rows};
`})}),`
`,n.jsxs("div",{className:"table margin-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"breakpoint"})}),`
`,n.jsxs("div",{children:[n.jsx(i.code,{children:"sm"})," ",n.jsx(i.code,{children:"md"})," ",n.jsx(i.code,{children:"lg"})," ",n.jsx(i.code,{children:"xl"})," ",n.jsx(i.code,{children:"xxl"})]})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"rows"})}),`
`,n.jsx("div",{children:"The number of rows to span"})]})]})]})}function T(s={}){const{wrapper:i}=Object.assign({},e(),s.components);return i?n.jsx(i,Object.assign({},s,{children:n.jsx(r,s)})):r(s)}export{T as default};
//# sourceMappingURL=grid-row-span-a1ef4163.js.map
