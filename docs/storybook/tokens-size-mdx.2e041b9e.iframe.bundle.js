"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[791],{"./stories/tokens/size.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/util/index.jsx"),_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/EECOL/theme.json");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"Synergy Design System/Developer Docs/Tokens/Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Synergy Design System provides CSS & mixins that is pre-configured to utilize the tokens below. They should not be used for any purpose other than the element or semantic meaning they where created for."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"section-size-tokens",children:"Section Size Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table token margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Token"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Copy"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_2__.HG,{k:"max-width",value:_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_3__.lK.dp.qi.R,prefix:"--sds-semantic-size-section"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"default-content-tokens",children:"Default Content Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table token margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Token"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Copy"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_2__.HG,{k:"margin-bottom",value:_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_3__.lK.dp.YG.L,prefix:"--sds-semantic-size-default-content-wrapper"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"breakpoint-tokens",children:"Breakpoint Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table token margin-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Token"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Copy"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_2__.no,{tokens:_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_3__.lK.dp.AV,prefix:"--sds-semantic-size-breakpoints"})]})]})}}},"./stories/util/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EK:()=>Code,HG:()=>TokenRow,VC:()=>GroupColorItem,no:()=>TokenList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function GroupColorItem({title,tokenGroup,tokenName}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,{key:title,title,subtitle:tokenName,colors:Object.entries(tokenGroup).reduce(((acc,[key,value])=>"string"==typeof value&&(value.match(/^#/)||value.match(/^rgb/)||key.match(/color/i))?{...acc,[key]:value}:acc),{})})}function TokenList({tokens,prefix}){return Object.entries(tokens).map((([k,value])=>{if("typography"!==k)return"object"==typeof value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenList,{k,tokens:value,prefix:`${prefix}-${k}`}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenRow,{k,value,prefix:`${prefix}-${k}`})}))}function TokenRow({k,value,prefix}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,prefix),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"button secondary small",onClick:()=>navigator.clipboard.writeText(`${prefix}`)},"Copy Token")))}function Code({k,value,url}){return window.location.href.includes("github.io")&&(url=`synergy-dna/docs/storybook${url}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",{title:value},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url},k))}}}]);