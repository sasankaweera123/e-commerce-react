"use strict";(self.webpackChunke_commerce_react=self.webpackChunke_commerce_react||[]).push([[621],{621:(e,t,c)=>{c.r(t),c.d(t,{default:()=>x});var r=c(43),s=c(807),n=c(282),d=c(139),i=c.n(d),a=c(852),l=c(579);const o=r.forwardRef(((e,t)=>{let{bsPrefix:c,className:r,striped:s,bordered:n,borderless:d,hover:o,size:h,variant:x,responsive:j,...m}=e;const u=(0,a.oU)(c,"table"),b=i()(r,u,x&&"".concat(u,"-").concat(x),h&&"".concat(u,"-").concat(h),s&&"".concat(u,"-").concat("string"===typeof s?"striped-".concat(s):"striped"),n&&"".concat(u,"-bordered"),d&&"".concat(u,"-borderless"),o&&"".concat(u,"-hover")),p=(0,l.jsx)("table",{...m,className:b,ref:t});if(j){let e="".concat(u,"-responsive");return"string"===typeof j&&(e="".concat(e,"-").concat(j)),(0,l.jsx)("div",{className:e,children:p})}return p})),h=()=>{const{products:e,cartItems:t,removeFromCart:c,getCartTotal:d}=(0,r.useContext)(s.Q);return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(o,{responsive:!0,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Product"}),(0,l.jsx)("th",{children:"Title"}),(0,l.jsx)("th",{children:"Price"}),(0,l.jsx)("th",{children:"Quantity"}),(0,l.jsx)("th",{children:"Total"}),(0,l.jsx)("th",{children:"Remove"})]})}),(0,l.jsx)("tbody",{children:e.map((e=>t[e.id]>0?(0,l.jsxs)("tr",{className:"cart-item",children:[(0,l.jsx)("td",{children:(0,l.jsx)("img",{src:e.image,alt:e.title})}),(0,l.jsx)("td",{children:e.title}),(0,l.jsx)("td",{children:e.price}),(0,l.jsx)("td",{children:t[e.id]}),(0,l.jsx)("td",{children:e.price*t[e.id]}),(0,l.jsx)("td",{children:(0,l.jsx)(n.A,{onClick:()=>c(e.id),children:"Remove"})})]},e.id):null))})]}),(0,l.jsxs)(o,{className:"cart-total",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"SubTotal"}),(0,l.jsx)("th",{children:"Tax"}),(0,l.jsx)("th",{children:"Shipping"}),(0,l.jsx)("th",{children:"Total"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:d()}),(0,l.jsxs)("td",{children:[18,"%"]}),(0,l.jsx)("td",{children:5}),(0,l.jsx)("td",{children:(()=>{let e=Number(d());return e=e+18*e/100+5,e.toFixed(2)})()})]})})]}),(0,l.jsx)(n.A,{children:"Checkout"})]})};const x=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Cart"}),(0,l.jsx)(h,{})]})}},282:(e,t,c)=>{c.d(t,{A:()=>o});var r=c(139),s=c.n(r),n=c(43),d=c(140),i=c(852),a=c(579);const l=n.forwardRef(((e,t)=>{let{as:c,bsPrefix:r,variant:n="primary",size:l,active:o=!1,disabled:h=!1,className:x,...j}=e;const m=(0,i.oU)(r,"btn"),[u,{tagName:b}]=(0,d.Am)({tagName:c,disabled:h,...j}),p=b;return(0,a.jsx)(p,{...u,...j,ref:t,disabled:h,className:s()(x,m,o&&"active",n&&"".concat(m,"-").concat(n),l&&"".concat(m,"-").concat(l),j.href&&h&&"disabled")})}));l.displayName="Button";const o=l}}]);
//# sourceMappingURL=621.cb0547be.chunk.js.map