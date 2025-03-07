"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6720],{6236:function(e,t,a){a.d(t,{A:function(){return w}});var n=a(6540),r=a(5474),l=a.n(r),i=a(1015),o=a(4698),s=a(5411),c=a(9634),m=a.n(c),p="PageHeader-module--dark-mode--WCeH8",d="PageHeader-module--with-tabs--vbQ-W";var g=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{[d]:r.length,[p]:"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:s}=a||r,c=`${l}/edit/${s}${o}/src/pages${t}`;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},y=a(6526),h=a(5540),b="PageTabs-module--selected-item--aBB0K";let N=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.A)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===r,s=new RegExp(`${r}/?(#.*)?$`),c=a.replace(s,t);return n.createElement("li",{key:e,className:m()({[b]:o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var E=N,P=a(7012),v=a(919),f=a(185);var x=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.fI,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.VP,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:m={},relativePagePath:p,titleType:d}=t,{tabs:h,title:b,theme:N,description:f,keywords:w,date:k}=m,{interiorTheme:D}=(0,v.A)(),{site:{pathPrefix:T}}=(0,i.useStaticQuery)("2456312558"),C=T?r.pathname.replace(T,""):r.pathname,A=h?C.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"",q=N||D;return n.createElement(s.A,{tabs:h,homepage:!1,theme:q,pageTitle:b,pageDescription:f,pageKeywords:w,titleType:d},n.createElement(g,{title:c?n.createElement(c,null):b,label:"label",tabs:h,theme:q}),h&&n.createElement(E,{title:b,slug:C,tabs:h,currentTab:A}),n.createElement(P.A,{padded:!0},a,n.createElement(u,{relativePagePath:p}),n.createElement(x,{date:k})),n.createElement(y.A,{pageContext:t,location:r,slug:C,tabs:h,currentTab:A}),n.createElement(o.A,null))}},8489:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(45),r=(a(6540),a(8619)),l=a(6236);const i=["components"],o={},s=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var c;const m={_frontmatter:o},p=l.A;function d(e){let{components:t}=e,a=(0,n.A)(e,i);return(0,r.yg)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(s,{mdxType:"PageDescription"},(0,r.yg)("p",null,"This is a ",(0,r.yg)("inlineCode",{parentName:"p"},"<PageDescription>")," component. It is generally used for intro text at\nthe top of the page using the\n",(0,r.yg)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/guidelines/typography/expressive"},"type token"),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"expressive-heading-03"),".")),(0,r.yg)("h2",null,"Notes"),(0,r.yg)("p",null,"For most pages, we recommend starting with a ",(0,r.yg)("inlineCode",{parentName:"p"},"PageDescription")," followed by\n",(0,r.yg)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough. Please note that this component,\nlike all MDX components, is picky about white space, the line break above and\nbelow your content is required, and if you even have an extra space on the empty\nlines above/below it won’t render correctly."),(0,r.yg)("h2",null,"Code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markup",metastring:"path=components/PageDescription/PageDescription.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/PageDescription",path:"components/PageDescription/PageDescription.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/PageDescription"},"<PageDescription>\n\nLorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor _incididunt_ ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n</PageDescription>\n")),(0,r.yg)("h3",null,"Props"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"property"),(0,r.yg)("th",{parentName:"tr",align:null},"propType"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"children"),(0,r.yg)("td",{parentName:"tr",align:null},"node"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-page-description-mdx-cfae5431e3dfc3dc481e.js.map