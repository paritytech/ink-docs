"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"OpenBrush",slug:"/getting-started/use-openbrush"},i=void 0,s={unversionedId:"third-party-tools/openbrush",id:"version-4.0.0-alpha.1/third-party-tools/openbrush",title:"OpenBrush",description:"[OpenBrush] is a library for smart contract development on ink! maintained by the",source:"@site/versioned_docs/version-4.0.0-alpha.1/third-party-tools/openbrush.md",sourceDirName:"third-party-tools",slug:"/getting-started/use-openbrush",permalink:"/4.0.0-alpha.1/getting-started/use-openbrush",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/third-party-tools/openbrush.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"OpenBrush",slug:"/getting-started/use-openbrush"},sidebar:"reference",previous:{title:"Contracts on Rococo",permalink:"/4.0.0-alpha.1/testnet"},next:{title:"Frequently Asked Questions",permalink:"/4.0.0-alpha.1/faq"}},l={},p=[{value:"Which standards and contract components does it contain?",id:"which-standards-and-contract-components-does-it-contain",level:3},{value:"Generic Trait Implementation",id:"generic-trait-implementation",level:3},{value:"Wrapper around Traits",id:"wrapper-around-traits",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Typechain-Polkadot",id:"typechain-polkadot",level:2},{value:"Sol2Ink",id:"sol2ink",level:2},{value:"Questions?",id:"questions",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush")," is a library for smart contract development on ink! maintained by the\n",(0,r.kt)("a",{parentName:"p",href:"https://brushfam.io"},"Brushfam")," team."),(0,r.kt)("p",null,"It provides standard contracts based on ",(0,r.kt)("a",{parentName:"p",href:"TODO"},"Polkadot Standard Proposals (PSPs)"),",\nas well as higher-level contracts and Rust macros that generate ink! code."),(0,r.kt)("p",null,"Using OpenBrush is simple, you only add the dependency to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file.\nYou can find an example ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbrush.io/smart-contracts/overview"},"here"),"."),(0,r.kt)("h3",{id:"which-standards-and-contract-components-does-it-contain"},"Which standards and contract components does it contain?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP22"),": Fungible Token (",(0,r.kt)("em",{parentName:"li"},"ERC20 equivalent"),") with extensions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP34"),": Non-Fungible Token (",(0,r.kt)("em",{parentName:"li"},"ERC721 equivalent"),") with extensions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP37"),": ",(0,r.kt)("em",{parentName:"li"},"ERC1155 equivalent")," with extensions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ownable")," Restrict access to action for non-owners."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Control"),": Define a set of roles and restrict access to an action by roles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reentrancy Guard"),": Prevent reentrant calls to a function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pausable"),": Pause/Unpause the contract to disable/enable some operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timelock Controller"),": Execute transactions with some delay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Splitter"),": Split the amount of native tokens between participants.")),(0,r.kt)("h3",{id:"generic-trait-implementation"},"Generic Trait Implementation"),(0,r.kt)("p",null,"OpenBrush adds support for generic Trait implementations, so that you can\nsplit a Trait and its implementation into different files. This can\nincrease the readability and maintainability of your smart-contract\ncode base (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md"},"detailed description"),")."),(0,r.kt)("h3",{id:"wrapper-around-traits"},"Wrapper around Traits"),(0,r.kt)("p",null,"OpenBrush simplifies cross-contract calls, a contract that implements a particular\nTrait is not needed to call it. A wrapper enables calling methods of that Trait\nfrom some contract in the network (do a cross contract call)."),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush Github repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openbrush.io/"},"Official Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openbrush.io/"},"OpenBrush website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I5OFGNVvzOc"},"Substrate Seminar (Youtube)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76"},"How to use modifiers"))),(0,r.kt)("h2",{id:"typechain-polkadot"},"Typechain-Polkadot"),(0,r.kt)("p",null,"Another tool helpful for ink! smart contracts development is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"Typechain-Polkadot"),"."),(0,r.kt)("p",null,"Typechain-Polkadot is used to generate Typescript wrappers around your smart contract.\nThis can be used for UI development or in integration tests of your ink! smart contracts.\nThe library uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-js/api"))," under the hood,\nbut is especially useful because all calls and queries are typed, therefore the chance of\ngetting some error during a call is mitigated."),(0,r.kt)("h2",{id:"sol2ink"},"Sol2Ink"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/sol2ink"},"Sol2Ink")," is a tool which can support migrations\nfrom Solidity to ink!. Solidity code is passed to Sol2Ink and converted to an ink! contract.\nThe tool can also be used to learn the differences between Solidity and ink! code."),(0,r.kt)("h3",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have any questions about how to use any of these tools, or just about the ink! smart contracts in general, you can join the ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"},"Brushfam element channel")," or ask a question on the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/"},"Substrate Stack Exchange"),"."))}u.isMDXComponent=!0}}]);