"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"End-to-End (E2E) Tests",hide_title:!0,slug:"/basics/contract-testing/end-to-end-e2e-testing"},i=void 0,s={unversionedId:"testing/e2e",id:"version-5.x/testing/e2e",title:"End-to-End (E2E) Tests",description:"E2E testing enables developers to write a test that will not only test the contract in an",source:"@site/versioned_docs/version-5.x/testing/e2e.md",sourceDirName:"testing",slug:"/basics/contract-testing/end-to-end-e2e-testing",permalink:"/es/5.x/basics/contract-testing/end-to-end-e2e-testing",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/e2e.md",tags:[],version:"5.x",frontMatter:{title:"End-to-End (E2E) Tests",hide_title:!0,slug:"/basics/contract-testing/end-to-end-e2e-testing"},sidebar:"reference",previous:{title:"Drink",permalink:"/es/5.x/basics/contract-testing/drink"},next:{title:"Testing with Chain Snapshots",permalink:"/es/5.x/basics/contract-testing/chain-snapshot"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"end-to-end-e2e-tests"},"End-to-End (E2E) Tests"),(0,r.kt)("p",null,"E2E testing enables developers to write a test that will not only test the contract in an\nisolated manner; instead the contract will be tested ",(0,r.kt)("em",{parentName:"p"},"together")," with all components that\nwill be involved on-chain \u2013 so from end to end. This way of testing resembles closely\nhow the contract will actually behave in production."),(0,r.kt)("p",null,"As part of the test, the contract will be compiled and deployed to a Substrate node that\nis running in the background. ink! offers API functions that enable developers to then\ninteract with the contract via transactions that they create and submit to the blockchain."),(0,r.kt)("p",null,"You as a developer can define assertions on the outcome of their transactions, such as checking\nfor state mutations, transaction failures or incurred gas costs."),(0,r.kt)("p",null,"Your chain configuration will be tested together with the smart contract. And if your\nchain has pallets that are involved with the smart contract execution, those will be\npart of the test execution as well."),(0,r.kt)("p",null,"ink! does not put any requirements on the Substrate node in the background \u2013 for example,\nyou can run a node that contains a snapshot of a live network."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following code example illustrates a basic E2E test for the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs"},"flipper example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink_e2e::test]\nasync fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n    // When the function is entered, the contract was already\n    // built in the background via `cargo contract build`.\n    // The `client` object exposes an interface to interact\n    // with the Substrate node.\n    \n    // given\n    let constructor = FlipperRef::new_default();\n\n    // when\n    let contract_acc_id = client\n        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)\n        .await\n        .expect("instantiate failed")\n        .account_id;\n\n    // then\n    let get = build_message::<FlipperRef>(contract_acc_id.clone())\n        .call(|flipper| flipper.get());\n    let get_res = client\n        .call(&ink_e2e::bob(), get, 0, None)\n        .await\n        .expect("get failed");\n    assert!(matches!(get_res.return_value(), false));\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"You can run the above test by going to the ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper")," folder in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/main"},"the ink! examples directory"),"."),(0,r.kt)("p",null,"Before you can run the test, you have to install a Substrate\nnode with ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),". By default e2e tests require that you install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},(0,r.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),". You do not need to run it in the background since the node is started for each test independently.\nTo install the latest version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git\n")),(0,r.kt)("p",null,"If you want to run any other node with ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," you need to change ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACTS_NODE")," environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"\n')),(0,r.kt)("p",null,"And finally execute the following command to start e2e test execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo test --features e2e-tests\n")))}d.isMDXComponent=!0}}]);