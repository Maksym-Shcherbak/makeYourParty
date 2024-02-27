import{u as n,G as D,a as S,r as c,J as K,M as Q,b as I,j as e,K as Z,h as X,O as Y,P as _,L as ee,Q as ne}from"./index-44c50096.js";import{M as te}from"./index-54378c6e.js";import{N as b}from"./notiflix-aio-3.2.7.min-07a5ce2b.js";import{C as ie,S as re}from"./Section-8ac4e6ea.js";const oe=n.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 118.75%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 107.43%;

    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 62px;
    line-height: 106.25%;
  }
`,ae=n.button`
  padding: 14px 40px;
  width: 107px;
  height: 46px;

  border-radius: 42px;
  border: 2px solid rgba(64, 112, 205, 0.5);

  font-size: 16px;
  font-weight: 600;
  line-height: 1.28571;

  background-color: #f3f3f3;
  color: #161f37;

  margin-bottom: 80px;
  transition: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  @media screen and (min-width: 768px) {
    line-height: 1.125;
    padding: 18px 44px;
    width: 118px;
    height: 54px;
  }

  &:hover {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
`,se=n.div`
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
  }
  @media screen and (min-width: 1440x) {
    column-gap: 40px;
  }
`,de=n.img`
  width: 100%;
  height: 100%;
  padding: 8px;

  border-radius: 18px;
`,ce=n.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,pe=n.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--main-color);
  color: #161f37;
  font-size: 28px;

  transition: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover {
    color: #f3f3f3;
    background: #4070cd;
  }
`,le=n.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`,xe=n.div`
  width: 280px;
  height: 280px;

  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);

  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,he=n.div`
  width: 280px;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  // margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    width: 393px;
    row-gap: 40px;
  }
`,k=n.input`
  width: 100%;
  height: 34px;

  color: #f3f3f3;
  font-size: 14px;

  border: none;
  background-color: transparent;

  padding: 0px 0px 14px 0px;

  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  @media screen and (min-width: 768px) {
    padding: 0px 0px 18px 0px;
  }
`,C=n.div`
  position: relative;
  text-align: center;
`,F=n.select`
  position: absolute;

  top: -4px;
  right: 0;

  width: 131px;
  height: 30px;
  // text-align: right;
  padding-left: 10px;

  border-radius: 12px;
  color: #f3f3f3;
  font-size: 14px;

  border: none;
  background-color: transparent;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`,A=n.option`
  color: rgba(243, 243, 243, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33333;
  background-color: #161f37;
  border: none;

  // text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`,ge=n.div`
  display: flex;
  column-gap: 14px;
`,z=n.span`
  width: 20px;
  height: 20px;

  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    font-size: 24px;
  }
`,L=n.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,N=n.label`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);

  display: flex;
  column-gap: 4px;
  align-items: center;
  cursor: pointer;

  &:hover ${z} {
    color: #f3f3f3;
  }

  &:hover {
    color: #f3f3f3;
  }

  &:focus ${z} {
    color: #f3f3f3;
  }

  &:focus {
    color: #f3f3f3;
  }
`;function me(r){return D({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(r)}function B(r){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"},child:[]}]})(r)}function R(r){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"},child:[]}]})(r)}const ue=({image:r,imageURL:p,handleOnChangeImage:s,drink:o,shortDescription:l,onChangeInput:g,category:m,glass:v,onChangeSelect:u,alcoholic:j,onChangeRadio:f})=>{const w=S();c.useEffect(()=>{w(K()),w(Q())},[w]);const t=I(i=>i.drinks.categories),d=I(i=>i.drinks.glasses);return e.jsxs(se,{children:[e.jsx(xe,{children:r?e.jsx(de,{src:p,alt:"drinkImage"}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{type:"file",name:"file",id:"uploadImage",onChange:s}),e.jsxs(le,{htmlFor:"uploadImage",children:[e.jsx(pe,{children:e.jsx(me,{})}),e.jsx("span",{children:"Add image"})]})]})}),e.jsxs(he,{children:[e.jsx(k,{type:"text",name:"drink",id:"drink",placeholder:"Enter item title",autoComplete:"off",value:o,onChange:g}),e.jsx(k,{type:"text",name:"shortDescription",id:"shortDescription",placeholder:"Enter about recipe",autoComplete:"off",value:l,onChange:g}),e.jsxs(C,{children:[e.jsx(k,{type:"text",name:"category",id:"category",placeholder:"Category",autoComplete:"off",value:m}),e.jsx(F,{name:"category",id:"categoryDrink",onChange:u,children:t.map(i=>e.jsx(A,{value:i,children:i},i))})]}),e.jsxs(C,{children:[e.jsx(k,{type:"text",name:"glass",id:"glass",placeholder:"Glass",autoComplete:"off",value:v}),e.jsx(F,{name:"glass",id:"glassDrink",htmlFor:"glass",onChange:u,children:d.map(i=>e.jsx(A,{value:i,children:i},i))})]}),e.jsxs(ge,{children:[e.jsxs(N,{htmlFor:"alcoholic",children:[e.jsx(z,{children:j==="Alcoholic"?e.jsx(R,{}):e.jsx(B,{})}),"Alcoholic",e.jsx(L,{type:"radio",name:"alcoholic",id:"alcoholic",value:"Alcoholic",onChange:f})]}),e.jsxs(N,{htmlFor:"non-alcoholic",children:[e.jsx(z,{children:j==="Non alcoholic"?e.jsx(R,{}):e.jsx(B,{})}),"Non-alcoholic",e.jsx(L,{type:"radio",name:"alcoholic",id:"non-alcoholic",value:"Non alcoholic",onChange:f})]})]})]})]})},fe=n.div`
  width: 280px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,we=n.h2`
  font-weight: 600;

  margin: 0;
  @media screen and (min-width: 375px) {
    font-size: 32px;
    line-height: 118.75%;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,be=n.div`
  width: 104px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`,T=n.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border: none;

  font-size: 26px;
  line-height: 1.28571;

  background-color: transparent;
  color: rgba(243, 243, 243, 0.3);
`,je=n.span`
  font-size: 14px;
  line-height: 1.28571;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,ye=n.ul`
  width: 280px;

  display: flex;
  flex-direction: column;
  row-gap: 18px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    row-gap: 24px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,ve=n.div`
  margin-bottom: 80px;
`,ke=n.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ie=n.div`
  display: flex;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    column-gap: 14px;
  }
