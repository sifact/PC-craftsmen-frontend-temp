(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{2496:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[categoryId]",function(){return t(4022)}])},3038:function(e,s,t){"use strict";t.d(s,{Z:function(){return m}});var n=t(5893),a=t(7294),r=t(5675),i=t.n(r),l=t(1664),c=t.n(l),d=()=>{let[e,s]=(0,a.useState)(!1);return(0,n.jsx)("div",{className:"flex  items-center ",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("div",{className:"cursor-pointer bg-white text-black text-small flex items-center justify-between gap-2 ",onClick:()=>s(!e),children:[(0,n.jsx)("span",{children:"Categories"}),(0,n.jsx)("img",{src:"/down.png",width:15,height:15,alt:""})]}),e&&(0,n.jsx)("div",{className:" flex flex-col gap-4 bg-white p-4 rounded-lg absolute top-8 shadow-lg text-black z-50 ",children:[{name:"cpu",path:"/cpu"},{name:"gpu",path:"/gpu"},{name:"monitor",path:"monitor"},{name:"motherboard",path:"/motherboard"},{name:"mouse",path:"/mouse"},{name:"ram",path:"/ram"},{name:"storageDevice",path:"/ssd"}].map((t,a)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c(),{href:"/categories/".concat(t.path),className:"cursor-pointer",onClick:()=>{s(!e)},children:t.name},a)}))})]})})},o=()=>{let[e,s]=(0,a.useState)(!1),t=()=>{s(!e)};return(0,n.jsxs)("div",{className:"shadow-md bg-white",children:[(0,n.jsx)("div",{className:"".concat(e?"block md:hidden":"hidden"," fixed z-50 bg-neutral-900/70  inset-0 "),children:(0,n.jsxs)("div",{style:{transition:"all 0.3s ease-in-out"},className:"\n                    translate duration-300 w-4/6 pt-20 pl-8 gap-4 h-full bg-primary flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue container mx-auto\n        \n\n        ",children:[(0,n.jsx)(i(),{onClick:t,className:" absolute top-4 left-4",src:"/images/icon-close.svg",alt:"Image",width:"12",height:"12"}),(0,n.jsx)(c(),{href:"/women",children:"Features"}),(0,n.jsx)(c(),{href:"/about",children:"Team"}),(0,n.jsx)(c(),{href:"/contact",children:"Sign In"})]})}),(0,n.jsxs)("div",{className:"flex items-center justify-between py-6 container mx-auto",children:[(0,n.jsxs)("div",{className:"flex gap-3 items-center justify-center",children:[(0,n.jsx)(i(),{onClick:t,className:"md:hidden",src:"/images/icon-menu.svg",alt:"Image",width:"15",height:"15"}),(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("h1",{className:"text-4xl",children:"PC craftsmen"})}),(0,n.jsxs)("div",{className:"ml-20 md:flex gap-5 hidden",children:[(0,n.jsx)(c(),{href:"/pcBuilder",children:"PC Builder"}),(0,n.jsx)("span",{children:(0,n.jsx)(d,{})})]})]}),(0,n.jsxs)("div",{className:"ml-20 md:flex gap-5 hidden",children:[(0,n.jsx)(c(),{href:"/profile",children:"Profile"}),(0,n.jsx)(c(),{href:"/login",children:"Login"})]})]})]})},h=()=>(0,n.jsx)("div",{children:"Footer"}),m=e=>{let{children:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"custom-min-height",children:s}),(0,n.jsx)(h,{})]})}},5269:function(e,s,t){"use strict";var n=t(5893);t(7294),s.Z=e=>{let{title:s,subtitle:t}=e;return(0,n.jsxs)("div",{className:"mb-20 container mx-auto",children:[(0,n.jsx)("h1",{className:"text-2xl text-gray-900 font-bold mb-2 text-center",children:s}),(0,n.jsx)("h1",{className:"text-sm text-gray-600 text-center",children:t})]})}},4022:function(e,s,t){"use strict";t.r(s),t.d(s,{CategoryProduct:function(){return o},__N_SSG:function(){return d}});var n=t(5893),a=t(3038);t(7294),t(1163);var r=t(5269),i=t(1664),l=t.n(i);let c=e=>{let{products:s,category:t}=e;return(0,n.jsxs)("div",{className:"my-20",children:[(0,n.jsx)(r.Z,{title:"".concat(t,"'s"),subtitle:"Discover our top-rated products crafted with care"}),(0,n.jsx)("div",{className:"mb-32 grid lg:grid-cols-3 md:grid-cols-2 gap-12 container mx-auto",children:s?s.map((e,s)=>(0,n.jsx)(o,{product:e},e._id)):(0,n.jsx)(n.Fragment,{children:"Loading..."})})]})};var d=!0;s.default=c,c.getLayout=function(e){return(0,n.jsx)(a.Z,{children:e})};let o=e=>{let{product:s}=e,{_id:t,title:a,img:r,category:i,price:c,status:d}=s;return(0,n.jsx)(l(),{href:"/product/".concat(null==s?void 0:s._id),children:(0,n.jsxs)("div",{className:"shadow-md bg-gray-100 h-auto rounded-md p-4",children:[(0,n.jsx)("div",{className:"h-[300px]",children:(0,n.jsx)("img",{className:"rounded-lg object-cover w-full h-full",src:r||peperoni,alt:"pizza"})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h2",{className:"text-lg font-bold py-2 ",children:a}),(0,n.jsx)("span",{className:"bg-gray-200 rounded-full text-sm px-4",children:i})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[(0,n.jsxs)("span",{className:"font-semibold",children:["Tk ",c]}),(0,n.jsx)("button",{className:"bg-amber-500 py-2 px-3 rounded-full",children:d?"In Stock":"Out of stock"})]})]})]})})}},1163:function(e,s,t){e.exports=t(6885)}},function(e){e.O(0,[61,774,888,179],function(){return e(e.s=2496)}),_N_E=e.O()}]);