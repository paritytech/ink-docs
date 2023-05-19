"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"1. Getting Started",hide_title:!0,slug:"/frontend/getting-started",description:"Get started building frontend applications for ink! with useink"},a="Getting Started",s={unversionedId:"frontend/getting-started",id:"frontend/getting-started",title:"1. Getting Started",description:"Get started building frontend applications for ink! with useink",source:"@site/docs/frontend/getting-started.md",sourceDirName:"frontend",slug:"/frontend/getting-started",permalink:"/frontend/getting-started",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/getting-started.md",tags:[],version:"current",frontMatter:{title:"1. Getting Started",hide_title:!0,slug:"/frontend/getting-started",description:"Get started building frontend applications for ink! with useink"},sidebar:"reference",previous:{title:"Overview",permalink:"/frontend/overview"},next:{title:"2. Connect Wallet",permalink:"/frontend/connect-wallet"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"tsconfig.json",id:"tsconfigjson",level:3},{value:"Adding <code>&lt;UseInkProvider /&gt;</code>",id:"adding-useinkprovider-",level:3},{value:"You can now use all the features of useink",id:"you-can-now-use-all-the-features-of-useink",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"useink")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i useink\n\n# pnpm\npnpm i useink\n\n# yarn\nyarn add useink\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"tsconfigjson"},"tsconfig.json"),(0,i.kt)("p",null,"You must set ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleResolution")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"nodenext"),". This feature allows your application to\ndiscover multiple import paths defined in the ",(0,i.kt)("strong",{parentName:"p"},"useink")," ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". You do not need\nthis if you only plan to use the core ",(0,i.kt)("inlineCode",{parentName:"p"},"useink")," features, but is it required to use\nfeatures defined in ",(0,i.kt)("a",{parentName:"p",href:"/frontend/notifications"},"useink/notifications")," and\n",(0,i.kt)("a",{parentName:"p",href:"/frontend/utils"},"useink/utils"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "moduleResolution": "nodenext",\n  }\n}\n')),(0,i.kt)("h3",{id:"adding-useinkprovider-"},"Adding ",(0,i.kt)("inlineCode",{parentName:"h3"},"<UseInkProvider />")),(0,i.kt)("p",null,"React uses ",(0,i.kt)("em",{parentName:"p"},"Providers")," to make state accessible to any child component no matter how deeply nested a component is. To make ",(0,i.kt)("inlineCode",{parentName:"p"},"useink")," features available to your application you must wrap your application with ",(0,i.kt)("inlineCode",{parentName:"p"},"UseInkProvider"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UseInkProvider } from 'useink';\nimport { RococoContractsTestnet, ShibuyaTestnet } from 'useink/chains';\n\nfunction App({ children }) {\n  return (\n    <UseInkProvider \n      config={{ \n        dappName: 'Flipper', \n        chains: [RococoContractsTestnet, ShibuyaTestnet] ,\n      }}\n    >\n      <MyRoutes />\n    </UseInkProvider>\n  );\n}\n\nexport default App\n")),(0,i.kt)("p",null,"There are two fields to note in the example above: ",(0,i.kt)("inlineCode",{parentName:"p"},"dappName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"chains"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"dappName")," is the name that is displayed to a user when they are asked to connect their browser wallet for the first time. ",(0,i.kt)("inlineCode",{parentName:"p"},"chains")," is an array of chain configurations that your dapp will support. Only chains that are configured here will be accessible to your dApp. ",(0,i.kt)("inlineCode",{parentName:"p"},"useink")," provides chain configurations for hundreds of existing chains that you can import from ",(0,i.kt)("inlineCode",{parentName:"p"},"useink/chains"),"."),(0,i.kt)("p",null,"You can learn more about ",(0,i.kt)("a",{parentName:"p",href:"/frontend/configuration"},"chain configuration here"),"."),(0,i.kt)("h3",{id:"you-can-now-use-all-the-features-of-useink"},"You can now use all the features of useink"),(0,i.kt)("p",null,"Next, you can learn how to ",(0,i.kt)("a",{parentName:"p",href:"/frontend/connect-wallet"},"connect to a browser wallet extension"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink-kitchen-sink/blob/master/frontend/src/components/pg-home/HomePage.tsx"},"see an example dApp"),"."))}c.isMDXComponent=!0}}]);