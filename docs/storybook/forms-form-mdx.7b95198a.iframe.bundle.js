"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[227,669],{"./stories/forms/form.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_textfield_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/forms/textfield.stories.js"),_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/util/index.jsx"),_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/EECOL/theme.json");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h4:"h4"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Synergy Design System/Forms/Docs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"forms",children:"Forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"HTML Forms are widely used in websites and web applications to collect information from users."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Forms are composed of multiple elements which can accept input, such as checkboxes, text fields, and radio buttons. The information can either be submitted to the server or used in the client-side script."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In Franklin, HTML Forms can be authored in a spreadsheet or manually created by developers using javascript. The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.hlx.live/developer/forms",target:"_blank",rel:"nofollow noopener noreferrer",children:"Franklin Forms Service"})," can be used to persist form data in a spreadsheet."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"textfield",children:"TextField"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Text fields allow users to enter free form text data such as names, email addresses and other text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{of:_textfield_stories__WEBPACK_IMPORTED_MODULE_2__.TextField}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"textfield-tokens",children:"TextField Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table token",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Token"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Copy"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.no,{tokens:_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_4__.wU.o,prefix:"--sds-component-text-field"})]})]})}}},"./stories/forms/textfield.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextField:()=>TextField,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Synergy Design System/Forms"},TextField={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label,required,disabled,help,...args})=>`<form>\n              <div class="group">\n                <label for="name">${label}</label>\n                <input type="text" id="name" placeholder="Placeholder" ${required?"required":""} ${disabled?"disabled":""}/>\n                <span>${help}</span>\n              </div>\n            </form>`};TextField.parameters={...TextField.parameters,storySource:{source:"{\n  args: {\n    label: 'First Name',\n    help: 'A clever desciption of this field',\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    disabled,\n    help,\n    ...args\n  }) => {\n    // You can either use a function to create DOM elements or use a plain html string!\n    // return `<div>${label}</div>`;\n    return (/* html */`<form>\n              <div class=\"group\">\n                <label for=\"name\">${label}</label>\n                <input type=\"text\" id=\"name\" placeholder=\"Placeholder\" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}/>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}",...TextField.parameters?.storySource}}},"./stories/util/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HG:()=>TokenRow,VC:()=>GroupColorItem,no:()=>TokenList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function GroupColorItem({title,tokenGroup,tokenName}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,{key:title,title,subtitle:tokenName,colors:Object.entries(tokenGroup).reduce(((acc,[key,value])=>"string"==typeof value&&(value.match(/^#/)||value.match(/^rgb/)||key.match(/color/i))?{...acc,[key]:value}:acc),{})})}function TokenList({tokens,prefix}){return Object.entries(tokens).map((([k,value])=>{if("typography"!==k)return"object"==typeof value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenList,{k,tokens:value,prefix:`${prefix}-${k}`}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(TokenRow,{k,value,prefix:`${prefix}-${k}`})}))}function TokenRow({k,value,prefix}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,prefix),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"button secondary small",onClick:()=>navigator.clipboard.writeText(`${prefix}`)},"Copy Token")))}}}]);