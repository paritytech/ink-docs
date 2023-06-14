"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"getBalance",hide_title:!0,description:"Get the balance of an address"},c="getBalance",s={unversionedId:"frontend/core/substrate/get-balance",id:"frontend/core/substrate/get-balance",title:"getBalance",description:"Get the balance of an address",source:"@site/docs/frontend/core/substrate/get-balance.md",sourceDirName:"frontend/core/substrate",slug:"/frontend/core/substrate/get-balance",permalink:"/es/frontend/core/substrate/get-balance",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/substrate/get-balance.md",tags:[],version:"current",frontMatter:{title:"getBalance",hide_title:!0,description:"Get the balance of an address"},sidebar:"reference",previous:{title:"txPaymentInfo",permalink:"/es/frontend/core/contracts/tx-payment-info"},next:{title:"getTimestampQuery",permalink:"/es/frontend/core/substrate/get-timestamp-query"}},l={},i=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getbalance"},"getBalance"),(0,a.kt)("p",null,"Get the balance of an address."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getBalance } from 'useink/core'\nimport { planckToDecimalFormatted } from 'useink/uitls'\n\nconst address = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'\nconst bal = await getBalance(apiPromise, address)\n\n// e.g. 89976200000000\nconsole.log(bal.freeBalance.toString())\n\n// e.g. 89.0762 ROC\nconsole.log(planckToDecimalFormatted(bal.freeBalance, apiPromise, { decimals: 4 }))\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface DeriveBalancesAccount extends DeriveBalancesAccountData {\n    accountId: AccountId;\n    accountNonce: Index;\n    additional: DeriveBalancesAccountData[];\n}\n")))}d.isMDXComponent=!0}}]);