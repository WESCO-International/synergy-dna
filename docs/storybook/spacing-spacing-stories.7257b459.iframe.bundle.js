"use strict";(self.webpackChunk_WESCO_International_synergy_dna=self.webpackChunk_WESCO_International_synergy_dna||[]).push([[4211],{"./stories/spacing/spacing.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gaps:()=>Gaps,Spacing:()=>Spacing,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/EECOL/theme.json");const __WEBPACK_DEFAULT_EXPORT__={title:"Synergy Design System/Demo/Spacing"},Spacing={title:"Spacing",render:({label,...args})=>Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_0__.lK.W0.Q8.w).map((([key,value])=>`<div class='space'>\n        <div>${key}</div>\n        <div><span style="width:${value}"/></div>\n      </div>`)).join(" ")},Gaps={title:"Gaps",render:({label,...args})=>Object.entries(_dist_EECOL_theme_json__WEBPACK_IMPORTED_MODULE_0__.lK.W0.SG.w).map((([key,value])=>`<div class='space'>\n        <div>${key}</div>\n        <div><span style="width:${value}"/></div>\n      </div>`)).join(" ")};Spacing.parameters={...Spacing.parameters,storySource:{source:"{\n  title: 'Spacing',\n  render: ({\n    label,\n    ...args\n  }) => {\n    const options = Object.entries(theme.semantic.spacing.around.component).map(([key, value]) => {\n      return (/* html */`<div class='space'>\n        <div>${key}</div>\n        <div><span style=\"width:${value}\"/></div>\n      </div>`\n      );\n    }).join(' ');\n    return options;\n  }\n}",...Spacing.parameters?.storySource}},Gaps.parameters={...Gaps.parameters,storySource:{source:"{\n  title: 'Gaps',\n  render: ({\n    label,\n    ...args\n  }) => {\n    const options = Object.entries(theme.semantic.spacing.gap.component).map(([key, value]) => {\n      return (/* html */`<div class='space'>\n        <div>${key}</div>\n        <div><span style=\"width:${value}\"/></div>\n      </div>`\n      );\n    }).join(' ');\n    return options;\n  }\n}",...Gaps.parameters?.storySource}}}}]);