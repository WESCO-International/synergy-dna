import{j as e}from"./jsx-runtime-ccada58e.js";import{M as s}from"./index-3820782f.js";import{u as t}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-50df77d3.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./index-029c8be7.js";import"./_baseToString-30508fa8.js";import"./_getTag-5d4511eb.js";import"./isEqual-81c992b2.js";import"./index-1fe2e1f1.js";import"./uniq-efb824e2.js";import"./index-356e4a49.js";function i(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",pre:"pre",code:"code",a:"a",blockquote:"blockquote",ul:"ul",li:"li"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Developers/Mixins/Introduction"}),`
`,e.jsx(n.h1,{children:"CSS Mixins"}),`
`,e.jsx(n.p,{children:"CSS Mixins offer an alternative approach to working with the Synergy Design System. They are an integral part of the systems construction, but they are not a requirement to utilize the system."}),`
`,e.jsx(n.p,{children:"The goal is to speed up development when working with the system and to avoid having to remember each token name in the system. To address this issue, there are two solutions offered: CSS Utility classes and Mixins."}),`
`,e.jsx(n.h2,{children:"What are CSS Mixins?"}),`
`,e.jsx(n.p,{children:"Mixins are a reusable piece of code which can be leveraged throughout a website’s CSS. Mixins allow developers to manage code more efficiently and ensure their code is DRY (Don't Repeat Yourself) by separating complex style declarations into small manageable functions, and eliminate unnecessary redundancy while maximizing code maintainability."}),`
`,e.jsx(n.p,{children:"Having all the core patterns of the design system codified in mixins helps create a consistent and unified look and feel for the product. For design and development teams it not only helps ensure consistency but also leads to faster development time by avoiding the need to write custom style declarations every time."}),`
`,e.jsx(n.h2,{children:"Advantage of using CSS Mixins"}),`
`,e.jsx(n.p,{children:"Below are a list of some benefits to using CSS Mixins."}),`
`,e.jsx(n.h3,{children:"Improved code efficiency and readability"}),`
`,e.jsx(n.p,{children:"CSS Mixins promote uniformity between styles while reducing the amount of code you have to write and eliminating the need to memorize token names."}),`
`,e.jsx(n.h4,{children:"Example"}),`
`,e.jsx(n.p,{children:"Let say we have a design for a card that requires large padding around it."}),`
`,e.jsx(n.p,{children:"In pure CSS we would require the name of the large padding token to do this."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.card {
    padding: var(--sds-semantic-spacing-around-component-lg);
}
`})}),`
`,e.jsx(n.p,{children:"Alternativly, you could use the padding mixin and achive the same result without having to remember the token name."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.card {
    @mixin padding lg;
}
`})}),`
`,e.jsx(n.h3,{children:"Increased code modularity"}),`
`,e.jsx(n.p,{children:"CSS Mixins allow you to break down complex code into small chunks that can be reused and referenced throughout your project, making development and maintenance easier."}),`
`,e.jsx(n.h4,{children:"Example"}),`
`,e.jsxs(n.p,{children:["Let's take a simplifed example of a TextField form element that defines specific tokens for ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"border-color"})," and ",e.jsx(n.code,{children:"background-color"})," for both the ",e.jsx(n.code,{children:"default"})," and ",e.jsx(n.code,{children:"hover"})," state."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
    --sds-component-text-field-color-default-foreground-color: #222222;
    --sds-component-text-field-color-default-border-color: #646464;
    --sds-component-text-field-color-default-background-color: #00000000;

    --sds-component-text-field-color-hover-foreground-color: #C6C6C6;
    --sds-component-text-field-color-hover-border-color: #2D7966;
    --sds-component-text-field-color-hover-background-color: #00000000;
}
`})}),`
`,e.jsx(n.p,{children:"Without mixins the declaration would look like this."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`input[type="text"] {
    color: var(--sds-component-text-field-color-default-foreground-color);
	border-color: var(--sds-component-text-field-color-default-border-color);
	background-color: var(--sds-component-text-field-color-default-background-color);

    &:hover {
        color: var(--sds-component-text-field-color-hover-foreground-color);
        border-color: var(--sds-component-text-field-color-hover-border-color);
        background-color: var(--sds-component-text-field-color-hover-background-color);
    }
}
`})}),`
`,e.jsxs(n.p,{children:["Now if we introduce a mixin for the common code we can reduce the number of times we have to redeclare ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"border-color"})," and ",e.jsx(n.code,{children:"background-color"}),";"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* A text-field mixin that accepts 1 parameter called state used in creating the token */
@define-mixin text-field $state {
	color: var(--sds-component-text-field-color-$(state)-foreground-color);
	border-color: var(--sds-component-text-field-color-$(state)-border-color);
	background-color: var(--sds-component-text-field-color-$(state)-background-color);
}

input[type="text"] {
    @mixin text-field default;

    &:hover {
        @mixin text-field hover;
    }
}
`})}),`
`,e.jsxs(n.p,{children:["In reality, we have tokens that not only map to the ",e.jsx(n.code,{children:"default"})," and ",e.jsx(n.code,{children:"hover"})," state but also to the ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"active"}),", ",e.jsx(n.code,{children:"required"})," and ",e.jsx(n.code,{children:"disabled"})," states. With that in mind you can see how modularity in mixins makes development and maintenance easier."]}),`
`,e.jsxs(n.p,{children:["The implmentation of ",e.jsx(n.a,{href:"https://github.com/WESCO-International/synergy-dna/blob/main/system/components.css#L1",children:"buttons"})," in Synergy is a great example of how CSS Mixins promote modularity and improve code maintenance."]}),`
`,e.jsx(n.h3,{children:"Only include what you need"}),`
`,e.jsxs(n.p,{children:["PostCSS only includes mixins the transpiled mixin in the final CSS if they are actually used within that file. So there is no performance or size impact to your css files when you import ",e.jsx(n.code,{children:"/mixins"}),"."]}),`
`,e.jsx(n.h2,{children:"How to use css mixins"}),`
`,e.jsxs(n.p,{children:["The documentation for Mixins within PostCSS can be found ",e.jsx(n.a,{href:"https://github.com/postcss/postcss-mixins/blob/main/README.md",children:"here"}),"."]}),`
`,e.jsx(n.h3,{children:"Creating mixins"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@define-mixin"})," keyword is used to create a mixin."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@define-mixin padding-horizontal $size {
	padding-left: var(--sds-semantic-spacing-around-component-$(size));
	padding-right: var(--sds-semantic-spacing-around-component-$(size));
}
`})}),`
`,e.jsx(n.h4,{children:"Mixin Parameters"}),`
`,e.jsxs(n.p,{children:["Mixins can have optional parameters that can be used within the body of the mixin. The example above accepts a ",e.jsx(n.code,{children:"size"})," parameter that can then be references inside the mixing using ",e.jsx(n.code,{children:"$(size)"}),"."]}),`
`,e.jsx(n.p,{children:"Mulitple parameters are also supported by seperating each parameter with a comma."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@define-mixin button-style $type, $state: default {
	color: var(--sds-component-button-color-$(type)-$(state)-foreground-color);
	background-color: var(--sds-component-button-color-$(type)-$(state)-background-color);
	border-width: var(--sds-component-button-border-width-$(type)-$(state));
}
`})}),`
`,e.jsx(n.h4,{children:"Default Parameter values"}),`
`,e.jsx(n.p,{children:"Mixin paramters can also define default values using colon."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@define-mixin padding-horizontal $size: lg {
	padding-left: var(--sds-semantic-spacing-around-component-$(size));
	padding-right: var(--sds-semantic-spacing-around-component-$(size));
}
`})}),`
`,e.jsxs(n.p,{children:["In the example above if no size is provided the ",e.jsx(n.code,{children:"lg"})," size will be used."]}),`
`,e.jsx(n.h3,{children:"Using mixins"}),`
`,e.jsx(n.p,{children:"Mixins will only work in files that are pre-processed by PostCSS (*.post.css). If you want to use the mixins provided by Synergy you will need to import them into your PostCSS file. The path is relative so it will need to be updated based on the location of your file in the project."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "./mixins";
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@mixin"})," keyword allow you to use a mixin."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`    .button {
        @mixin padding-horizontal md;
    }
`})}),`
`,e.jsxs(n.p,{children:["If the mixin supports mulitple parameters than each parameter should be seperated by a comma. In the example below we are using the ",e.jsx(n.code,{children:"button-style"})," mixin and passing in ",e.jsx(n.code,{children:"primary"})," and ",e.jsx(n.code,{children:"default"})," as parameters."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`    .button {
        @mixin button-style primary, default;
    }
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"In order to use the mixins created by Synergy you will need to import them into your PostCSS file."}),`
`]}),`
`,e.jsx(n.h2,{children:"Best practices for css mixins"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Utilizing descriptive names for your mixins so that you can easily understand their purpose when using them again in the future."}),`
`,e.jsx(n.li,{children:"Try to maintaining consistency in naming conventions."}),`
`,e.jsx(n.li,{children:"Designing mixins to be as versatile as possible, so that they can be used across multiple pages of your application."}),`
`,e.jsx(n.li,{children:"Avoid including unnecessary styles that do not contribute to intended purpose of the mixin."}),`
`]}),`
`,e.jsx(n.h2,{children:"Conclusion"}),`
`,e.jsx(n.p,{children:"CSS Mixins are a powerful tool that can drastically reduce development time and create a cohesive look for WESCO sites. They allow developers to quickly and easily modify and update style elements across an entire codebase, and provide an elegant way of ensuring consistency. Mixins are easy to understand, use, and maintain, and the time saving benefits that they provide make them a excellent choice for building design systems."})]})}function z(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{z as default};
//# sourceMappingURL=intro-eeda6bb4.js.map