`,ze=n.select`
  width: 160px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  padding: 12px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;

  background-color: transparent;
  color: rgba(243, 243, 243, 0.5);

  font-size: 12px;
  line-height: 1.28571;

  @media screen and (min-width: 375px) {
    width: 200px;

    padding: 16px 0px 16px 24px;
  }

  @media screen and (min-width: 768px) {
    width: 330px;

    font-size: 14px;
    line-height: 1.28571;
  }
  @media screen and (min-width: 1440px) {
    width: 315px;
  }
`,Se=n.option`
  background: #161f37;
  color: rgba(243, 243, 243, 0.4);

  font-size: 12px;
  line-height: 1.33333;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`,De=n.input`
  width: 80px;

  padding: 12px;

  background-color: transparent;
  color: #f3f3f3;

  font-size: 14px;
  line-height: 1.28571;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;

  @media screen and (min-width: 375px) {
    padding: 16px 18px;
    width: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`,Ce=n.button`
  // width: 18px;
  // height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  color: #f3f3f3;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,Fe=({ingredients:r,id:p,onHandleDeleteIngredient:s,onSelectHandleIng:o,onChangeInputCl:l})=>e.jsx(e.Fragment,{children:e.jsxs(ke,{children:[e.jsxs(Ie,{children:[e.jsx(ze,{"data-id":p,onChange:o,children:r.map(({ingredientId:g,title:m})=>e.jsx(Se,{value:g,children:m},m))}),e.jsx(De,{"data-id":p,type:"text",name:"measure",placeholder:"1 cl",min:1,autoComplete:"off",onChange:l})]}),e.jsx(Ce,{type:"button",onClick:()=>s(p),children:e.jsx(te,{})})]})}),Ae=({onChildData:r})=>{const[p,s]=c.useState(0),[o,l]=c.useState([]);c.useEffect(()=>{(()=>{r(o)})()},[r,o]);const g=S();c.useEffect(()=>{g(Z())},[g]);const m=I(t=>t.drinks.ingredients),v=()=>{s(d=>d+1);const t="a,s.dfa?"+Math.random()*1024.333+"adftghjftjfgjfgj";l(d=>[...d,{id:t,ingredientId:"",measure:""}])},u=()=>{s(t=>t-1),l(t=>[...t].slice(0,-1))},j=t=>{l(d=>[...d].filter(i=>i.id!==t)),s(d=>d-1)},f=t=>{const d=t.currentTarget.dataset.id,i=o.find(h=>h.id===d),y=o.map(h=>h.id!==i.id?h:{...i,ingredientId:t.target.value});l(y)},w=t=>{const d=t.currentTarget.dataset.id,i=o.find(h=>h.id===d),y=o.map(h=>h.id!==i.id?h:{...i,measure:t.target.value});l(y)};return e.jsxs(e.Fragment,{children:[e.jsxs(fe,{children:[e.jsx(we,{children:"Ingredients"}),e.jsxs(be,{children:[e.jsx(T,{type:"button",onClick:u,disabled:p===0&&!0,children:"-"}),e.jsx(je,{children:p}),e.jsx(T,{type:"button",onClick:v,children:"+"})]})]}),e.jsx(ve,{children:e.jsx(ye,{children:o.length>0&&o.map(({id:t})=>e.jsx(Fe,{ingredients:m,id:t,onHandleDeleteIngredient:j,onSelectHandleIng:f,onChangeInputCl:w},t))},o.id)})]})},Le=n.div`
  margin-bottom: 20px;
`,Ne=n.textarea`
  width: 280px;
  height: 184px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  background-color: transparent;
  color: #f3f3f3;

  padding: 16px 18px;

  resize: none;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 184px;
  }

  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: 480px;
  }
