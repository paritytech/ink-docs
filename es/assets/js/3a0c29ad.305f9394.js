"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={title:"#[ink(selector = S:u32)]",slug:"/macros-attributes/selector"},l=void 0,s={unversionedId:"macros-attributes/selector",id:"version-4.0.0-alpha.1/macros-attributes/selector",title:"#[ink(selector = S:u32)]",description:"Aplicable a los mensajes y constructores ink!.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/macros-attributes/selector.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/selector",permalink:"/es/4.0.0-alpha.1/macros-attributes/selector",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/macros-attributes/selector.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"#[ink(selector = S:u32)]",slug:"/macros-attributes/selector"},sidebar:"reference",previous:{title:"#[ink(payable)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/payable"},next:{title:"#[ink(storage)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/storage"}},c={},i=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Controlar el selector de mensajes",id:"controlar-el-selector-de-mensajes",level:2}],u={toc:i};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aplicable a los mensajes y constructores ink!."),(0,a.kt)("p",null,"Por defecto ink! crea un selector para cada mensaje y constructor.\nEsto es necesario ya que el contrato es compilado a un Wasm blob y las funciones son invocadas invocando el\nselector, que identifica un m\xe9todo - los nombres de los m\xe9todos ya no est\xe1n disponibles en estas capas subyacentes."),(0,a.kt)("p",null,"Utilizando este atributo es posible especificar un selector de dispatch concreto para la entidad marcada. Esto permite que el autor de un contrato controle con precisi\xf3n los selectores de sus APIs, lo que permite cambiar el nombre de su API sin interrupciones."),(0,a.kt)("p",null,"Un selector debe ser un entero decodificable ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),". Por ejemplo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selector = 0xCAFEBABE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selector = 42"))),(0,a.kt)("p",null,"Una excepci\xf3n es el selector fallback ",(0,a.kt)("inlineCode",{parentName:"p"},"_"),", permitiendo que las llamadas a contratos no concuerden con ninguno\nde los otros selectores de mensajes se env\xeden a un mensaje fallback. Mensajes fallback pueden ser ",(0,a.kt)("inlineCode",{parentName:"p"},"payable"),"."),(0,a.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message, selector = 0xC0DECAFE)]\nfn my_message_1(&self) {}\n\n#[ink(message, selector = 42)]\nfn my_message_2(&self) {}\n\n#[ink(message, payable, selector = _)]\nfn my_fallback(&self) {}\n")),(0,a.kt)("p",null,"\u2026 Entonces el selector de ",(0,a.kt)("inlineCode",{parentName:"p"},"my_message_1")," es ",(0,a.kt)("inlineCode",{parentName:"p"},"[0xC0, 0xDE, 0xCA, 0xFE]")," y el selector de ",(0,a.kt)("inlineCode",{parentName:"p"},"my_message_2")," es ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 0, 0, 42]"),"\nya que configurar el selector manualmente anula el selector generado autom\xe1ticamente."),(0,a.kt)("h2",{id:"controlar-el-selector-de-mensajes"},"Controlar el selector de mensajes"),(0,a.kt)("p",null,"Cada mensaje y constructor ink! tiene un selector con el que el mensaje o constructor\nse puede identificar de forma \xfanica dentro del smart contract de ink!.\nLos selectores de mensaje o constructor no \xfanico conduce a un error de tiempo de compilaci\xf3n.\nEstos selectores principalmente pueden conducir el dispatch del contrato al llamarlo. "),(0,a.kt)("p",null,"Un autor de un smart contract ink! puede controlar el selector de un mensaje o constructor ink!\nutilizando la marca ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," flag. Un ejemplo se muestra a continuaci\xf3n:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        #[ink(selector = 0xDEADBEEF)] // Funciona en constructores tambien.\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: initial_value }\n        }\n\n        #[ink(message)]\n        #[ink(selector = 0xCAFEBABE)] // Puedes espec\xedficar el selector out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n        \n        #[ink(message, selector = 0xC0DECAFE)] // ...o especificar el selector inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);