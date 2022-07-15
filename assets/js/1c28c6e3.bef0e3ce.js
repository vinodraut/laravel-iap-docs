"use strict";(self.webpackChunklaravel_in_app_purchase=self.webpackChunklaravel_in_app_purchase||[]).push([[464],{6935:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={sidebar_position:1},s="Installation and Configuration",u={unversionedId:"get-started/installation",id:"get-started/installation",isDocsHomePage:!1,title:"Installation and Configuration",description:"Installation",source:"@site/docs/get-started/installation.md",sourceDirName:"get-started",slug:"/get-started/installation",permalink:"/laravel-iap-docs/docs/get-started/installation",editUrl:"https://github.com/imdhemy/laravel-iap-docs/edit/master/docs/get-started/installation.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"introduction",permalink:"/laravel-iap-docs/docs/"},next:{title:"Routing",permalink:"/laravel-iap-docs/docs/get-started/routing"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Routing",id:"routing",children:[]},{value:"Event Listeners",id:"event-listeners",children:[]}]}],p={toc:d};function c(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-and-configuration"},"Installation and Configuration"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the package via composer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require imdhemy/laravel-purchases\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Publish the config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan liap:config:publish\n")),(0,o.kt)("p",null,"This creates a file ",(0,o.kt)("inlineCode",{parentName:"p"},"config/liap.php")," which contains 4 main keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routing"),": Which allows you to add custom routing configurations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"google_play_package_name"),": The default Google play package name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appstore_password"),": The default App Store password."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eventListeners"),": A List of Store events and event handlers.")),(0,o.kt)("h3",{id:"routing"},"Routing"),(0,o.kt)("p",null,"LIAP provides you a route to receive the server notifications. The ",(0,o.kt)("inlineCode",{parentName:"p"},"routing")," key allows you to secure this route. Check\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started/routing"},"routing")," document for detailed information."),(0,o.kt)("h3",{id:"event-listeners"},"Event Listeners"),(0,o.kt)("p",null,"Your application should handle the different state of the subscription ..."))}c.isMDXComponent=!0}}]);