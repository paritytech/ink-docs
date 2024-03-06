"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8803],{72138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=n(74848),s=n(28453);const r={title:"Overview",slug:"/testnet",hide_title:!0},c=void 0,a={id:"testnet/overview",title:"Overview",description:"Rococo Deployment",source:"@site/versioned_docs/version-3.x/testnet/overview.md",sourceDirName:"testnet",slug:"/testnet",permalink:"/3.x/testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/testnet/overview.md",tags:[],version:"3.x",frontMatter:{title:"Overview",slug:"/testnet",hide_title:!0},sidebar:"reference",previous:{title:"Overview",permalink:"/3.x/cargo-contract-cli"},next:{title:"OpenBrush",permalink:"/3.x/getting-started/openbrush"}},i={},h=[{value:"Rococo Deployment",id:"rococo-deployment",level:2},{value:"What is the <code>Contracts</code> parachain?",id:"what-is-the-contracts-parachain",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"rococo-deployment",children:"Rococo Deployment"}),"\n",(0,o.jsxs)(t.p,{children:["We have a live testnet named ",(0,o.jsx)(t.code,{children:"Contracts"})," as a parachain on ",(0,o.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet",children:"Rococo"})," \u2012\na testnet for Polkadot and Kusama parachains:"]}),"\n",(0,o.jsx)("div",{class:"schema",children:(0,o.jsx)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Smart contracts parachain on Rococo"})}),"\n",(0,o.jsxs)(t.p,{children:["You can interact with the network through Polkadot JS Apps,\n",(0,o.jsxs)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer",children:["click here for a direct link to the ",(0,o.jsx)(t.code,{children:"Contracts"})," parachain"]}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Our parachain uses the Rococo relay chain's native token (ROC) instead of having its own token.\nDue to this you'll need ROC in order to deploy contracts on our testnet."}),"\n",(0,o.jsxs)(t.p,{children:["As a first step, you should create an account. See ",(0,o.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-account-generation",children:"here"}),"\nfor a detailed guide."]}),"\n",(0,o.jsxs)(t.p,{children:["As a second step, you have to get ROC testnet tokens through the ",(0,o.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet",children:"Rococo Faucet"}),".\nThis is a chat room in which you need to write:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"!drip YOUR_SS_58_ADDRESS:1002\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The number ",(0,o.jsx)(t.code,{children:"1002"})," is the parachain id of ",(0,o.jsx)(t.code,{children:"Contracts"})," on Rococo, by supplying it the faucet will teleport ROC\ntokens directly to your account on the parachain."]}),"\n",(0,o.jsxs)(t.p,{children:["If everything worked out, the teleported ROC tokens will show up under\n",(0,o.jsxs)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts",children:['the "Accounts" tab for ',(0,o.jsx)(t.code,{children:"Contracts"})]}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Once you have ROC on ",(0,o.jsx)(t.code,{children:"Contracts"})," you can deploy a contract as you would normally.\nIf you're unsure about this, our ",(0,o.jsx)(t.a,{href:"https://docs.substrate.io/tutorials/smart-contracts//",children:"guided tutorial"}),"\nwill clarify that for you in no time."]}),"\n",(0,o.jsxs)(t.h2,{id:"what-is-the-contracts-parachain",children:["What is the ",(0,o.jsx)(t.code,{children:"Contracts"})," parachain?"]}),"\n",(0,o.jsxs)(t.p,{children:["It's a ",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"}),"\nparachain for smart contracts.\nWe configured it to use Substrate's smart contracts module \u2012 the\n",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,o.jsx)(t.code,{children:"contracts"})})," pallet \u2012 in\na default configuration."]}),"\n",(0,o.jsxs)(t.p,{children:["The code for this parachain can be found ",(0,o.jsxs)(t.a,{href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo",children:["in the ",(0,o.jsx)(t.code,{children:"cumulus"})," repository"]}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"pallet-contracts"})," takes smart contracts as WebAssembly blobs and defines an API\nfor everything a smart contract needs (storage access, \u2026).\nAs long as a programming language compiles to WebAssembly and there exists an implementation\nof this API in it, you can write a smart contract for this pallet \u2012 and thus for our the ",(0,o.jsx)(t.code,{children:"Contracts"}),"\nparachain \u2012 in that language."]}),"\n",(0,o.jsx)(t.p,{children:"This is a list of languages you can currently choose from:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"Parity's ink!"})," for Rust"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/patractlabs/ask",children:"ask!"})," for Assembly Script"]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/hyperledger-labs/solang",children:"Solang"})," compiler for Solidity"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The following graphic depicts the idea:"}),"\n",(0,o.jsx)("div",{class:"schema",children:(0,o.jsx)("img",{src:"/img/pallet-contracts-overview.svg",alt:"`pallet-contracts` Overview"})}),"\n",(0,o.jsx)(t.p,{children:"There are also different user interfaces and command-line tools you can use to deploy\nor interact with contracts:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://contracts-ui.substrate.io/",children:"Contracts UI"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/",children:"polkadot-js"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);