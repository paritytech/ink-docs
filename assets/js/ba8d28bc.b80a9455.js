"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"getTimestampQuery",hide_title:!0,description:"Get a function that can then be used to query a chain's timestamp data."},i="getTimestampQuery",s={unversionedId:"frontend/core/substrate/get-timestamp-query",id:"frontend/core/substrate/get-timestamp-query",title:"getTimestampQuery",description:"Get a function that can then be used to query a chain's timestamp data.",source:"@site/docs/frontend/core/substrate/get-timestamp-query.md",sourceDirName:"frontend/core/substrate",slug:"/frontend/core/substrate/get-timestamp-query",permalink:"/frontend/core/substrate/get-timestamp-query",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/substrate/get-timestamp-query.md",tags:[],version:"current",frontMatter:{title:"getTimestampQuery",hide_title:!0,description:"Get a function that can then be used to query a chain's timestamp data."},sidebar:"reference",previous:{title:"getBalance",permalink:"/frontend/core/substrate/get-balance"},next:{title:"getTimestampNow",permalink:"/frontend/core/substrate/get-timestamp-now"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],p={toc:u},m="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gettimestampquery"},"getTimestampQuery"),(0,a.kt)("p",null,"Get a function that can then be used to query a chain's timestamp data. "),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getTimestampQuery } from 'useink/core'\n\nconst q = await getTimestampQuery(apiPromise);\nconst now = await q.now();\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"QueryableModuleCalls<'promise'>\n")))}l.isMDXComponent=!0}}]);