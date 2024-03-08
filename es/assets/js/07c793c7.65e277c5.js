"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8280],{89410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var s=n(74848),a=n(28453);const i={title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},r=void 0,c={id:"macros-attributes/namespace",title:'#[ink(namespace = "\u2026")]',description:"Aplicable a los bloque de implementaci\xf3n de ink! trait.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/namespace.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/namespace",permalink:"/es/macros-attributes/namespace",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/namespace.md",tags:[],version:"current",frontMatter:{title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(message)]",permalink:"/es/macros-attributes/message"},next:{title:"#[ink(payable)]",permalink:"/es/macros-attributes/payable"}},o={},m=[{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/text/namespace.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.p,{children:"Aplicable a los bloque de implementaci\xf3n de ink! trait."}),"\n",(0,s.jsx)(t.p,{children:"Aplicado en bloques de implementaci\xf3n de ink! traits para eliminar la ambig\xfcedad de otros\nbloques de implementaci\xf3n trait con nombres iguales."}),"\n",(0,s.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[ink(namespace = "my_namespace")]\nimpl MyTrait for MyStorage {\n    #[ink(message)]\n    fn my_message(&self) {}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Estos cambia los selectores resultantes de todos los mensajes y  constructores ink! dentro de la implementaci\xf3n trait.\nPermitiendo as\xed la desambiguaci\xf3n entre implementaciones trait con mensajes superpuestos o nombres de constructores."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);