"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["108"],{2385:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var i=s(5893),r=s(65);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",div:"div",h3:"h3"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"markdown--mdx",children:["Markdown & MDX",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown--mdx",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Rspress supports not only Markdown but also ",(0,i.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),", a powerful way to develop content."]}),"\n",(0,i.jsxs)(n.h2,{id:"markdown",children:["Markdown",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"MDX is a superset of Markdown, which means you can write Markdown files as usual. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"# Hello World\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"use-component",children:["Use Component",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-component",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When you want to use React components in Markdown files, you should name your files with ",(0,i.jsx)(n.code,{children:".mdx"})," extension. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",children:"// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"front-matter",children:["Front Matter",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can add Front Matter at the beginning of your Markdown file, which is a YAML-formatted object that defines some metadata. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: Hello World\n---\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: By default, Rspress uses h1 headings as html headings."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can also access properties defined in Front Matter in the body, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The previously defined properties will be passed to the component as ",(0,i.jsx)(n.code,{children:"frontmatter"})," properties. So the final output will be:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<h1>Hello World</h1>\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"custom-container",children:["Custom Container",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-container",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:":::"})," syntax to create custom containers and support custom titles. For example:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:':::tip\nThis is a `block` of type `tip`\n:::\n\n:::info\nThis is a `block` of type `info`\n:::\n\n:::warning\nThis is a `block` of type `warning`\n:::\n\n:::danger\nThis is a `block` of type `danger`\n:::\n\n::: details\nThis is a `block` of type `details`\n:::\n\n:::tip Custom Title\nThis is a `block` of `Custom Title`\n:::\n\n:::tip{title="Custom Title"}\nThis is a `block` of `Custom Title`\n:::\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of type ",(0,i.jsx)(n.code,{children:"tip"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of type ",(0,i.jsx)(n.code,{children:"info"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of type ",(0,i.jsx)(n.code,{children:"warning"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive danger",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"DANGER"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of type ",(0,i.jsx)(n.code,{children:"danger"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive details",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"DETAILS"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of type ",(0,i.jsx)(n.code,{children:"details"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Custom Title"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of ",(0,i.jsx)(n.code,{children:"Custom Title"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Custom Title"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This is a ",(0,i.jsx)(n.code,{children:"block"})," of ",(0,i.jsx)(n.code,{children:"Custom Title"}),"\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"code-block",children:["Code Block",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#code-block",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"basic-usage",children:["Basic Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-usage",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can use the ``` syntax to create code blocks and support custom titles. For example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="hello.js"',children:"console.log('Hello World');\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"show-line-numbers",children:["Show Line Numbers",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#show-line-numbers",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to display line numbers, you can enable the ",(0,i.jsx)(n.code,{children:"showLineNumbers"})," option in the config file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"export default {\n  // ...\n  markdown: {\n    showLineNumbers: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"wrap-code",children:["Wrap Code",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#wrap-code",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to wrap long code line by default, you can enable the ",(0,i.jsx)(n.code,{children:"defaultWrapCode"})," option in the config file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"export default {\n  // ...\n  markdown: {\n    defaultWrapCode: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"line-highlighting",children:["Line Highlighting",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#line-highlighting",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can also apply line highlighting and code block title at the same time, for example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Ouput:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="hello.js" {1,3-5}',children:"console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"rustify-mdx-compiler",children:["Rustify MDX compiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rustify-mdx-compiler",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can enable Rustify MDX compiler by following config:"})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["guide%2Findex.md"]={toc:[{text:"Markdown",id:"markdown",depth:2},{text:"Use Component",id:"use-component",depth:2},{text:"Front Matter",id:"front-matter",depth:2},{text:"Custom Container",id:"custom-container",depth:2},{text:"Code Block",id:"code-block",depth:2},{text:"Basic Usage",id:"basic-usage",depth:3},{text:"Show Line Numbers",id:"show-line-numbers",depth:3},{text:"Wrap Code",id:"wrap-code",depth:3},{text:"Line Highlighting",id:"line-highlighting",depth:3},{text:"Rustify MDX compiler",id:"rustify-mdx-compiler",depth:2}],title:"Markdown & MDX",frontmatter:{}}}}]);