`,Be=n.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 118.75%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,Re=({instructions:r,onHandleTexteria:p})=>e.jsx(e.Fragment,{children:e.jsxs(Le,{children:[e.jsx(Be,{children:"Recipe Preparation"}),e.jsx(Ne,{name:"instructions",id:"instructions",placeholder:"Enter the recipe",value:r,onChange:p})]})}),Te=()=>{const r=S(),p=X(),[s,o]=c.useState(null),[l,g]=c.useState(""),[m,v]=c.useState(""),[u,j]=c.useState(""),[f,w]=c.useState("Beer"),[t,d]=c.useState("Balloon Glass"),[i,y]=c.useState(""),[h,W]=c.useState(""),[P,O]=c.useState([]),E=a=>{O(a)},M=a=>{const x=a.target.files[0];o(x),g(URL.createObjectURL(x))},U=a=>{const x=a.target.value;switch(a.target.name){case"drink":v(x);return;case"shortDescription":j(x);return;default:return}},G=a=>{const x=a.target.value;switch(a.target.name){case"category":w(x);return;case"glass":d(x);return;default:return}},H=a=>{const x=a.target.value;switch(x){case"Alcoholic":y(x);return;case"Non alcoholic":y(x);return;default:return}},q=a=>{W(a.target.value)},V=()=>{switch(""){case l:b.Notify.warning("Upload a photo of the drink");return;case m:b.Notify.warning("Fill in required fields - title");return;case u:b.Notify.warning("Fill in required fields - recipe");return;case f:b.Notify.warning("Fill in required fields - category");return;case t:b.Notify.warning("Fill in required fields - glass");return;case i:b.Notify.warning("Select the type of drink - alcoholic or non-alcoholic");return;case h:b.Notify.warning("Fill in required fields - recipe preparation");return;default:return}},$=a=>{a.preventDefault(),V();const x={image:s,drink:m,shortDescription:u,category:f,glass:t,alcoholic:i,instructions:h,ingredients:P};p("/my"),r(Y(x))};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:$,children:[e.jsx(ue,{image:s,imageURL:l,handleOnChangeImage:M,drink:m,shortDescription:u,onChangeInput:U,category:f,glass:t,onChangeSelect:G,alcoholic:i,onChangeRadio:H}),e.jsx(Ae,{onChildData:E}),e.jsx(Re,{instructions:h,onHandleTexteria:q}),e.jsx(ae,{type:"submit",children:"Add"})]})})},We=n.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`,Pe=n.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    column-gap: 32px;
    row-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`,Oe=n.li`
  width: 280px;
  display: flex;
  column-gap: 14px;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 313px;
  }
`,Ee=n.img`
  width: 90px;
  height: 90px;

  border-radius: 8px;
`,Me=n.div`
  width: 175px;
  height: 87px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 375px) {
    width: 232px;
  }
`,Ue=n.h4`
  font-size: 16px;
  line-height: 1.375;
  color: #f3f3f3;

  margin-bottom: 8px;
`,Ge=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(243, 243, 243, 0.5);

  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`,He=()=>{const r=S();c.useEffect(()=>{r(_())},[r]);const p=I(s=>s.drinks.populars);return e.jsxs(e.Fragment,{children:[e.jsx(We,{children:"Popular drinks"}),e.jsx(Pe,{children:p.map(({_id:s,drink:o,drinkThumb:l,description:g})=>e.jsx(ee,{to:`/drinks/${s}`,children:e.jsxs(Oe,{children:[e.jsx(Ee,{src:l,alt:o}),e.jsxs(Me,{children:[e.jsx(Ue,{children:o}),e.jsx(Ge,{children:g})]})]})},s))})]})},qe=n.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,Ve=n.div`
  @media screen and (min-width: 1440px) {
    width: 313px;
    margin-left: 94px;
  }
`,$e=n.h3`
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 24px;
  }
`,Je=n.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Ye=()=>e.jsx(ie,{children:e.jsxs(re,{children:[e.jsx(oe,{children:"Add Drink"}),e.jsxs(qe,{children:[e.jsx(Te,{}),e.jsxs(Ve,{children:[e.jsx($e,{children:"Follow Us"}),e.jsx(Je,{children:e.jsx(ne,{})}),e.jsx(He,{})]})]})]})});export{Ye as default};
