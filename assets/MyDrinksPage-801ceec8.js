import{a as k,c,a1 as E,C as y,a4 as C,r,V as w,a5 as d,j as e,a6 as S}from"./index-0fa1d55b.js";import{E as I,D as M,P as O}from"./Paginator-65ac289d.js";import{S as F,C as H}from"./Section-942e838f.js";import{P as L}from"./PageTitle-8df1f567.js";import"./blue_iced_tea_mobile@2x-cecc14df.js";import"./Pagination-4c7269df.js";const b=()=>{const a=k(),h=c(E),u=c(y),t=c(C),[n,m]=r.useState(0),i=w.useMediaQuery({query:"(min-width: 1440px)"}),x=i?9:8,[s,j]=r.useState(x);r.useEffect(()=>{j(i?9:8)},[i]);const l=(t==null?void 0:t.totalHits)||0;r.useEffect(()=>{a(d({page:n+1,limit:s}))},[a,n,s]);const D=async o=>{a(S({drinkId:o}));const P=l-1,p=P%s===0?Math.min(n+1,Math.ceil(P/s)-1):n;m(p),await Promise.all([a(d({page:p+1,limit:s}))])},g=Array.isArray(t)?t:t.data,f=o=>{m(o-1)};return e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsxs(H,{children:[e.jsx(L,{title:"My drinks"}),!h&&!u&&g.length===0?e.jsx(e.Fragment,{children:e.jsx(I,{})}):e.jsxs(e.Fragment,{children:[e.jsx(M,{drinks:g,text:"See more",onDelete:D}),e.jsx(O,{totalHits:l,itemsPerPage:s,onPageChange:f})]})]})})})};export{b as default};
