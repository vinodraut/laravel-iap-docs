"use strict";(self.webpackChunklaravel_in_app_purchase=self.webpackChunklaravel_in_app_purchase||[]).push([[85],{7979:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(6010),l=n(261),c=n(3905),o=n(8775),i=n(571),s=n(3018),u="mdxPageWrapper_3qD3";var m=function(e){var t=e.content,n=t.frontMatter,m=t.metadata,d=n.title,f=n.description,v=n.wrapperClassName,p=n.hide_table_of_contents,E=m.permalink;return r.createElement(l.Z,{title:d,description:f,permalink:E,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",u)},r.createElement("div",{className:(0,a.Z)("col",!p&&"col--8")},r.createElement(c.Zo,{components:o.Z},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:t.toc})))))}},571:function(e,t,n){n.d(t,{r:function(){return i},Z:function(){return s}});var r=n(7294),a=n(6010);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],c=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,i=document.getElementsByClassName(e);a<i.length&&!o;){var s=i[a],u=s.href,m=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===m&&(l&&l.classList.remove(t),s.classList.add(t),c(s),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_35-E",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar")},r.createElement(i,{toc:t}))}}}]);