import{j as e}from"./jsx-runtime-ccada58e.js";import{M as o}from"./index-3820782f.js";import"./index-f1f749bf.js";import{u as t}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./_commonjsHelpers-042e6b4d.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function i(n){const s=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",pre:"pre",code:"code",h2:"h2"},t(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Developers/Breakpoints"}),`
`,e.jsx(s.h1,{children:"Breakpoint Media Queries"}),`
`,e.jsxs(s.p,{children:["Synergy user ",e.jsx(s.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media",children:"custom media queries"})," in CSS following the ",e.jsx(s.a,{href:"https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media",children:"Custom Media Specification"}),"."]}),`
`,e.jsx(s.p,{children:"The media queries available may depend on the brand."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Due to limitation with CSS variables in Custom Media Queries these values are hardcoded and need to be managed manually."}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@custom-media --sds-screen-xs (max-width: 400px);
@custom-media --sds-screen-sm (min-width: 576px);
@custom-media --sds-screen-md (min-width: 768px);
@custom-media --sds-screen-lg (min-width: 992px);
@custom-media --sds-screen-xl (min-width: 1200px);
@custom-media --sds-screen-xxl (min-width: 1440px);
`})}),`
`,e.jsx(s.h2,{children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@media (--sds-screen-md) {
	/* styles for medium viewport */
}
`})}),`
`,e.jsxs(s.p,{children:["Media queries can also be nested using PostCSS. In the example below the ",e.jsx(s.code,{children:"section"})," selector uses the mobile padding on small screen but the desktop padding on the medium screens (or higher)."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.section {
	padding: var(--sds-semantic-spacing-section-mobile-padding-y) var(--sds-semantic-spacing-section-mobile-padding-x);

	@media (--sds-screen-sm) {
		padding: var(--sds-semantic-spacing-section-desktop-padding-y) var(--sds-semantic-spacing-section-desktop-padding-x);
	}
}
`})})]})}function D(n={}){const{wrapper:s}=Object.assign({},t(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{D as default};
//# sourceMappingURL=breakpoints-6ff1a868.js.map
