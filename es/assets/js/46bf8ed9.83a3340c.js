"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8493],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,i(i({ref:e},c),{},{components:n})):a.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8013:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"OpenBrush",slug:"/getting-started/use-openbrush"},i=void 0,s={unversionedId:"third-party-tools/openbrush",id:"version-4.0.0-alpha.1/third-party-tools/openbrush",title:"OpenBrush",description:"TODO: Translate to Spanish.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/third-party-tools/openbrush.md",sourceDirName:"third-party-tools",slug:"/getting-started/use-openbrush",permalink:"/es/4.0.0-alpha.1/getting-started/use-openbrush",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/third-party-tools/openbrush.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"OpenBrush",slug:"/getting-started/use-openbrush"},sidebar:"reference",previous:{title:"Contracts on Rococo",permalink:"/es/4.0.0-alpha.1/testnet"},next:{title:"Preguntas Frequentes",permalink:"/es/4.0.0-alpha.1/faq"}},l={},p=[{value:"Which standards and contract components does it contain?",id:"which-standards-and-contract-components-does-it-contain",level:3},{value:"Generic Trait Implementation",id:"generic-trait-implementation",level:3},{value:"Wrapper around Traits",id:"wrapper-around-traits",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Typechain-Polkadot",id:"typechain-polkadot",level:2},{value:"Sol2Ink",id:"sol2ink",level:2},{value:"Questions?",id:"questions",level:3}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"TODO: Translate to Spanish.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush")," is a library for smart contract development on ink! maintained by the\n",(0,r.kt)("a",{parentName:"p",href:"https://brushfam.io"},"Brushfam")," team."),(0,r.kt)("p",null,"It provides standard contracts based on ",(0,r.kt)("a",{parentName:"p",href:"TODO"},"Polkadot Standard Proposals (PSPs)"),",\nas well as higher-level contracts and Rust macros that generate ink! code."),(0,r.kt)("p",null,"Using OpenBrush is simple, you will only add the dependency to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file. Here is an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbrush.io/smart-contracts/overview"},"example")," of how to do it."),(0,r.kt)("h3",{id:"which-standards-and-contract-components-does-it-contain"},"Which standards and contract components does it contain?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP22")," - Fungible Token (",(0,r.kt)("em",{parentName:"li"},"ERC20 equivalent"),") with extensions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP34")," - Non-Fungible Token (",(0,r.kt)("em",{parentName:"li"},"ERC721 equivalent"),") with extensions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP37"),": ",(0,r.kt)("em",{parentName:"li"},"ERC1155 equivalent")," with extensions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ownable")," Restrict access to action for non-owners"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Control"),": Define a set of roles and restrict access to an action by roles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reentrancy Guard"),": Prevent reentrant calls to a function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pausable"),": Pause/Unpause the contract to disable/enable some operations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timelock Controller"),": Execute transactions with some delay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Splitter"),": Split the amount of native tokens between participants")),(0,r.kt)("h3",{id:"generic-trait-implementation"},"Generic Trait Implementation"),(0,r.kt)("p",null,"More importantly, OpenBrush adds support for generic Trait implementation so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart-contract code base (see detailed description ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md"},"here"),")"),(0,r.kt)("h3",{id:"wrapper-around-traits"},"Wrapper around Traits"),(0,r.kt)("p",null,"Defining a Trait definition is sufficient (a contract that implements that Trait is not needed anymore) to call methods of that Trait from some contract in the network (do a cross contract call). It makes cross-contract calls easier."),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush Github repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openbrush.io/"},"Official Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openbrush.io/"},"OpenBrush website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I5OFGNVvzOc"},"Substrate Seminar (Youtube)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76"},"How to use modifiers"))),(0,r.kt)("h2",{id:"typechain-polkadot"},"Typechain-Polkadot"),(0,r.kt)("p",null,"Another tool helpful for ink! smart contracts development is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"Typechain-Polkadot"),"."),(0,r.kt)("p",null,"Typechain-Polkadot is used to generate Typescript wrappers around your smart-contract, which can be used in UI or in integration tests of your ink! smart contracts. It uses polkadot-api under the hood, but is especially useful because all calls and queries are typed, therefore the chance of getting some error during a call is mitigated."),(0,r.kt)("h2",{id:"sol2ink"},"Sol2Ink"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/sol2ink"},"Sol2Ink")," is a useful tool which can help you migrating from Solidity to ink! You will only pass the Solidity code of your smart contract to Sol2Ink and get the ink! contract in return. You can also use Sol2Ink to learn the differences between Solidity and ink! code and use it to help you learning to create ink! smart contracts."),(0,r.kt)("h3",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have any questions about how to use any of these tools, or just about the ink! smart contracts in general, you can join the ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"},"Brushfam element channel")," or ask a question on the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/"},"Substrate Stack Exchange"),"."))}u.isMDXComponent=!0}}]);