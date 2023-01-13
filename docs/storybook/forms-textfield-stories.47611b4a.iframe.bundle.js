"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[669],{"./stories/forms/textfield.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Required:()=>Required,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Synergy Design System/Forms/Text Field"},Default={title:"Default",args:{label:"Hello"},render:({label,...args})=>'<form>\n              <div class="group">\n                <label for="name">Name</label>\n                <input type="text" id="name" placeholder="Placeholder"/>\n                <span>A clever desciption of this field</span>\n              </div>\n            </form>'},Required={title:"Required",args:{label:"Hello",required:!0},render:({label,required,...args})=>`<form>\n              <div class="group">\n                <label for="name">Name</label>\n                <input type="text" id="name" placeholder="Placeholder" ${required?"required":""}/>\n                <span>${label}</span>\n              </div>\n            </form>`};Default.parameters={...Default.parameters,storySource:{source:'{\n  title: \'Default\',\n  args: {\n    label: \'Hello\'\n  },\n  render: ({\n    label,\n    ...args\n  }) => {\n    // You can either use a function to create DOM elements or use a plain html string!\n    // return `<div>${label}</div>`;\n    return (/* html */`<form>\n              <div class="group">\n                <label for="name">Name</label>\n                <input type="text" id="name" placeholder="Placeholder"/>\n                <span>A clever desciption of this field</span>\n              </div>\n            </form>`\n    );\n  }\n}',...Default.parameters?.storySource}},Required.parameters={...Required.parameters,storySource:{source:'{\n  title: \'Required\',\n  args: {\n    label: \'Hello\',\n    required: true\n  },\n  render: ({\n    label,\n    required,\n    ...args\n  }) => {\n    // You can either use a function to create DOM elements or use a plain html string!\n    // return `<div>${label}</div>`;\n    return (/* html */`<form>\n              <div class="group">\n                <label for="name">Name</label>\n                <input type="text" id="name" placeholder="Placeholder" ${required ? \'required\' : \'\'}/>\n                <span>${label}</span>\n              </div>\n            </form>`\n    );\n  }\n}',...Required.parameters?.storySource}}}}]);