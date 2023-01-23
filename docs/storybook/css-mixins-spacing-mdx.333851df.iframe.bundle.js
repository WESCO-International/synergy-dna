"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[2047],{"./stories/css-mixins/spacing.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/EECOL/theme.json"),_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/util/index.jsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"Synergy Design System/Developer Docs/Mixins/Spacing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"spacing-mixins",children:"Spacing Mixins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Synergy provides the following mixins to work with paddings, margin and gutters."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"padding-mixins",children:"Padding Mixins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Each mixins includes a required ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"mixins",children:"Mixins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Set the padding on all sides (padding-top, padding-right, padding-bottom, padding-left)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin padding {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Set the padding of an individual side."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin padding-top {size};\n\n@mixin padding-bottom {size};\n\n@mixin padding-left {size};\n\n@mixin padding-right {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Set the vertical or horizontal padding."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin padding-vertical {size};\n\n@mixin padding-horizontal {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"size-parameter",children:"Size Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Options"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__.lK.W0.Q8.w).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.EK,{k,value:v,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"})))})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"padding-by-breakpoint",children:"Padding by breakpoint"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Setting the padding based on a breakpoint is also supported."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin padding-{breakpoint} {size};\n\n@mixin padding-{breakpoint}-top {size};\n\n@mixin padding-{breakpoint}-bottom {size};\n\n@mixin padding-{breakpoint}-left {size};\n\n@mixin padding-{breakpoint}-right {size};\n\n@mixin padding-{breakpoint}-vertical {size};\n\n@mixin padding-{breakpoint}-horizontal {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"parameters",children:"Parameters"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Options"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breakpoint"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__.lK.dp.AV).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.EK,{k,value:v,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-size--docs#breakpoint-tokens"})))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__.lK.W0.Q8.w).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.EK,{k,value:v,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"})))})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"margin-mixins",children:"Margin Mixins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Synergy provides the following mixins to work with margins."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Each mixins includes a required ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"mixins-1",children:"Mixins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Set the margin on all sides (margin-top, margin-right, margin-bottom, padding-left)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin margin {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Set the margin of an individual side."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin margin-top {size};\n\n@mixin margin-bottom {size};\n\n@mixin margin-left {size};\n\n@mixin margin-right {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Set the vertical or horizontal margin."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin margin-vertical {size};\n\n@mixin margin-horizontal {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"size-parameter-1",children:"Size Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Options"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__.lK.W0.Q8.w).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.EK,{k,value:v,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"})))})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"margin-by-breakpoint",children:"Margin by breakpoint"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Setting the margin based on a breakpoint is also supported."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin margin-{breakpoint} {size};\n\n@mixin margin-{breakpoint}-top {size};\n\n@mixin margin-{breakpoint}-bottom {size};\n\n@mixin margin-{breakpoint}-left {size};\n\n@mixin margin-{breakpoint}-right {size};\n\n@mixin margin-{breakpoint}-vertical {size};\n\n@mixin margin-{breakpoint}-horizontal {size};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Options"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breakpoint"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__.lK.dp.AV).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.EK,{k,value:v,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-size--docs#breakpoint-tokens"})))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_2__.lK.W0.Q8.w).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.EK,{k,value:v,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"})))})]})]})]})}}},"./stories/util/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EK:()=>Code,HG:()=>TokenRow,VC:()=>GroupColorItem,no:()=>TokenList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function GroupColorItem({title,tokenGroup,tokenName}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,{key:title,title,subtitle:tokenName,colors:Object.entries(tokenGroup).reduce(((acc,[key,value])=>"string"==typeof value&&(value.match(/^#/)||value.match(/^rgb/)||key.match(/color/i))?{...acc,[key]:value}:acc),{})})}function TokenList({tokens,prefix}){return Object.entries(tokens).map((([k,value])=>{if("typography"!==k)return"object"==typeof value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenList,{k,tokens:value,prefix:`${prefix}-${k}`}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenRow,{k,value,prefix:`${prefix}-${k}`})}))}function TokenRow({k,value,prefix}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,prefix),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"button secondary small",onClick:()=>navigator.clipboard.writeText(`${prefix}`)},"Copy Token")))}function Code({k,value,url}){return window.location.href.includes("github.io")&&(url=`synergy-dna/docs/storybook${url}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",{title:value},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url},k))}}}]);