import{a as k,b as c,Y as E,x as y,a0 as w,r,R as C,a1 as d,j as e,a2 as S}from"./index-da4514d5.js";import{E as I,D as M,P as O}from"./Paginator-0aaa94e2.js";import{S as F,C as H}from"./Section-0101e667.js";import{P as L}from"./PageTitle-06bfe8fc.js";import"./blue_iced_tea_mobile@2x-cecc14df.js";import"./Pagination-069a4fec.js";const Y=()=>{const a=k(),x=c(E),h=c(y),t=c(w),[n,m]=r.useState(0),i=C.useMediaQuery({query:"(min-width: 1440px)"}),u=i?9:8,[s,j]=r.useState(u);r.useEffect(()=>{j(i?9:8)},[i]);const l=(t==null?void 0:t.totalHits)||0;r.useEffect(()=>{a(d({page:n+1,limit:s}))},[a,n,s]);const D=async o=>{a(S({drinkId:o}));const P=l-1,p=P%s===0?Math.min(n+1,Math.ceil(P/s)-1):n;m(p),await Promise.all([a(d({page:p+1,limit:s}))])},g=Array.isArray(t)?t:t.data,f=o=>{m(o-1)};return e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsxs(H,{children:[e.jsx(L,{title:"My drinks"}),!x&&!h&&g.length===0?e.jsx(e.Fragment,{children:e.jsx(I,{})}):e.jsxs(e.Fragment,{children:[e.jsx(M,{drinks:g,text:"See more",onDelete:D}),e.jsx(O,{totalHits:l,itemsPerPage:s,onPageChange:f})]})]})})})};export{Y as default};