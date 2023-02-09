import{j as e}from"./jsx-runtime-ccada58e.js";import{M as r,S as d}from"./index-3820782f.js";import{Gap as l,GapX as o,GapY as x}from"./grid.stories-ae0b9090.js";import{u as c}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function s(n){const i=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Developers/Mixins/Grid/gap"}),`
`,e.jsx(i.h1,{children:"gap"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap"}),", ",e.jsx(i.code,{children:"gap-x"})," and ",e.jsx(i.code,{children:"gap-y"})," mixins can be used to add spacing between grid/flex columns and rows."]}),`
`,e.jsx(i.h2,{children:"Gap"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap"})," mixin can be used to add uniform spacing between grid columns and rows."]}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-gap">
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
</div>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.grid-demo-gap {
    display: grid;
    @mixin grid-cols 4;
    @mixin gap 2xl;

    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})}),`
`,e.jsx(i.h3,{children:"Responsive Gap"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap"})," can be adjusted by breakpoint using the responsive versions of the ",e.jsx(i.code,{children:"gap"})," mixins."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@mixin gap-{breakpoint} {size};
`})}),`
`,e.jsxs("div",{className:"table margin-bottom",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"breakpoint"})}),`
`,e.jsxs("div",{children:[e.jsx(i.code,{children:"sm"})," ",e.jsx(i.code,{children:"md"})," ",e.jsx(i.code,{children:"lg"})," ",e.jsx(i.code,{children:"xl"})," ",e.jsx(i.code,{children:"xxl"})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"size"})}),`
`,e.jsxs("div",{children:["The gap size, one of ",e.jsx(i.code,{children:"sm"})," ",e.jsx(i.code,{children:"md"})," ",e.jsx(i.code,{children:"lg"})," ",e.jsx(i.code,{children:"xl"})," ",e.jsx(i.code,{children:"xxl"})]})]})]}),`
`,e.jsx(i.h2,{children:"Gap X"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap-x"})," mixin can be used to add spacing between grid columns."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-gap-x">
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
</div>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.grid-demo-gap-x {
    display: grid;
    @mixin grid-cols 4;
    @mixin gap-x 2xl;
    
    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})}),`
`,e.jsx(i.h3,{children:"Responsive Gap X"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap-x"})," can be adjusted by breakpoint using the responsive versions of the ",e.jsx(i.code,{children:"gap-x"})," mixins."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@mixin gap-{breakpoint}-x {size};
`})}),`
`,e.jsxs("div",{className:"table margin-bottom",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"breakpoint"})}),`
`,e.jsxs("div",{children:[e.jsx(i.code,{children:"sm"})," ",e.jsx(i.code,{children:"md"})," ",e.jsx(i.code,{children:"lg"})," ",e.jsx(i.code,{children:"xl"})," ",e.jsx(i.code,{children:"xxl"})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"size"})}),`
`,e.jsxs("div",{children:["The gap size, one of ",e.jsx(i.code,{children:"sm"})," ",e.jsx(i.code,{children:"md"})," ",e.jsx(i.code,{children:"lg"})," ",e.jsx(i.code,{children:"xl"})," ",e.jsx(i.code,{children:"xxl"})]})]})]}),`
`,e.jsx(i.h2,{children:"Gap Y"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap-y"})," mixin can be used to add spacing between grid rows."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-gap-y">
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
</div>
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.grid-demo-gap-y {
    display: grid;
    @mixin grid-cols 4;
    @mixin gap-y 2xl;
    
    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})}),`
`,e.jsx(i.h3,{children:"Responsive Gap Y"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"gap-y"})," can be adjusted by breakpoint using the responsive versions of the ",e.jsx(i.code,{children:"gap-y"})," mixins."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@mixin gap-{breakpoint}-y {size};
`})}),`
`,e.jsxs("div",{className:"table margin-bottom",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"breakpoint"})}),`
`,e.jsxs("div",{children:[e.jsx(i.code,{children:"sm"})," ",e.jsx(i.code,{children:"md"})," ",e.jsx(i.code,{children:"lg"})," ",e.jsx(i.code,{children:"xl"})," ",e.jsx(i.code,{children:"xxl"})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"size"})}),`
`,e.jsxs("div",{children:["The gap size, one of ",e.jsx(i.code,{children:"sm"})," ",e.jsx(i.code,{children:"md"})," ",e.jsx(i.code,{children:"lg"})," ",e.jsx(i.code,{children:"xl"})," ",e.jsx(i.code,{children:"xxl"})]})]})]})]})}function C(n={}){const{wrapper:i}=Object.assign({},c(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{C as default};
//# sourceMappingURL=gap-5ac92259.js.map
