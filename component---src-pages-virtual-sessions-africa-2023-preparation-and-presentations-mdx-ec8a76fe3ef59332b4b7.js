"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2037],{6236:function(t,e,a){a.d(e,{A:function(){return x}});var n=a(6540),r=a(5474),l=a.n(r),g=a(1015),m=a(4698),i=a(5411),s=a(9634),p=a.n(s),d="PageHeader-module--dark-mode--WCeH8",u="PageHeader-module--with-tabs--vbQ-W";var o=t=>{let{title:e,theme:a,tabs:r=[]}=t;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{[u]:r.length,[d]:"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var y=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:r}}}=(0,g.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:m,branch:i}=a||r,s=`${l}/edit/${i}${m}/src/pages${e}`;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},c=a(6526),N=a(5540),h="PageTabs-module--selected-item--aBB0K";let f=function(t){function e(){return t.apply(this,arguments)||this}return(0,N.A)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],m=e.map((t=>{const e=l()(t,{lower:!0,strict:!0}),m=e===r,i=new RegExp(`${r}/?(#.*)?$`),s=a.replace(i,e);return n.createElement("li",{key:t,className:p()({[h]:m},"PageTabs-module--list-item--024o6")},n.createElement(g.Link,{className:"PageTabs-module--link--Kz-7R",to:`${s}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},m))))))},e}(n.Component);var b=f,_=a(7012),E=a(919),P=a(185);var v=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(P.fI,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(P.VP,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=t=>{let{pageContext:e,children:a,location:r,Title:s}=t;const{frontmatter:p={},relativePagePath:d,titleType:u}=e,{tabs:N,title:h,theme:f,description:P,keywords:x,date:w}=p,{interiorTheme:C}=(0,E.A)(),{site:{pathPrefix:A}}=(0,g.useStaticQuery)("2456312558"),S=A?r.pathname.replace(A,""):r.pathname,T=N?S.split("/").filter(Boolean).slice(-1)[0]||l()(N[0],{lower:!0}):"",k=f||C;return n.createElement(i.A,{tabs:N,homepage:!1,theme:k,pageTitle:h,pageDescription:P,pageKeywords:x,titleType:u},n.createElement(o,{title:s?n.createElement(s,null):h,label:"label",tabs:N,theme:k}),N&&n.createElement(b,{title:h,slug:S,tabs:N,currentTab:T}),n.createElement(_.A,{padded:!0},a,n.createElement(y,{relativePagePath:d}),n.createElement(v,{date:w})),n.createElement(c.A,{pageContext:e,location:r,slug:S,tabs:N,currentTab:T}),n.createElement(m.A,null))}},9585:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return m},default:function(){return u}});var n=a(45),r=(a(6540),a(8619)),l=a(6236);const g=["components"],m={},i=(s="PageDescription",function(t){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)});var s;const p={_frontmatter:m},d=l.A;function u(t){let{components:e}=t,a=(0,n.A)(t,g);return(0,r.yg)(d,Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)(i,{mdxType:"PageDescription"},(0,r.yg)("p",null,"Prep directions below. Presentations coming in August!")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Activity"),(0,r.yg)("th",{parentName:"tr",align:null},"Date"),(0,r.yg)("th",{parentName:"tr",align:null},"Prep"),(0,r.yg)("th",{parentName:"tr",align:null},"Presentation"),(0,r.yg)("th",{parentName:"tr",align:null},"Resources"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"2024")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Climate change and water")),(0,r.yg)("td",{parentName:"tr",align:null},"20 Jul 2024"),(0,r.yg)("td",{parentName:"tr",align:null},"No prep necessary"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011009/Climate_Change_2024.pdf"},"Climate"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011039/Water_2024.pdf"},"Water")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"%5BClimate_and_water_future_resources_2024.docx%5D(https://github.com/user-attachments/files/19011046/Climate_and_water_future_resources_2024.docx)"},"Resrources"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"2023")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011062/Future.resources.-.Aug.2023.docx"},"Resources"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Why science is important for girls and boys")),(0,r.yg)("td",{parentName:"tr",align:null},"22 July 2023"),(0,r.yg)("td",{parentName:"tr",align:null},"No prep necessary"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011074/Why_science_is_important.pdf"},"slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Computers, programming, and robotics")),(0,r.yg)("td",{parentName:"tr",align:null},"29 July"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://familyscience.s3.us-east.cloud-object-storage.appdomain.cloud/Computers%20Materials%202023.pdf"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011501/Computers_programming_robotics.pdf"},"slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Kitchen chemistry")),(0,r.yg)("td",{parentName:"tr",align:null},"5 August"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://familyscience.s3.us-east.cloud-object-storage.appdomain.cloud/Kitchen%20Chemistry%20Materials%202023.pdf"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011508/Kitchen.chemistry.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://familyscience.s3.us-east.cloud-object-storage.appdomain.cloud/table%20of%20elements.pdf"},"Table of elements"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Waves and quantum")),(0,r.yg)("td",{parentName:"tr",align:null},"12 August"),(0,r.yg)("td",{parentName:"tr",align:null},"No prep necessary"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:""},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"2022")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Being captain planet")),(0,r.yg)("td",{parentName:"tr",align:null},"15 Oct 2022"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011521/IBM.FSS.-.Being.Captain.Planet.-.compressed.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011525/Climate.and.water.future.resources.-.October.2022.docx"},"Experiments"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Polymers all around us")),(0,r.yg)("td",{parentName:"tr",align:null},"22 Oct 2022"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011538/Polymers_prep_2021_2022_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Programming & AI: Codeing is cool kids!")),(0,r.yg)("td",{parentName:"tr",align:null},"29 Oct 2022"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011543/Programming_slides.-.online.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"How computers work")),(0,r.yg)("td",{parentName:"tr",align:null},"5 Nov 2022"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011748/Computers_prep_2021_2022_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Transforming ocean research with AI")),(0,r.yg)("td",{parentName:"tr",align:null},"12 Nov 2022"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"2021")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011772/Combined.future.resources.docx"},"Resources"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Why science is important for girls and boys")),(0,r.yg)("td",{parentName:"tr",align:null},"25 Sep 2021"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011780/STEM_slides_2021_English.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Keeping it cool with climate and water!")),(0,r.yg)("td",{parentName:"tr",align:null},"2 Oct 2021"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011797/Climate_prep_2021_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011828/Climate_slides_2021_English.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Polymers all around us")),(0,r.yg)("td",{parentName:"tr",align:null},"2 Oct 2021"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011873/Polymers_prep_2021_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011886/Polymers_slides_2021_English.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Everything is a wave!")),(0,r.yg)("td",{parentName:"tr",align:null},"9 Oct 2021"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011914/Waves_prep_2021_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011918/Waves_slides_2021_English.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"How computers work")),(0,r.yg)("td",{parentName:"tr",align:null},"16 Oct 2021"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011935/Computers_prep_2021_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011938/Computers_slides_2021_English.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Algorithms")),(0,r.yg)("td",{parentName:"tr",align:null},"23 Oct 2021"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011955/Algorithms_prep_2021_English.docx"},"Prep")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011968/Algorithms_slides_2021_English.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Programming and AI")),(0,r.yg)("td",{parentName:"tr",align:null},"30 Oct 2021"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/user-attachments/files/19011974/Programming_slides_2021_English.1.pdf"},"Slides")),(0,r.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-virtual-sessions-africa-2023-preparation-and-presentations-mdx-ec8a76fe3ef59332b4b7.js.map