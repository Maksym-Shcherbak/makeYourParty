import{a as k,b as c,r as n,H as E,S as h,j as e,c as y,T as w}from"./index-44c50096.js";import{E as C,D as S,P as I}from"./Paginator-a626c7c7.js";import{s as M,a as O,e as H}from"./drinksSelectors-9def1c59.js";import{S as L,C as F}from"./Section-8ac4e6ea.js";import{P as T}from"./PageTitle-782212d6.js";import"./blue_iced_tea_mobile@2x-cecc14df.js";import"./Pagination-94d231fb.js";const G=()=>{const a=k(),m=c(M),l=c(O),t=c(H),[r,g]=n.useState(0),i=E.useMediaQuery({query:"(min-width: 1440px)"}),u=i?9:8,[s,j]=n.useState(u);n.useEffect(()=>{j(i?9:8)},[i]);const p=(t==null?void 0:t.totalHits)||0;n.useEffect(()=>{a(h({page:r+1,limit:s}))},[a,r,s]);const f=async o=>{a(w({drinkId:o}));const d=p-1,x=d%s===0?Math.min(r+1,Math.ceil(d/s)-1):r;g(x),await Promise.all([a(h({page:x+1,limit:s}))])},P=Array.isArray(t)?t:t.data,D=o=>{g(o-1)};return e.jsx(e.Fragment,{children:e.jsx(L,{children:e.jsxs(F,{children:[e.jsx(T,{title:"My drinks"}),m&&!l&&e.jsx(y,{}),!m&&!l&&P.length===0?e.jsx(e.Fragment,{children:e.jsx(C,{})}):e.jsxs(e.Fragment,{children:[e.jsx(S,{drinks:P,text:"See more",onDelete:f}),e.jsx(I,{totalHits:p,itemsPerPage:s,onPageChange:D})]})]})})})};export{G as default};
