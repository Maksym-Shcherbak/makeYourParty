import{u as e,L as f,G as u,j as t,I as w,r as h}from"./index-0b065139.js";import{P as b}from"./Pagination-a8b4c0b0.js";const k=e.li`
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
`,l=e.img`
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
`,j=e.h2`
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
`,y=e.p`
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
`;e.button`
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
`;e.button`
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
`;const D=e.div`
  position: absolute;
  margin-top: 24px;
  display: flex;
  bottom: 0;
  gap: 8px;
`,v=e.span`
  display: block;
  color: rgba(243, 243, 243, 0.5);
  margin-top: 5px;
`,I=e(f)`
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
`,z=e.button`
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
`;function L(i){return u({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(i)}const C=e(L)`
  color: #f3f3f3;

  &:hover,
  &:focus {
    color: #161f37;
  }
`,E=()=>t.jsx(w.Provider,{value:{className:"global-class-name",size:24},children:t.jsx(C,{})}),S=({id:i,url:r,title:o,alcoholic:n,description:a,text:p,handleDelete:x})=>{const[d,c]=h.useState(!1),s="/src/images/block@1x.webp",m="/src/images/block@2x.webp",g=()=>{c(!0)};return t.jsxs(k,{children:[d?t.jsx(l,{srcSet:`${s} 1x, ${m} 2x`,alt:"Default Cocktail"}):t.jsx(l,{src:r,alt:"Photo Cocktail",onError:g}),t.jsx(j,{children:o}),t.jsx(v,{children:n}),t.jsx(y,{children:a}),t.jsxs(D,{children:[t.jsx(I,{to:`/drinks/${i}`,children:p}),t.jsx(z,{onClick:x,children:t.jsx(E,{})})]})]})},M=e.ul`
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
`,W=({drinks:i,text:r,onDelete:o})=>t.jsx(M,{children:i==null?void 0:i.map(({_id:n,drink:a,alcoholic:p,shortDescription:x,drinkThumb:d})=>t.jsx(S,{id:n,title:a,alcoholic:p,description:x,text:r,url:d,handleDelete:()=>o(n)},n))}),$=({totalHits:i,itemsPerPage:r,onPageChange:o})=>{const[n,a]=h.useState(0),p=({selected:d},c)=>{const s=d+1;a(s-1),o(s,c)};h.useEffect(()=>{o(n+1,r)},[n,o]);const x=Math.ceil(i/r);return i<=r?null:t.jsx(b,{pageCount:x,onPageChange:p})};export{W as D,$ as P};
