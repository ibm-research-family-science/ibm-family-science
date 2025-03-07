"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3830],{6236:function(e,t,a){a.d(t,{A:function(){return w}});var n=a(6540),A=a(5474),o=a.n(A),l=a(1015),r=a(4698),i=a(5411),g=a(9634),m=a.n(g),s="PageHeader-module--dark-mode--WCeH8",c="PageHeader-module--with-tabs--vbQ-W";var p=e=>{let{title:t,theme:a,tabs:A=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{[c]:A.length,[s]:"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:A}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:r,branch:i}=a||A,g=`${o}/edit/${i}${r}/src/pages${t}`;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:g},"Edit this page on GitHub"))):null},y=a(6526),u=a(5540),D="PageTabs-module--selected-item--aBB0K";let N=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.A)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,A=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),r=t===A,i=new RegExp(`${A}/?(#.*)?$`),g=a.replace(i,t);return n.createElement("li",{key:e,className:m()({[D]:r},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${g}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var h=N,b=a(7012),E=a(919),x=a(185);var B=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(x.fI,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(x.VP,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:A,Title:g}=e;const{frontmatter:m={},relativePagePath:s,titleType:c}=t,{tabs:u,title:D,theme:N,description:x,keywords:w,date:Q}=m,{interiorTheme:R}=(0,E.A)(),{site:{pathPrefix:j}}=(0,l.useStaticQuery)("2456312558"),f=j?A.pathname.replace(j,""):A.pathname,C=u?f.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",T=N||R;return n.createElement(i.A,{tabs:u,homepage:!1,theme:T,pageTitle:D,pageDescription:x,pageKeywords:w,titleType:c},n.createElement(p,{title:g?n.createElement(g,null):D,label:"label",tabs:u,theme:T}),u&&n.createElement(h,{title:D,slug:f,tabs:u,currentTab:C}),n.createElement(b.A,{padded:!0},a,n.createElement(d,{relativePagePath:s}),n.createElement(B,{date:Q})),n.createElement(y.A,{pageContext:t,location:A,slug:f,tabs:u,currentTab:C}),n.createElement(r.A,null))}},7438:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return y}});var n=a(45),A=(a(6540),a(8619)),o=a(6236);const l=["components"],r={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,A.yg)("div",t)},g=i("PageDescription"),m=i("DoDontRow"),s=i("DoDont"),c=i("Video"),p={_frontmatter:r},d=o.A;function y(e){let{components:t}=e,a=(0,n.A)(e,l);return(0,A.yg)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,A.yg)(g,{mdxType:"PageDescription"},(0,A.yg)("p",null,"The ",(0,A.yg)("inlineCode",{parentName:"p"},"<DoDontRow>")," component is a custom row used alongside the ",(0,A.yg)("inlineCode",{parentName:"p"},"<DoDont>"),"\ncomponent, which now includes built in columns.")),(0,A.yg)("h2",null,"Example"),(0,A.yg)(m,{mdxType:"DoDontRow"},(0,A.yg)(s,{aspectRatio:"1:1",mdxType:"DoDont"},(0,A.yg)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1088px"}},"\n      ",(0,A.yg)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7s0SAAD//EABYQAQEBAAAAAAAAAAAAAAAAACABEf/aAAgBAQABBQIZD//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAERABAgMf/aAAgBAQABPyGKkD3R/9oADAMBAAIAAwAAABAjzzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAACAQUAAAAAAAAAAAAAAAABEQAQIEFh8P/aAAgBAQABPxABx6MA4bnDt//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,A.yg)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/ibm-family-science/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg",srcSet:["/ibm-family-science/static/151c08285741565650307880afc0c3cc/69549/light-theme.jpg 288w","/ibm-family-science/static/151c08285741565650307880afc0c3cc/473e3/light-theme.jpg 576w","/ibm-family-science/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg 1088w"],sizes:"(max-width: 1088px) 100vw, 1088px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,A.yg)(s,{aspectRatio:"1:1",type:"dont",mdxType:"DoDont"},(0,A.yg)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1088px"}},"\n      ",(0,A.yg)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7s0SAAD//EABYQAQEBAAAAAAAAAAAAAAAAACABEf/aAAgBAQABBQIZD//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAERABAgMf/aAAgBAQABPyGKkD3R/9oADAMBAAIAAwAAABAjzzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAACAQUAAAAAAAAAAAAAAAABEQAQIEFh8P/aAAgBAQABPxABx6MA4bnDt//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,A.yg)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/ibm-family-science/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg",srcSet:["/ibm-family-science/static/151c08285741565650307880afc0c3cc/69549/light-theme.jpg 288w","/ibm-family-science/static/151c08285741565650307880afc0c3cc/473e3/light-theme.jpg 576w","/ibm-family-science/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg 1088w"],sizes:"(max-width: 1088px) 100vw, 1088px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,A.yg)(m,{mdxType:"DoDontRow"},(0,A.yg)(s,{aspectRatio:"1:1",text:"This is some text",mdxType:"DoDont"}),(0,A.yg)(s,{type:"dont",aspectRatio:"1:1",text:"This is some text",color:"dark",mdxType:"DoDont"})),(0,A.yg)(m,{mdxType:"DoDontRow"},(0,A.yg)(s,{text:"This is some text",color:"dark",captionTitle:"Caption title",caption:"Caption",colLg:"8",mdxType:"DoDont"})),(0,A.yg)(m,{mdxType:"DoDontRow"},(0,A.yg)(s,{colLg:"8",captionTitle:"Caption title",caption:"Caption",mdxType:"DoDont"},(0,A.yg)(c,{title:"Video example",vimeoId:"310583077",mdxType:"Video"}))),(0,A.yg)("h2",null,"Code"),(0,A.yg)("h3",null,"Image"),(0,A.yg)("pre",null,(0,A.yg)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/DoDontRow/DoDontRow.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow",path:"components/DoDontRow/DoDontRow.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow"},'<DoDontRow>\n  <DoDont aspectRatio="1:1">![Alt text](./images/light-theme.jpg)</DoDont>\n  <DoDont type="dont" aspectRatio="1:1">\n    ![Alt text](./images/light-theme.jpg)\n  </DoDont>\n</DoDontRow>\n')),(0,A.yg)("h3",null,"Text"),(0,A.yg)("pre",null,(0,A.yg)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/DoDontRow/DoDontRow.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow",path:"components/DoDontRow/DoDontRow.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow"},'<DoDontRow>\n  <DoDont text="This is some text" aspectRatio="1:1" />\n  <DoDont type="dont" text="This is some text" color="dark" aspectRatio="1:1" />\n</DoDontRow>\n<DoDontRow>\n  <DoDont\n    text="This is some text"\n    captionTitle="Caption title"\n    caption="Caption"\n    aspectRatio="1:1"\n    colLg="8"\n  />\n</DoDontRow>\n')),(0,A.yg)("h3",null,"Video"),(0,A.yg)("pre",null,(0,A.yg)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/DoDontRow/DoDontRow.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow",path:"components/DoDontRow/DoDontRow.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow"},'<DoDontRow>\n  <DoDont captionTitle="Caption title" caption="Caption" colLg="8">\n    <Video title="Video example" vimeoId="310583077" />\n  </DoDont>\n</DoDontRow>\n')),(0,A.yg)("h2",null,"Props"),(0,A.yg)("h3",null,"DoDontRow"),(0,A.yg)("table",null,(0,A.yg)("thead",{parentName:"table"},(0,A.yg)("tr",{parentName:"thead"},(0,A.yg)("th",{parentName:"tr",align:null},"property"),(0,A.yg)("th",{parentName:"tr",align:null},"propType"),(0,A.yg)("th",{parentName:"tr",align:null},"required"),(0,A.yg)("th",{parentName:"tr",align:null},"default"),(0,A.yg)("th",{parentName:"tr",align:null},"description"))),(0,A.yg)("tbody",{parentName:"table"},(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"children"),(0,A.yg)("td",{parentName:"tr",align:null},"node"),(0,A.yg)("td",{parentName:"tr",align:null},"yes"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"child node, expects a ",(0,A.yg)("inlineCode",{parentName:"td"},"DoDont")," component")))),(0,A.yg)("h3",null,"Do & Dont"),(0,A.yg)("table",null,(0,A.yg)("thead",{parentName:"table"},(0,A.yg)("tr",{parentName:"thead"},(0,A.yg)("th",{parentName:"tr",align:null},"property"),(0,A.yg)("th",{parentName:"tr",align:null},"propType"),(0,A.yg)("th",{parentName:"tr",align:null},"required"),(0,A.yg)("th",{parentName:"tr",align:null},"default"),(0,A.yg)("th",{parentName:"tr",align:null},"description"))),(0,A.yg)("tbody",{parentName:"table"},(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"children"),(0,A.yg)("td",{parentName:"tr",align:null},"node"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"child node, expects a markdown image or ",(0,A.yg)("inlineCode",{parentName:"td"},"<Video>")," component")),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"text"),(0,A.yg)("td",{parentName:"tr",align:null},"string"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"text to display inside the component instead of an image or video")),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"caption"),(0,A.yg)("td",{parentName:"tr",align:null},"string"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"caption")),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"captionTitle"),(0,A.yg)("td",{parentName:"tr",align:null},"string"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"caption title")),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"color"),(0,A.yg)("td",{parentName:"tr",align:null},"string"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"light"),(0,A.yg)("td",{parentName:"tr",align:null},"set to ",(0,A.yg)("inlineCode",{parentName:"td"},"dark")," for dark background card")),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"aspectRatio"),(0,A.yg)("td",{parentName:"tr",align:null},"string"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},"set to ",(0,A.yg)("inlineCode",{parentName:"td"},"1:1")," to force square example ",(0,A.yg)("br",null),(0,A.yg)("em",{parentName:"td"},"(We welcome ",(0,A.yg)("a",{parentName:"em",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontExample"},"contributions")," to add additional aspect ratio options)"))),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"type"),(0,A.yg)("td",{parentName:"tr",align:null},"string"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},(0,A.yg)("inlineCode",{parentName:"td"},"do")),(0,A.yg)("td",{parentName:"tr",align:null},"specify the type of example with ",(0,A.yg)("inlineCode",{parentName:"td"},"do")," or ",(0,A.yg)("inlineCode",{parentName:"td"},"dont"))),(0,A.yg)("tr",{parentName:"tbody"},(0,A.yg)("td",{parentName:"tr",align:null},"…columnProps"),(0,A.yg)("td",{parentName:"tr",align:null},"number"),(0,A.yg)("td",{parentName:"tr",align:null}),(0,A.yg)("td",{parentName:"tr",align:null},(0,A.yg)("inlineCode",{parentName:"td"},"colMd=4, colLg=4")),(0,A.yg)("td",{parentName:"tr",align:null},"specify any ",(0,A.yg)("inlineCode",{parentName:"td"},"<Column>")," props to pass down")))))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-do-dont-row-mdx-a31209dd8210c1bed692.js.map