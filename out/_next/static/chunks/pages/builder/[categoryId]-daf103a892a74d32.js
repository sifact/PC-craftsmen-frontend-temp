(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{1826:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/builder/[categoryId]",function(){return a(7569)}])},3038:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(5893),s=a(7294),i=a(5675),o=a.n(i),n=a(1664),l=a.n(n),c=()=>{let[e,t]=(0,s.useState)(!1);return(0,r.jsx)("div",{className:"flex  items-center ",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("div",{className:"cursor-pointer bg-white text-black text-small flex items-center justify-between gap-2 ",onClick:()=>t(!e),children:[(0,r.jsx)("span",{children:"Categories"}),(0,r.jsx)("img",{src:"/down.png",width:15,height:15,alt:""})]}),e&&(0,r.jsx)("div",{className:" flex flex-col gap-4 bg-white p-4 rounded-lg absolute top-8 shadow-lg text-black z-50 ",children:[{name:"cpu",path:"/cpu"},{name:"gpu",path:"/gpu"},{name:"monitor",path:"monitor"},{name:"motherboard",path:"/motherboard"},{name:"mouse",path:"/mouse"},{name:"ram",path:"/ram"},{name:"storageDevice",path:"/ssd"}].map((a,s)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l(),{href:"/categories/".concat(a.path),className:"cursor-pointer",onClick:()=>{t(!e)},children:a.name},s)}))})]})})},d=()=>{let[e,t]=(0,s.useState)(!1),a=()=>{t(!e)};return(0,r.jsxs)("div",{className:"shadow-md bg-white",children:[(0,r.jsx)("div",{className:"".concat(e?"block md:hidden":"hidden"," fixed z-50 bg-neutral-900/70  inset-0 "),children:(0,r.jsxs)("div",{style:{transition:"all 0.3s ease-in-out"},className:"\n                    translate duration-300 w-4/6 pt-20 pl-8 gap-4 h-full bg-primary flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue container mx-auto\n        \n\n        ",children:[(0,r.jsx)(o(),{onClick:a,className:" absolute top-4 left-4",src:"/images/icon-close.svg",alt:"Image",width:"12",height:"12"}),(0,r.jsx)(l(),{href:"/women",children:"Features"}),(0,r.jsx)(l(),{href:"/about",children:"Team"}),(0,r.jsx)(l(),{href:"/contact",children:"Sign In"})]})}),(0,r.jsxs)("div",{className:"flex items-center justify-between py-6 container mx-auto",children:[(0,r.jsxs)("div",{className:"flex gap-3 items-center justify-center",children:[(0,r.jsx)(o(),{onClick:a,className:"md:hidden",src:"/images/icon-menu.svg",alt:"Image",width:"15",height:"15"}),(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("h1",{className:"text-4xl",children:"PC craftsmen"})}),(0,r.jsxs)("div",{className:"ml-20 md:flex gap-5 hidden",children:[(0,r.jsx)(l(),{href:"/pcBuilder",children:"PC Builder"}),(0,r.jsx)("span",{children:(0,r.jsx)(c,{})})]})]}),(0,r.jsxs)("div",{className:"ml-20 md:flex gap-5 hidden",children:[(0,r.jsx)(l(),{href:"/profile",children:"Profile"}),(0,r.jsx)(l(),{href:"/login",children:"Login"})]})]})]})},p=()=>(0,r.jsx)("div",{children:"Footer"}),m=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)("div",{className:"custom-min-height",children:t}),(0,r.jsx)(p,{})]})}},5269:function(e,t,a){"use strict";var r=a(5893);a(7294),t.Z=e=>{let{title:t,subtitle:a}=e;return(0,r.jsxs)("div",{className:"mb-20 container mx-auto",children:[(0,r.jsx)("h1",{className:"text-2xl text-gray-900 font-bold mb-2 text-center",children:t}),(0,r.jsx)("h1",{className:"text-sm text-gray-600 text-center",children:a})]})}},7569:function(e,t,a){"use strict";let r,s;a.r(t),a.d(t,{CategoryProduct:function(){return eo},__N_SSG:function(){return es},default:function(){return ei}});var i,o=a(5893),n=a(3038),l=a(7294),c=a(5269),d=a(1664),p=a.n(d),m=a(1649);let u={data:""},h=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||u,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,x=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,b=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?b(o,i):i+"{"+b(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=b(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=b.p?b.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},y={},v=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+v(e[a]);return t}return e},j=(e,t,a,r,s)=>{var i;let o=v(e),n=y[o]||(y[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!y[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=f.exec(e.replace(x,""));)t[4]?r.shift():t[3]?(a=t[3].replace(g," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(g," ").trim();return r[0]})(e);y[n]=b(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&y.g?y.g:null;return a&&(y.g=y[n]),i=y[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},w=(e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":b(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function N(e){let t=this||{},a=e.call?e(t.p):e;return j(a.unshift?a.raw?w(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,h(t.target),t.g,t.o,t.k)}N.bind({g:1});let k,_,E,$=N.bind({k:1});function C(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:_&&_()},n),a.o=/ *go\d+/.test(l),n.className=N.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),E&&c[0]&&E(n),k(c,n)}return t?t(s):s}}var z=e=>"function"==typeof e,I=(e,t)=>z(e)?e(t):e,F=(r=0,()=>(++r).toString()),A=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},P=new Map,O=e=>{if(P.has(e))return;let t=setTimeout(()=>{P.delete(e),Z({type:4,toastId:e})},1e3);P.set(e,t)},S=e=>{let t=P.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?T(e,{type:1,toast:a}):T(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?O(r):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},D=[],L={toasts:[],pausedAt:void 0},Z=e=>{L=T(L,e),D.forEach(e=>{e(L)})},B=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||F()}),M=e=>(t,a)=>{let r=B(t,e,a);return Z({type:2,toast:r}),r.id},X=(e,t)=>M("blank")(e,t);X.error=M("error"),X.success=M("success"),X.loading=M("loading"),X.custom=M("custom"),X.dismiss=e=>{Z({type:3,toastId:e})},X.remove=e=>Z({type:4,toastId:e}),X.promise=(e,t,a)=>{let r=X.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(X.success(I(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{X.error(I(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var q=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${$`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,H=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=C("div")`
  position: absolute;
`,J=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?l.createElement(K,null,t):t:"blank"===a?null:l.createElement(J,null,l.createElement(G,{...r}),"loading"!==a&&l.createElement(R,null,"error"===a?l.createElement(q,{...r}):l.createElement(H,{...r})))},U=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,V=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,W=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ee=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[U(a),V(a)];return{animation:t?`${$(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};l.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?ee(e.position||t||"top-center",e.visible):{opacity:0},i=l.createElement(Q,{toast:e}),o=l.createElement(Y,{...e.ariaProps},I(e.message,e));return l.createElement(W,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:o}):l.createElement(l.Fragment,null,i,o))}),i=l.createElement,b.p=void 0,k=i,_=void 0,E=void 0,N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var et=a(1163),ea=a(26);let er=e=>{let{products:t,category:a}=e;return(0,o.jsxs)("div",{className:"my-20",children:[(0,o.jsx)(c.Z,{title:"".concat(a,"'s"),subtitle:"Discover our top-rated products crafted with care"}),(0,o.jsx)("div",{className:"mb-32 grid lg:grid-cols-3 md:grid-cols-2 gap-12 container mx-auto",children:t?t.map((e,t)=>(0,o.jsx)(eo,{product:e},e._id)):(0,o.jsx)(o.Fragment,{children:"Loading..."})})]})};var es=!0,ei=er;er.getLayout=function(e){return(0,o.jsx)(n.Z,{children:e})};let eo=e=>{let{product:t}=e,a=(0,m.I0)(),r=(0,et.useRouter)(),s=e=>{a((0,ea.Xq)(e)),X.success({description:"Product Added"}),r.push("/pcBuilder")},{_id:i,title:n,img:l,category:c,price:d,status:u}=t;return(0,o.jsxs)("div",{className:"shadow-md bg-gray-100 h-auto rounded-md p-4",children:[(0,o.jsx)(p(),{href:"/product/".concat(null==t?void 0:t._id),children:(0,o.jsx)("div",{className:"h-[300px]",children:(0,o.jsx)("img",{className:"rounded-lg object-cover w-full h-full",src:l||peperoni,alt:"pizza"})})}),(0,o.jsx)(p(),{href:"/product/".concat(null==t?void 0:t._id),children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("h2",{className:"text-lg font-bold py-2 ",children:n}),(0,o.jsx)("span",{className:"bg-gray-200 rounded-full text-sm px-4",children:c})]}),(0,o.jsxs)("div",{className:"flex justify-between items-center mt-4 mb-4",children:[(0,o.jsxs)("span",{className:"font-semibold",children:["Tk ",d]}),(0,o.jsx)("button",{className:"border-2 border-amber-500 py-2 px-5 font-bold rounded-full",children:u?"In Stock":"Out of stock"})]})]})}),(0,o.jsx)("button",{className:"bg-amber-500 py-2 px-5 rounded-sm rounded-bl-[15%] font-semibold",onClick:()=>s(t),children:"Add to builder"})]})}},1163:function(e,t,a){e.exports=a(6885)}},function(e){e.O(0,[61,774,888,179],function(){return e(e.s=1826)}),_N_E=e.O()}]);