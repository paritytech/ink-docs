"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},o=void 0,s={unversionedId:"macros-attributes/chain-extension",id:"macros-attributes/chain-extension",title:"#[ink::chain_extension]",description:"In the default configuration of the contracts-pallet a smart contract can only interact with the runtime",source:"@site/docs/macros-attributes/chain-extension.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/chain-extension",permalink:"/macros-attributes/chain-extension",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/chain-extension.md",tags:[],version:"current",frontMatter:{title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(topic)]",permalink:"/macros-attributes/topic"},next:{title:"Overview",permalink:"/datastructures/overview"}},l={},d=[{value:"Structure",id:"structure",level:2},{value:"Usage",id:"usage",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Details: <code>handle_status</code>",id:"details-handle_status",level:2},{value:"Usage: <code>handle_status</code> + <code>Result&lt;T, E&gt;</code> return type",id:"usage-handle_status--resultt-e-return-type",level:2},{value:"Combinations",id:"combinations",level:2},{value:"Error Code",id:"error-code",level:2},{value:"Example: Definition",id:"example-definition",level:2},{value:"Example: Environment",id:"example-environment",level:2},{value:"Example: Usage",id:"example-usage",level:2},{value:"Technical Limitations",id:"technical-limitations",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/text/chain-ext.svg",className:"titlePic"}),(0,r.kt)("p",null,"In the default configuration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts-pallet")," a smart contract can only interact with the runtime\nvia its well defined set of basic smart contract interface. This API already allows a whole variety of\ninteraction between the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts-pallet")," and the executed smart contract. For example it is possible\nto call and instantiate other smart contracts on the same chain, emit events, query context information\nor run built-in cryptographic hashing procedures."),(0,r.kt)("p",null,"If this basic set of features is not enough for a particular Substrate built blockchain it is possible\nto easily extend this API using the so-called chain extension feature."),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/venn.png",width:"50%"})),(0,r.kt)("p",null,"With chain extensions you can expose parts of your runtime logic\nto smart contract developers."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ink! repository contains ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"rand-extension")," example"),".\nThis is a complete example of a chain extension implemented in both ink! and Substrate.")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The interface consists of an error code that indicates lightweight errors\nas well as the definition of some chain extension methods."),(0,r.kt)("p",null,"The overall structure follows that of a simple Rust trait definition.\nThe error code is defined as an associated type definition of the trait definition.\nThe methods are defined as associated trait methods without implementation."),(0,r.kt)("p",null,"Chain extension methods must not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," receiver such as ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self"),"\nand must have inputs and output that implement SCALE codec. Their return value follows\nspecific rules that can be altered using the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status")," attribute and\nalternation between  ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," and Non-",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," types which are described in more detail below."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Usually the chain extension definition using this proc. macro is provided\nby the author of the chain extension in a separate crate.\nink! smart contracts using this chain extension simply depend on this crate\nand use its associated environment definition in order to make use of\nthe methods provided by the chain extension."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"There are two different attributes with which the chain extension methods\ncan be flagged:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ink(extension = N: u32)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Determines the unique function ID of the chain extension method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ink(handle_status = flag: bool)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Assumes that the returned status code of the chain extension method always indicates success and therefore always loads and decodes the output buffer of the call.")))),(0,r.kt)("p",null,"As with all ink! attributes multiple of them can either appear in a contiguous list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type Access = i32;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = i32;\n\n    #[ink(extension = 5, handle_status = false)]\n    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n")),(0,r.kt)("p",null,"\u2026or as multiple standalone ink! attributes applied to the same item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type Access = i32;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n  type ErrorCode = i32;\n\n  #[ink(extension = 5)]\n  #[ink(handle_status = false)]\n  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n")),(0,r.kt)("h2",{id:"details-handle_status"},"Details: ",(0,r.kt)("inlineCode",{parentName:"h2"},"handle_status")),(0,r.kt)("p",null,"Default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"By default all chain extension methods should return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, E>")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode>"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::ErrorCode")," represents the error code of the chain extension.\nThis means that a smart contract calling such a chain extension method first queries the returned\nstatus code of the chain extension method and only loads and decodes the output if the returned\nstatus code indicates a successful call.\nThis design was chosen as it is more efficient when no output besides the error\ncode is required for a chain extension call. When designing a chain extension try to utilize the\nerror code to return errors and only use the output buffer for information that does not fit in\na single ",(0,r.kt)("inlineCode",{parentName:"p"},"u32")," value."),(0,r.kt)("p",null,"A chain extension method that is flagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status = false")," assumes that the returned error code\nwill always indicate success. Therefore it will always load and decode the output buffer and loses\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode")," constraint for the call."),(0,r.kt)("p",null,"Note that if a chain extension method does not return ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, E>")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"E: From<Self::ErrorCode>"),",\nbut ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status = true")," it will still return a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, Self::ErrorCode>"),"."),(0,r.kt)("h2",{id:"usage-handle_status--resultt-e-return-type"},"Usage: ",(0,r.kt)("inlineCode",{parentName:"h2"},"handle_status")," + ",(0,r.kt)("inlineCode",{parentName:"h2"},"Result<T, E>")," return type"),(0,r.kt)("p",null,"Use both ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status = false")," and non-",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," return type for the same chain extension method\nif a call to it may never fail and never returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," type."),(0,r.kt)("h2",{id:"combinations"},"Combinations"),(0,r.kt)("p",null,"Due to the possibility to flag a chain extension method with ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status")," and either (1) return ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<T, E>"),"\nor (2) return just ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\nthere are 4 different cases with slightly varying semantics:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"handle_status")),(0,r.kt)("th",{parentName:"tr",align:"center"},"Returns ",(0,r.kt)("inlineCode",{parentName:"th"},"Result<T, E>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Effects"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The chain extension method is required to return a value of type ",(0,r.kt)("inlineCode",{parentName:"td"},"Result<T, E>")," where ",(0,r.kt)("inlineCode",{parentName:"td"},"E: From<Self::ErrorCode>"),". A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The chain extension method may return any non-",(0,r.kt)("inlineCode",{parentName:"td"},"Result")," type. A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer. The actual return type of the chain extension method is still ",(0,r.kt)("inlineCode",{parentName:"td"},"Result<T, Self::ErrorCode>")," when the chain extension method was defined to return a value of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The chain extension method is required to return a value of type ",(0,r.kt)("inlineCode",{parentName:"td"},"Result<T, E>"),". A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The chain extension method may return any non-",(0,r.kt)("inlineCode",{parentName:"td"},"Result")," type. A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly.")))),(0,r.kt)("h2",{id:"error-code"},"Error Code"),(0,r.kt)("p",null,"Every chain extension defines exactly one ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorCode")," using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = MyErrorCode;\n\n    // more definitions ...\n}\n")),(0,r.kt)("p",null,"The defined ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorCode")," must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"FromStatusCode")," which should be implemented as a\nmore or less trivial conversion from the ",(0,r.kt)("inlineCode",{parentName:"p"},"u32")," status code to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<(), Self::ErrorCode>"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok(())")," value indicates that the call to the chain extension method was successful."),(0,r.kt)("p",null,"By convention an error code of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," represents success.\nHowever, chain extension authors may use whatever suits their needs."),(0,r.kt)("h2",{id:"example-definition"},"Example: Definition"),(0,r.kt)("p",null,"In the below example a chain extension is defined that allows its users to read and write\nfrom and to the runtime storage using access privileges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Custom chain extension to read to and write from the runtime.\n#[ink::chain_extension]\npub trait RuntimeReadWrite {\n    type ErrorCode = ReadWriteErrorCode;\n\n    /// Reads from runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.\n    /// #[ink(extension = 1, returns_result = false)]\n    /// fn read(key: &[u8]) -> Vec<u8>;\n    ///\n    /// Reads from runtime storage.\n    ///\n    /// Returns the number of bytes read and up to 32 bytes of the\n    /// read value. Unused bytes in the output are set to 0.\n    ///\n    /// # Errors\n    ///\n    /// If the runtime storage cell stores a value that requires more than\n    /// 32 bytes.\n    ///\n    /// # Note\n    ///\n    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`\n    /// and may potentially return any `Self::ErrorCode` through its return value.\n    #[ink(extension = 2)]\n    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n\n    /// Writes into runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.\n    #[ink(extension = 3)]\n    fn write(key: &[u8], value: &[u8]);\n\n    /// Returns the access allowed for the key for the caller.\n    ///\n    /// # Note\n    ///\n    /// Assumes to never fail the call and therefore always returns `Option<Access>`.\n    #[ink(extension = 4, handle_status = false)]\n    fn access(key: &[u8]) -> Option<Access>;\n\n    /// Unlocks previously acquired permission to access key.\n    ///\n    /// # Errors\n    ///\n    /// If the permission was not granted.\n    ///\n    /// # Note\n    ///\n    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`\n    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.\n    #[ink(extension = 5, handle_status = false)]\n    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteErrorCode {\n  InvalidKey,\n  CannotWriteToKey,\n  CannotReadFromKey,\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteError {\n  ErrorCode(ReadWriteErrorCode),\n  BufferTooSmall { required_bytes: u32 },\n}\n\nimpl From<ReadWriteErrorCode> for ReadWriteError {\n  fn from(error_code: ReadWriteErrorCode) -> Self {\n    Self::ErrorCode(error_code)\n  }\n}\n\nimpl From<scale::Error> for ReadWriteError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub struct UnlockAccessError {\n  reason: String,\n}\n\nimpl From<scale::Error> for UnlockAccessError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum Access {\n  ReadWrite,\n  ReadOnly,\n  WriteOnly,\n}\n\nimpl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n  fn from_status_code(status_code: u32) -> Result<(), Self> {\n    match status_code {\n      0 => Ok(()),\n      1 => Err(Self::InvalidKey),\n      2 => Err(Self::CannotWriteToKey),\n      3 => Err(Self::CannotReadFromKey),\n      _ => panic!("encountered unknown status code"),\n    }\n  }\n}\n')),(0,r.kt)("p",null,"All the error types and other utility types used in the chain extension definition\nabove are often required to implement various traits such as SCALE's ",(0,r.kt)("inlineCode",{parentName:"p"},"Encode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Decode"),"\nas well as ",(0,r.kt)("inlineCode",{parentName:"p"},"scale-info"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeInfo")," trait."),(0,r.kt)("p",null,"A full example of the above chain extension definition can be seen\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs"},"here"),"."),(0,r.kt)("h2",{id:"example-environment"},"Example: Environment"),(0,r.kt)("p",null,"In order to allow ink! smart contracts to use the above defined chain extension it needs\nto be integrated into an ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," definition as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type RuntimeReadWrite = i32;\n\nuse ink::env::{Environment, DefaultEnvironment};\n\npub enum CustomEnvironment {}\n\nimpl Environment for CustomEnvironment {\n    const MAX_EVENT_TOPICS: usize =\n        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;\n\n    type AccountId = <DefaultEnvironment as Environment>::AccountId;\n    type Balance = <DefaultEnvironment as Environment>::Balance;\n    type Hash = <DefaultEnvironment as Environment>::Hash;\n    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;\n    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;\n\n    type ChainExtension = RuntimeReadWrite;\n}\n")),(0,r.kt)("p",null,"Above we defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEnvironment")," which defaults to ink!'s ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEnvironment"),"\nfor all constants and types but the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainExtension")," type which is assigned to our newly\ndefined chain extension."),(0,r.kt)("h2",{id:"example-usage"},"Example: Usage"),(0,r.kt)("p",null,"An ink! smart contract can use the above defined chain extension through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment"),"\ndefinition defined in the last example section using the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," macro parameter as\nshown below."),(0,r.kt)("p",null,"Note that chain extension methods are accessible through ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::extension()")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"self.extension()"),". For example as in ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::extension().read(..)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"self.extension().read(..)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink::contract(env = CustomEnvironment)]\nmod read_writer {\n\n    #[ink(storage)]\n    pub struct ReadWriter {}\n\n    impl ReadWriter {\n        #[ink(constructor)]\n        pub fn new() -> Self { Self {} }\n\n        #[ink(message)]\n        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .read(&key)\n        }\n\n        #[ink(message)]\n        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {\n            self.env()\n                .extension()\n                .read_small(&key)\n        }\n\n        #[ink(message)]\n        pub fn write(\n            &self,\n            key: Vec<u8>,\n            value: Vec<u8>,\n        ) -> Result<(), ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .write(&key, &value)\n        }\n\n        #[ink(message)]\n        pub fn access(&self, key: Vec<u8>) -> Option<Access> {\n            self.env()\n                .extension()\n                .access(&key)\n        }\n\n        #[ink(message)]\n        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {\n            self.env()\n                .extension()\n                .unlock_access(&key, access)\n        }\n    }\n\n    /// Custom chain extension to read to and write from the runtime.\n    #[ink::chain_extension]\n    pub trait RuntimeReadWrite {\n          type ErrorCode = ReadWriteErrorCode;\n          #[ink(extension = 1)]\n          fn read(key: &[u8]) -> Vec<u8>;\n          #[ink(extension = 2)]\n          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n          #[ink(extension = 3)]\n          fn write(key: &[u8], value: &[u8]);\n          #[ink(extension = 4, handle_status = false)]\n          fn access(key: &[u8]) -> Option<Access>;\n          #[ink(extension = 5, handle_status = false)]\n          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n    }\n\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteErrorCode {\n          InvalidKey,\n          CannotWriteToKey,\n          CannotReadFromKey,\n    }\n\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteError {\n          ErrorCode(ReadWriteErrorCode),\n          BufferTooSmall { required_bytes: u32 },\n    }\n    impl From<ReadWriteErrorCode> for ReadWriteError {\n         fn from(error_code: ReadWriteErrorCode) -> Self {\n             Self::ErrorCode(error_code)\n         }\n    }\n    impl From<scale::Error> for ReadWriteError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub struct UnlockAccessError {\n         reason: String,\n    }\n    impl From<scale::Error> for UnlockAccessError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum Access {\n         ReadWrite,\n         ReadOnly,\n         WriteOnly,\n    }\n    impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n         fn from_status_code(status_code: u32) -> Result<(), Self> {\n             match status_code {\n                 0 => Ok(()),\n                 1 => Err(Self::InvalidKey),\n                 2 => Err(Self::CannotWriteToKey),\n                 3 => Err(Self::CannotReadFromKey),\n                 _ => panic!("encountered unknown status code"),\n             }\n         }\n    }\n    pub enum CustomEnvironment {}\n    impl ink::env::Environment for CustomEnvironment {\n         const MAX_EVENT_TOPICS: usize =\n             <ink::env::DefaultEnvironment as ink::env::Environment>::MAX_EVENT_TOPICS;\n\n         type AccountId = <ink::env::DefaultEnvironment as ink::env::Environment>::AccountId;\n         type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;\n         type Hash = <ink::env::DefaultEnvironment as ink::env::Environment>::Hash;\n         type BlockNumber = <ink::env::DefaultEnvironment as ink::env::Environment>::BlockNumber;\n         type Timestamp = <ink::env::DefaultEnvironment as ink::env::Environment>::Timestamp;\n\n         type ChainExtension = RuntimeReadWrite;\n    }\n}\n')),(0,r.kt)("h2",{id:"technical-limitations"},"Technical Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Due to technical limitations it is not possible to refer to the ",(0,r.kt)("inlineCode",{parentName:"li"},"ErrorCode")," associated type\nusing ",(0,r.kt)("inlineCode",{parentName:"li"},"Self::ErrorCode")," anywhere within the chain extension and its defined methods.\nInstead chain extension authors should directly use the error code type when required.\nThis limitation might be lifted in future versions of ink!."),(0,r.kt)("li",{parentName:"ul"},"It is not possible to declare other chain extension traits as super traits or super\nchain extensions of another.")))}p.isMDXComponent=!0}}]);