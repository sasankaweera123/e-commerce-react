"use strict";(self.webpackChunke_commerce_react=self.webpackChunke_commerce_react||[]).push([[731],{6731:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var d=t(5043),s=t(7807),c=t(7420),n=t(4196),a=t(4282),i=t(7154),o=t(7063),l=t(4452),h=t(579);const u=()=>{const{products:e}=(0,d.useContext)(s.Q),{users:r,productOrders:t}=(0,d.useContext)(c.t),u=["Order Placed","Order Confirmed","Order Shipped","Order Delivered","Order Cancelled"],[x,p]=(0,d.useState)({productId:"",userId:"",status:""}),j=e=>{p({...x,status:e.target.value})},m=r=>{let t=0;return r.products.forEach((r=>{const d=e.find((e=>e.id===r.productId));d&&(t+=r.quantity*d.price)})),t};return(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"product-orders",children:(0,h.jsxs)(n.A,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"User Name"}),(0,h.jsx)("th",{children:"Product Name"}),(0,h.jsx)("th",{children:"Product Quantity"}),(0,h.jsx)("th",{children:"Total Price"}),(0,h.jsx)("th",{children:"Order Date"}),(0,h.jsx)("th",{colSpan:"2",children:"Order Status"})]})}),(0,h.jsx)("tbody",{children:t.map((t=>{return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:r.find((e=>e.id===t.userId)).name}),(0,h.jsx)("td",{children:(0,h.jsx)("ul",{children:t.products.map((r=>{const t=e.find((e=>e.id===r.productId));return(0,h.jsx)("li",{children:t?t.title:"Unknown Product"},r.productId)}))})}),(0,h.jsx)("td",{children:(0,h.jsx)("ul",{children:t.products.map((e=>(0,h.jsx)("li",{children:e.quantity},e.productId)))})}),(0,h.jsxs)("td",{children:["$",m(t)]}),(0,h.jsx)("td",{children:(d=t.date,new Date(d).toLocaleDateString())}),(0,h.jsx)("td",{children:(0,h.jsx)("select",{onChange:j,children:u.map((e=>(0,h.jsx)("option",{value:e,children:e},e)))})}),(0,h.jsx)("td",{children:(0,h.jsxs)(a.A,{onClick:()=>(t.id,void i.A.put(o.U.UPDATE_PRODUCT,x).then((e=>{console.log(e),alert("Order status updated")})).catch((e=>{console.log(e)}))),children:[(0,h.jsx)("span",{children:(0,h.jsx)(l.A,{})}),"Update"]})})]},t.id);var d}))})]})})})};t(3871);const x=()=>{const{isAdmin:e}=(0,d.useContext)(c.t);return(0,h.jsxs)("div",{className:e?"":"admin-pages",children:[(0,h.jsx)("div",{className:"container admin-user",children:(0,h.jsx)("h1",{children:"Admin Products"})}),(0,h.jsx)(u,{})]})}},4452:(e,r,t)=>{var d=t(4994);r.A=void 0;var s=d(t(39)),c=t(579);r.A=(0,s.default)((0,c.jsx)("path",{d:"M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4 8 7.99z"}),"UpgradeOutlined")},4282:(e,r,t)=>{t.d(r,{A:()=>l});var d=t(8139),s=t.n(d),c=t(5043),n=t(4140),a=t(7852),i=t(579);const o=c.forwardRef(((e,r)=>{let{as:t,bsPrefix:d,variant:c="primary",size:o,active:l=!1,disabled:h=!1,className:u,...x}=e;const p=(0,a.oU)(d,"btn"),[j,{tagName:m}]=(0,n.Am)({tagName:t,disabled:h,...x}),v=m;return(0,i.jsx)(v,{...j,...x,ref:r,disabled:h,className:s()(u,p,l&&"active",c&&"".concat(p,"-").concat(c),o&&"".concat(p,"-").concat(o),x.href&&h&&"disabled")})}));o.displayName="Button";const l=o},4196:(e,r,t)=>{t.d(r,{A:()=>i});var d=t(8139),s=t.n(d),c=t(5043),n=t(7852),a=t(579);const i=c.forwardRef(((e,r)=>{let{bsPrefix:t,className:d,striped:c,bordered:i,borderless:o,hover:l,size:h,variant:u,responsive:x,...p}=e;const j=(0,n.oU)(t,"table"),m=s()(d,j,u&&"".concat(j,"-").concat(u),h&&"".concat(j,"-").concat(h),c&&"".concat(j,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),i&&"".concat(j,"-bordered"),o&&"".concat(j,"-borderless"),l&&"".concat(j,"-hover")),v=(0,a.jsx)("table",{...p,className:m,ref:r});if(x){let e="".concat(j,"-responsive");return"string"===typeof x&&(e="".concat(e,"-").concat(x)),(0,a.jsx)("div",{className:e,children:v})}return v}))},3871:()=>{}}]);
//# sourceMappingURL=731.b378559f.chunk.js.map