"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),f=a,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"==typeof e?e:a,s[1]=u;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"useTimestampQuery",description:"A React hook for getting a function that can be used to fetch timestamp data."},s="useTimestampQuery",u={unversionedId:"frontend/react/hooks/substrate/use-timestamp-query",id:"frontend/react/hooks/substrate/use-timestamp-query",title:"useTimestampQuery",description:"A React hook for getting a function that can be used to fetch timestamp data.",source:"@site/docs/frontend/react/hooks/substrate/use-timestamp-query.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-timestamp-query",permalink:"/frontend/react/hooks/substrate/use-timestamp-query",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-timestamp-query.md",tags:[],version:"current",frontMatter:{title:"useTimestampQuery",description:"A React hook for getting a function that can be used to fetch timestamp data."},sidebar:"reference",previous:{title:"useTimestampNow",permalink:"/frontend/react/hooks/substrate/use-timestamp-now"},next:{title:"useUnixMiliToDate",permalink:"/frontend/react/hooks/helpers/use-unix-mili-to-date"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],p={toc:c},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usetimestampquery"},"useTimestampQuery"),(0,a.kt)("p",null,"A React hook for getting a function that can be used to fetch timestamp data."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTimestampQuery } from 'useink'\n\nfunction Query() {\n  const q = useTimestampQuery('phala');\n  const b = useBlockNumber();\n\n  // see `useTimestampNow` and `useTimestampDate`, which does this for you.\n  const now = useMemo(() => {\n    return await q.now();\n  }, [b.blockNumber])\n\n  console.log(now);\n\n  return <p>{now}</p>;\n}\n")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"QueryableModuleCalls<'promise'> | undefined\n")))}m.isMDXComponent=!0}}]);