import{u as i,L as f,G as u,j as t,I as w,r as h}from"./index-d88ef9a1.js";import{e as b,a as k,b as y,c as j}from"./blue_iced_tea_mobile@2x-cecc14df.js";import{P as v}from"./Pagination-1f42623f.js";const D=i.li`
  position: relative;
  display: block;
  max-width: 335px;
  min-height: 581px;
  font-size: 14px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    max-width: 342px;
    min-height: 650px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    min-height: 676px;
  }
`,m=i.img`
  display: block;
  max-width: 335px;
  max-height: 360px;
  background-color: rgba(22, 31, 55, 0.5);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    max-width: 342px;
    max-height: 650px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    max-height: 400px;
  }
`,I=i.h2`
  margin-top: 24px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  @media screen and (min-width: 375px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33333;
  }
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33333;
  }
`,z=i.p`
  margin-top: 24px;
  margin-bottom: 24px;
  padding-right: 2px;

  max-width: 335px;
  @media screen and (min-width: 375px) {
    max-width: 342px;
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;i.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 5px;
  border-radius: 42px;
  min-width: 143px;
  max-height: 46px;
  background-color: #161f37;
  color: #f3f3f3;
  border: inherit;
  @media screen and (min-width: 375px) {
    min-width: 160px;
    max-height: 54px;
  }
  &:hover {
    background-color: #263253;
  }
`;i.button`
  display: flex;

  justify-content: center;
  border-radius: 40px;
  padding: 15px 32px;
  max-width: 46px;
  max-height: 46px;

  background-color: #161f37;

  border: inherit;
  @media screen and (min-width: 768px) {
    max-width: 56px;
    max-height: 54px;
  }
  &:hover {
    background-color: #263253;
  }
`;const E=i.div`
  position: absolute;
  margin-top: 24px;
  display: flex;
  bottom: 0;
  gap: 8px;
`,C=i.span`
  display: block;
  color: rgba(243, 243, 243, 0.5);
  margin-top: 5px;
`,L=i(f)`
  border-radius: 42px;
  padding: 14px 40px;
  width: 143px;
  height: 46px;
  background: #161f37;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;

  &:hover,
  &:focus {
    background: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    width: 160px;
    height: 54px;
    font-size: 16px;
    line-height: 1.125;
  }
`,$=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  padding: 11px;
  width: 46px;
  height: 46px;
  background: #161f37;
  color: #f3f3f3;

  &:hover,
  &:focus {
    background: #f3f3f3;
  }

  &:hover svg,
  &:focus svg {
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`;function S(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(e)}const M=i(S)`
  color: #f3f3f3;

  &:hover,
  &:focus {
    color: #161f37;
  }
`,P=()=>t.jsx(w.Provider,{value:{className:"global-class-name",size:24},children:t.jsx(M,{})}),B=({id:e,url:o,title:r,alcoholic:n,description:a,text:p,handleDelete:x})=>{const[d,c]=h.useState(!1),s="/src/images/block@1x.webp",l="/src/images/block@2x.webp",g=()=>{c(!0)};return t.jsxs(D,{children:[d?t.jsx(m,{srcSet:`${s} 1x, ${l} 2x`,alt:"Default Cocktail"}):t.jsx(m,{src:o,alt:"Photo Cocktail",onError:g}),t.jsx(I,{children:r}),t.jsx(C,{children:n}),t.jsx(z,{children:a}),t.jsxs(E,{children:[t.jsx(L,{to:`/drinks/${e}`,children:p}),t.jsx($,{onClick:x,children:t.jsx(P,{})})]})]})},F=i.ul`
  display: grid;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 60px;
    margin-bottom: 80px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
`,Y=({drinks:e,text:o,onDelete:r})=>t.jsx(F,{children:e==null?void 0:e.map(({_id:n,drink:a,alcoholic:p,shortDescription:x,drinkThumb:d})=>t.jsx(B,{id:n,title:a,alcoholic:p,description:x,text:o,url:d,handleDelete:()=>r(n)},n))});i.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07143;
  }

  @media (min-width: 1044px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`;const W=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin: 90px auto;

  @media (min-width: 768px) {
    margin: 100px auto;
  }

  @media (min-width: 1044px) {
    gap: 86px;
    margin: 67px auto;
  }
`,G=i.img`
  height: 326px;

  @media (max-width: 767px) {
    content: url(${b});
    height: 247px;
  }

  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${k});
  }

  @media (min-width: 768px) {
    content: url(${y});
  }

  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${j});
  }
`,T=i.p`
  font-size: 14px;
  line-height: 1.28571;
  text-align: center;
  color: #f3f3f3;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
    padding-bottom: 140px;
  }

  @media (min-width: 1044px) {
    padding-bottom: 86px;
  }
`,q=()=>t.jsx(t.Fragment,{children:t.jsxs(W,{children:[t.jsx(G,{}),t.jsx(T,{children:"You haven't added any favorite cocktails yet"})]})}),A=({totalHits:e,itemsPerPage:o,onPageChange:r})=>{const[n,a]=h.useState(0),p=({selected:d},c)=>{const s=d+1;a(s-1),r(s,c)};h.useEffect(()=>{r(n+1,o)},[n,r]);const x=Math.ceil(e/o);return e<=o?null:t.jsx(v,{pageCount:x,onPageChange:p})};export{Y as D,q as E,A as P};
