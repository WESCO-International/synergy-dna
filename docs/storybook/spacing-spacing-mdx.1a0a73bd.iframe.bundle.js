"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[8552,916],{"./stories/spacing/spacing.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_spacing_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/spacing/spacing.stories.js");__webpack_require__("./dist/EECOL/theme.json"),__webpack_require__("./stories/util/index.jsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Synergy Design System/Demo/Spacing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"spacing-and-gaps",children:"Spacing and Gaps"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Synergy defines spacing values that can be used across all components and patterns and helps in maintain consistency within the design system. These tokens can be used to define padding, margins, gutters, and other spacing elements that are applied consistently."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Due to size considerations, CSS Utility classes do not encompass spacings and gaps. It is advisable to use the mixins or tokens directly."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"spacing",children:"Spacing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{of:_spacing_stories_js__WEBPACK_IMPORTED_MODULE_2__.Spacing}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"gaps",children:"Gaps"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{of:_spacing_stories_js__WEBPACK_IMPORTED_MODULE_2__.Gaps})]})}}},"./stories/spacing/spacing.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gaps:()=>Gaps,Spacing:()=>Spacing,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/EECOL/theme.json");const __WEBPACK_DEFAULT_EXPORT__={title:"Synergy Design System/Demo/Spacing"},Spacing={title:"Spacing",render:({label,...args})=>Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_0__.lK.W0.Q8.w).map((([key,value])=>`<div class='space'>\n        <div>${key}</div>\n        <div><span style="width:${value}"/></div>\n      </div>`)).join(" ")},Gaps={title:"Gaps",render:({label,...args})=>Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_0__.lK.W0.SG.w).map((([key,value])=>`<div class='space'>\n        <div>${key}</div>\n        <div><span style="width:${value}"/></div>\n      </div>`)).join(" ")};Spacing.parameters={...Spacing.parameters,storySource:{source:"{\n  title: 'Spacing',\n  render: ({\n    label,\n    ...args\n  }) => {\n    const options = Object.entries(theme.semantic.spacing.around.component).map(([key, value]) => {\n      return (/* html */`<div class='space'>\n        <div>${key}</div>\n        <div><span style=\"width:${value}\"/></div>\n      </div>`\n      );\n    }).join(' ');\n    return options;\n  }\n}",...Spacing.parameters?.storySource}},Gaps.parameters={...Gaps.parameters,storySource:{source:"{\n  title: 'Gaps',\n  render: ({\n    label,\n    ...args\n  }) => {\n    const options = Object.entries(theme.semantic.spacing.gap.component).map(([key, value]) => {\n      return (/* html */`<div class='space'>\n        <div>${key}</div>\n        <div><span style=\"width:${value}\"/></div>\n      </div>`\n      );\n    }).join(' ');\n    return options;\n  }\n}",...Gaps.parameters?.storySource}}},"./stories/util/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EK:()=>Code,HG:()=>TokenRow,VC:()=>GroupColorItem,no:()=>TokenList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function GroupColorItem({title,tokenGroup,tokenName}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,{key:title,title,subtitle:tokenName,colors:Object.entries(tokenGroup).reduce(((acc,[key,value])=>"string"==typeof value&&(value.match(/^#/)||value.match(/^rgb/)||key.match(/color/i))?{...acc,[key]:value}:acc),{})})}function TokenList({tokens,prefix}){return Object.entries(tokens).map((([k,value])=>{if("typography"!==k)return"object"==typeof value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenList,{k,tokens:value,prefix:`${prefix}-${k}`}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenRow,{k,value,prefix:`${prefix}-${k}`})}))}function TokenRow({k,value,prefix}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,prefix),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"button secondary small",onClick:()=>navigator.clipboard.writeText(`${prefix}`)},"Copy Token")))}function Code({k,value,url}){return window.location.href.includes("github.io")&&(url=`synergy-dna/docs/storybook${url}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",{title:value},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url},k))}}}]);