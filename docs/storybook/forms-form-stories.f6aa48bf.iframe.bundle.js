"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[718],{"./stories/forms/form.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checkbox:()=>Checkbox,Radio:()=>Radio,Select:()=>Select,Switch:()=>Switch,TextArea:()=>TextArea,TextField:()=>TextField,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Synergy Design System/Forms"},TextField={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label,required,disabled,help,...args})=>`<form>\n              <div class="group">\n                <label for="name">${label}</label>\n                <input type="text" id="name" placeholder="Placeholder" ${required?"required":""} ${disabled?"disabled":""}/>\n                <span>${help}</span>\n              </div>\n            </form>`},TextArea={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label,required,disabled,help,...args})=>`<form>\n              <div class="group">\n                <label for="name">${label}</label>\n                <textarea type="text" id="name" placeholder="Placeholder" ${required?"required":""}  ${disabled?"disabled":""}></textarea>\n                <span>${help}</span>\n              </div>\n            </form>`},Select={args:{label:"Favorite Car Manufacturer",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label,required,disabled,help,value,...args})=>`<form>\n              <div class="group">\n                <label for="car">${label}</label>\n                <div class="select">\n                  <select id="car" ${required?"required":""}  ${disabled?"disabled":""}>\n                    <option value="" disabled selected hidden>Select car:</option>\n                    <option value="1">Audi</option>\n                    <option value="2">BMW</option>\n                    <option value="3">Citroen</option>\n                    <option value="4">Ford</option>\n                    <option value="5">Honda</option>\n                    <option value="6">Jaguar</option>\n                    <option value="7">Land Rover</option>\n                    <option value="8">Mercedes</option>\n                    <option value="9">Mini</option>\n                    <option value="10">Nissan</option>\n                    <option value="11">Toyota</option>\n                    <option value="12">Volvo</option>\n                  </select>\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`},Checkbox={args:{label:"Agree to Terms",value:"Completed Task",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label,required,checked,disabled,help,value,...args})=>`<form>\n              <div class="group">\n                <label for="terms">${label}</label>\n                <div>\n                  <input type="checkbox" id="terms" ${checked?"checked":""}  ${required?"required":""}  ${disabled?"disabled":""} onclick="(event) => event.target.checked = true">\n                  <label for="terms">${value}</label>\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`},Switch={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label,required,checked,disabled,help,value,...args})=>`<form>\n              <div class="group">\n                <label for="wifi">${label}</label>\n                <div>\n                  <input type="checkbox" id="wifi" class="switch" ${checked?"checked":""} ${required?"required":""} ${disabled?"disabled":""}>\n                  <label for="wifi">${value}</label>\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`},Radio={args:{label:"Meal Preference",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label,required,checked,disabled,help,values,...args})=>`<form>\n              <div class="group">\n                <label for="meal">${label}</label>\n                <div>\n                  ${values.map((value=>`\n                              <input id="${value}" type="radio" name="meal" ${checked?"checked":""} ${required?"required":""}  ${disabled?"disabled":""}>\n                              <label for="${value}">${value}</label>\n                          `)).join(" ")}\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`};TextField.parameters={...TextField.parameters,storySource:{source:"{\n  args: {\n    label: 'First Name',\n    help: 'A clever desciption of this field',\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    disabled,\n    help,\n    ...args\n  }) => {\n    // You can either use a function to create DOM elements or use a plain html string!\n    // return `<div>${label}</div>`;\n    return (/* html */`<form>\n              <div class=\"group\">\n                <label for=\"name\">${label}</label>\n                <input type=\"text\" id=\"name\" placeholder=\"Placeholder\" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}/>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}",...TextField.parameters?.storySource}},TextArea.parameters={...TextArea.parameters,storySource:{source:"{\n  args: {\n    label: 'First Name',\n    help: 'A clever desciption of this field',\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    disabled,\n    help,\n    ...args\n  }) => {\n    return (/* html */`<form>\n              <div class=\"group\">\n                <label for=\"name\">${label}</label>\n                <textarea type=\"text\" id=\"name\" placeholder=\"Placeholder\" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}></textarea>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}",...TextArea.parameters?.storySource}},Select.parameters={...Select.parameters,storySource:{source:'{\n  args: {\n    label: \'Favorite Car Manufacturer\',\n    value: \'Airplane Mode\',\n    help: \'A clever desciption of this field\',\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    disabled,\n    help,\n    value,\n    ...args\n  }) => {\n    return (/* html */`<form>\n              <div class="group">\n                <label for="car">${label}</label>\n                <div class="select">\n                  <select id="car" ${required ? \'required\' : \'\'}  ${disabled ? \'disabled\' : \'\'}>\n                    <option value="" disabled selected hidden>Select car:</option>\n                    <option value="1">Audi</option>\n                    <option value="2">BMW</option>\n                    <option value="3">Citroen</option>\n                    <option value="4">Ford</option>\n                    <option value="5">Honda</option>\n                    <option value="6">Jaguar</option>\n                    <option value="7">Land Rover</option>\n                    <option value="8">Mercedes</option>\n                    <option value="9">Mini</option>\n                    <option value="10">Nissan</option>\n                    <option value="11">Toyota</option>\n                    <option value="12">Volvo</option>\n                  </select>\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}',...Select.parameters?.storySource}},Checkbox.parameters={...Checkbox.parameters,storySource:{source:"{\n  args: {\n    label: 'Agree to Terms',\n    value: 'Completed Task',\n    help: 'A clever desciption of this field',\n    checked: false,\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    checked,\n    disabled,\n    help,\n    value,\n    ...args\n  }) => {\n    return (/* html */`<form>\n              <div class=\"group\">\n                <label for=\"terms\">${label}</label>\n                <div>\n                  <input type=\"checkbox\" id=\"terms\" ${checked ? 'checked' : ''}  ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''} onclick=\"(event) => event.target.checked = true\">\n                  <label for=\"terms\">${value}</label>\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}",...Checkbox.parameters?.storySource}},Switch.parameters={...Switch.parameters,storySource:{source:"{\n  args: {\n    label: 'Wifi Settings',\n    value: 'Airplane Mode',\n    help: 'A clever desciption of this field',\n    checked: false,\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    checked,\n    disabled,\n    help,\n    value,\n    ...args\n  }) => {\n    return (/* html */`<form>\n              <div class=\"group\">\n                <label for=\"wifi\">${label}</label>\n                <div>\n                  <input type=\"checkbox\" id=\"wifi\" class=\"switch\" ${checked ? 'checked' : ''} ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}>\n                  <label for=\"wifi\">${value}</label>\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}",...Switch.parameters?.storySource}},Radio.parameters={...Radio.parameters,storySource:{source:"{\n  args: {\n    label: 'Meal Preference',\n    values: ['Beef', 'Chicken', 'Fish'],\n    help: 'A clever desciption of this field',\n    checked: false,\n    required: false,\n    disabled: false\n  },\n  render: ({\n    label,\n    required,\n    checked,\n    disabled,\n    help,\n    values,\n    ...args\n  }) => {\n    return (/* html */`<form>\n              <div class=\"group\">\n                <label for=\"meal\">${label}</label>\n                <div>\n                  ${values.map(value => {\n        return (/* html */`\n                              <input id=\"${value}\" type=\"radio\" name=\"meal\" ${checked ? 'checked' : ''} ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>\n                              <label for=\"${value}\">${value}</label>\n                          `\n        );\n      }).join(' ')}\n                </div>\n                <span>${help}</span>\n              </div>\n            </form>`\n    );\n  }\n}",...Radio.parameters?.storySource}}}}]);