"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6762],{5009:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return h}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),o=["components"],i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},c=s("AnchorLinks"),m=s("AnchorLink"),u={_frontmatter:i},d=l.Z;function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(d,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Algorithms"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Electronics"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Kitchen Chemistry"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Polymers"),(0,r.kt)(m,{mdxType:"AnchorLink"},"States of Matter"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Waves")),(0,r.kt)("h2",null,"Algorithms"),(0,r.kt)("p",null,"Want to build your own Watson? This introduction to your Must Know Algorithms will help you solve challenging and important problems using everyday concepts."),(0,r.kt)("h2",null,"Electronics"),(0,r.kt)("p",null,"Have you ever wondered how computers do what they do? In this class you will learn how computers are made and how they work — on the inside."),(0,r.kt)("h2",null,"Kitchen Chemistry"),(0,r.kt)("p",null,"A virtual taste of Chemistry - have fun learning Chemistry right in your own kitchen."),(0,r.kt)("h2",null,"Polymers"),(0,r.kt)("p",null,"Learn about polymers all around us - how to extract DNA from a strawberry!"),(0,r.kt)("h2",null,"States of Matter"),(0,r.kt)("p",null,"We are surrounded by gases, liquids and solids.  Learn about these states of matter, and view fun demonstrations showing the strength of air pressure."),(0,r.kt)("h2",null,"Waves"),(0,r.kt)("p",null,"Waves, resonance, sound and light are part of your everyday life. Learn more and have fun with our experiments!"))}h.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),r=a(8650),l=a.n(r),o=a(5444),i=a(9403),s=a(3321),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,i=l.baseUrl,s=l.subDirectory,c=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=a(4275),p=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),u=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),y=g,k=a(2881),b=a(6958),v=a(36),f=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,p=void 0===m?{}:m,g=t.relativePagePath,v=t.titleType,E=p.tabs,w=p.title,x=p.theme,P=p.description,T=p.keywords,N=p.date,L=(0,b.Z)().interiorTheme,A=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=A?r.pathname.replace(A,""):r.pathname,D=E?C.split("/").filter(Boolean).slice(-1)[0]||l()(E[0],{lower:!0}):"",Z=x||L;return n.createElement(s.Z,{tabs:E,homepage:!1,theme:Z,pageTitle:w,pageDescription:P,pageKeywords:T,titleType:v},n.createElement(u,{title:c?n.createElement(c,null):w,label:"label",tabs:E,theme:Z}),E&&n.createElement(y,{title:w,slug:C,tabs:E,currentTab:D}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(f,{date:N})),n.createElement(h.Z,{pageContext:t,location:r,slug:C,tabs:E,currentTab:D}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-us-in-person-overview-mdx-fed549b74da4575eb174.js.map