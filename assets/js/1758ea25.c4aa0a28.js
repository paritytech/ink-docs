"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal."},l="planckToDecimal",i={unversionedId:"frontend/utils/helpers/planck-to-decimal",id:"frontend/utils/helpers/planck-to-decimal",title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal.",source:"@site/docs/frontend/utils/helpers/planck-to-decimal.md",sourceDirName:"frontend/utils/helpers",slug:"/frontend/utils/helpers/planck-to-decimal",permalink:"/frontend/utils/helpers/planck-to-decimal",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/helpers/planck-to-decimal.md",tags:[],version:"current",frontMatter:{title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal."},sidebar:"reference",previous:{title:"bnToBalance",permalink:"/frontend/utils/substrate/bn-to-balance"},next:{title:"planckToDecimalFormatted",permalink:"/frontend/utils/helpers/planck-to-decimal-formatted"}},c={},s=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plancktodecimal"},"planckToDecimal"),(0,a.kt)("p",null,"Convert a planck number (large integer) to a decimal. Blockchains do not use floating\npoint values for tokens. Instead they a large integer for the value and a second integer\nto define how the decimals. For instance, Contracts on Rococo uses 12 decimals for the\nnative token ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC"),". Therefore ",(0,a.kt)("inlineCode",{parentName:"p"},"1 ROC")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"1_000_000_000_000"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"1 * 10^12"),". These\nvalues are difficult for humans to read so we created ",(0,a.kt)("inlineCode",{parentName:"p"},"planckToDecimal")," to easily convert\nlarge values to human-readible ones."),(0,a.kt)("p",null,"This function will look up the chain's decimal count and do the math for you."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { planckToDecimal } from 'useink/utils';\nimport { getBalance } from 'useink/core';\n\nconst bal = await getBalance(apiPromise, address); // e.g. 1_500_000_000_000\nconst floatingPointVersion = planckToDecimal(apiPromise, bn);\n\nconsole.log(floatingPointVersion); // e.g. 1.5\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"number | undefined\n")))}d.isMDXComponent=!0}}]);