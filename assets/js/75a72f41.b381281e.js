"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={title:"#[ink(topic)]",slug:"/macros-attributes/topic",hide_title:!0},a=void 0,c={unversionedId:"macros-attributes/topic",id:"macros-attributes/topic",title:"#[ink(topic)]",description:"Applied on fields of ink! event types to indicate that they are topics.",source:"@site/docs/macros-attributes/topic.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/topic",permalink:"/macros-attributes/topic",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/topic.md",tags:[],version:"current",frontMatter:{title:"#[ink(topic)]",slug:"/macros-attributes/topic",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(storage)]",permalink:"/macros-attributes/storage"},next:{title:"#[ink::chain_extension]",permalink:"/macros-attributes/chain-extension"}},s={},p=[{value:"Example",id:"example",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/img/title/text/topic.svg",className:"titlePic"}),(0,i.kt)("p",null,"Applied on fields of ink! event types to indicate that they are topics."),(0,i.kt)("p",null,"Tells the ink! codegen to provide a topic hash for the given field. Every ink! event can only have a limited number of such topic field.\nThe semnatics are similar to indexed event arguments in Solidity. "),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n}\n")))}m.isMDXComponent=!0}}]);