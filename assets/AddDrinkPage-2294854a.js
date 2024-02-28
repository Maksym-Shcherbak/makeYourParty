import{u as t,G as F,a as S,r as c,W as X,Y,c as I,j as e,X as J,i as K,Z as Q,$ as _,L as ee,a0 as te}from"./index-0fa1d55b.js";import{M as ne}from"./index-8227777e.js";import{N as b}from"./notiflix-aio-3.2.7.min-d89f5289.js";import{C as ie,S as re}from"./Section-942e838f.js";const ae=t.h2`
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
`,oe=t.button`
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
`,se=t.div`
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
  }
  @media screen and (min-width: 1440x) {
    column-gap: 40px;
  }
`,de=t.img`
  width: 100%;
  height: 100%;
  padding: 8px;

  border-radius: 18px;
`,ce=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,pe=t.span`
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
`,le=t.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`,xe=t.div`
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
`,he=t.div`
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
`,k=t.input`
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
`,A=t.div`
  position: relative;
  text-align: center;
`,L=t.select`
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
`,N=t.option`
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
`,ge=t.div`
  display: flex;
  column-gap: 14px;
`,z=t.span`
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
`,W=t.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`,B=t.label`
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
`;function me(r){return F({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(r)}function R(r){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"},child:[]}]})(r)}function T(r){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"},child:[]}]})(r)}const ue=({image:r,imageURL:p,handleOnChangeImage:s,drink:a,shortDescription:l,onChangeInput:m,category:g,glass:v,onChangeSelect:u,alcoholic:j,onChangeRadio:f})=>{const w=S();c.useEffect(()=>{w(X()),w(Y())},[w]);const n=I(i=>i.drinks.categories),d=I(i=>i.drinks.glasses);return e.jsxs(se,{children:[e.jsx(xe,{children:r?e.jsx(de,{src:p,alt:"drinkImage"}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{type:"file",name:"file",id:"uploadImage",onChange:s}),e.jsxs(le,{htmlFor:"uploadImage",children:[e.jsx(pe,{children:e.jsx(me,{})}),e.jsx("span",{children:"Add image"})]})]})}),e.jsxs(he,{children:[e.jsx(k,{type:"text",name:"drink",id:"drink",placeholder:"Enter item title",autoComplete:"off",value:a,onChange:m}),e.jsx(k,{type:"text",name:"shortDescription",id:"shortDescription",placeholder:"Enter about recipe",autoComplete:"off",value:l,onChange:m}),e.jsxs(A,{children:[e.jsx(k,{type:"text",name:"category",id:"category",placeholder:"Category",autoComplete:"off",value:g}),e.jsx(L,{name:"category",id:"categoryDrink",onChange:u,children:n.map(i=>e.jsx(N,{value:i,children:i},i))})]}),e.jsxs(A,{children:[e.jsx(k,{type:"text",name:"glass",id:"glass",placeholder:"Glass",autoComplete:"off",value:v}),e.jsx(L,{name:"glass",id:"glassDrink",htmlFor:"glass",onChange:u,children:d.map(i=>e.jsx(N,{value:i,children:i},i))})]}),e.jsxs(ge,{children:[e.jsxs(B,{htmlFor:"alcoholic",children:[e.jsx(z,{children:j==="Alcoholic"?e.jsx(T,{}):e.jsx(R,{})}),"Alcoholic",e.jsx(W,{type:"radio",name:"alcoholic",id:"alcoholic",value:"Alcoholic",onChange:f})]}),e.jsxs(B,{htmlFor:"non-alcoholic",children:[e.jsx(z,{children:j==="Non alcoholic"?e.jsx(T,{}):e.jsx(R,{})}),"Non-alcoholic",e.jsx(W,{type:"radio",name:"alcoholic",id:"non-alcoholic",value:"Non alcoholic",onChange:f})]})]})]})]})},fe=t.div`
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
`,we=t.h2`
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
`,be=t.div`
  width: 104px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`,P=t.button`
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
`,je=t.span`
  font-size: 14px;
  line-height: 1.28571;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,ye=t.ul`
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
`,ve=t.div`
  margin-bottom: 80px;
`,ke=t.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ie=t.div`
  display: flex;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    column-gap: 14px;
  }
`,ze=t.select`
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
`,Se=t.option`
  background: #161f37;
  color: rgba(243, 243, 243, 0.4);

  font-size: 12px;
  line-height: 1.33333;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`,De=t.input`
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
`,Ce=t.button`
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
`,Fe=({ingredients:r,id:p,onHandleDeleteIngredient:s,onSelectHandleIng:a,onChangeInputCl:l})=>e.jsx(e.Fragment,{children:e.jsxs(ke,{children:[e.jsxs(Ie,{children:[e.jsx(ze,{"data-id":p,onChange:a,children:r.map(({ingredientId:m,title:g})=>e.jsx(Se,{value:m,"data-title":g,children:g},g))}),e.jsx(De,{"data-id":p,type:"text",name:"measure",placeholder:"1 cl",min:1,autoComplete:"off",onChange:l})]}),e.jsx(Ce,{type:"button",onClick:()=>s(p),children:e.jsx(ne,{})})]})}),Ae=({onChildData:r})=>{const[p,s]=c.useState(0),[a,l]=c.useState([]);c.useEffect(()=>{(()=>{r(a)})()},[r,a]);const m=S();c.useEffect(()=>{m(J())},[m]);const g=I(n=>n.drinks.ingredients),v=()=>{s(d=>d+1);const n="a,s.dfa?"+Math.random()*1024.333+"adftghjftjfgjfgj";l(d=>[...d,{id:n,ingredientId:"",measure:"",title:""}])},u=()=>{s(n=>n-1),l(n=>[...n].slice(0,-1))},j=n=>{l(d=>[...d].filter(i=>i.id!==n)),s(d=>d-1)},f=n=>{const d=n.currentTarget.dataset.id,i=a.find(h=>h.id===d),y=a.map(h=>{if(h.id!==i.id)return h;const D=g.filter(({ingredientId:C})=>C===n.target.value);return{...i,ingredientId:n.target.value,title:D[0].title}});l(y)},w=n=>{const d=n.currentTarget.dataset.id,i=a.find(h=>h.id===d),y=a.map(h=>h.id!==i.id?h:{...i,measure:n.target.value});l(y)};return e.jsxs(e.Fragment,{children:[e.jsxs(fe,{children:[e.jsx(we,{children:"Ingredients"}),e.jsxs(be,{children:[e.jsx(P,{type:"button",onClick:u,disabled:p===0&&!0,children:"-"}),e.jsx(je,{children:p}),e.jsx(P,{type:"button",onClick:v,children:"+"})]})]}),e.jsx(ve,{children:e.jsx(ye,{children:a.length>0&&a.map(({id:n})=>e.jsx(Fe,{ingredients:g,id:n,onHandleDeleteIngredient:j,onSelectHandleIng:f,onChangeInputCl:w},n))})})]})},Le=t.div`
  margin-bottom: 20px;
`,Ne=t.textarea`
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
`,We=t.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 118.75%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,Be=({instructions:r,onHandleTexteria:p})=>e.jsx(e.Fragment,{children:e.jsxs(Le,{children:[e.jsx(We,{children:"Recipe Preparation"}),e.jsx(Ne,{name:"instructions",id:"instructions",placeholder:"Enter the recipe",value:r,onChange:p})]})}),Re=()=>{const r=S(),p=K(),[s,a]=c.useState(null),[l,m]=c.useState(""),[g,v]=c.useState(""),[u,j]=c.useState(""),[f,w]=c.useState("Beer"),[n,d]=c.useState("Balloon Glass"),[i,y]=c.useState(""),[h,D]=c.useState(""),[C,E]=c.useState([]),O=o=>{E(o)},M=o=>{const x=o.target.files[0];a(x),m(URL.createObjectURL(x))},U=o=>{const x=o.target.value;switch(o.target.name){case"drink":v(x);return;case"shortDescription":j(x);return;default:return}},G=o=>{const x=o.target.value;switch(o.target.name){case"category":w(x);return;case"glass":d(x);return;default:return}},H=o=>{const x=o.target.value;switch(x){case"Alcoholic":y(x);return;case"Non alcoholic":y(x);return;default:return}},q=o=>{D(o.target.value)},V=()=>{switch(""){case l:return b.Notify.warning("Upload a photo of the drink"),!1;case g:return b.Notify.warning("Fill in required fields - title"),!1;case u:return b.Notify.warning("Fill in required fields - recipe"),!1;case f:return b.Notify.warning("Fill in required fields - category"),!1;case n:return b.Notify.warning("Fill in required fields - glass"),!1;case i:return b.Notify.warning("Select the type of drink - alcoholic or non-alcoholic"),!1;case h:return b.Notify.warning("Fill in required fields - recipe preparation"),!1;default:return!0}},$=o=>{o.preventDefault();const x={image:s,drink:g,shortDescription:u,category:f,glass:n,alcoholic:i,instructions:h,ingredients:C};V()&&r(Q(x)).then(()=>p("/my"))};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:$,children:[e.jsx(ue,{image:s,imageURL:l,handleOnChangeImage:M,drink:g,shortDescription:u,onChangeInput:U,category:f,glass:n,onChangeSelect:G,alcoholic:i,onChangeRadio:H}),e.jsx(Ae,{onChildData:O}),e.jsx(Be,{instructions:h,onHandleTexteria:q}),e.jsx(oe,{type:"submit",children:"Add"})]})})},Te=t.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`,Pe=t.ul`
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
`,Ee=t.li`
  width: 280px;
  display: flex;
  column-gap: 14px;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 313px;
  }
`,Oe=t.img`
  width: 90px;
  height: 90px;

  border-radius: 8px;
`,Me=t.div`
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
`,Ue=t.h4`
  font-size: 16px;
  line-height: 1.375;
  color: #f3f3f3;

  margin-bottom: 8px;
`,Ge=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(243, 243, 243, 0.5);

  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`,He=()=>{const r=S();c.useEffect(()=>{r(_())},[r]);const p=I(s=>s.drinks.populars);return e.jsxs(e.Fragment,{children:[e.jsx(Te,{children:"Popular drinks"}),e.jsx(Pe,{children:p.map(({_id:s,drink:a,drinkThumb:l,description:m})=>e.jsx(ee,{to:`/drinks/${s}`,children:e.jsxs(Ee,{children:[e.jsx(Oe,{src:l,alt:a}),e.jsxs(Me,{children:[e.jsx(Ue,{children:a}),e.jsx(Ge,{children:m})]})]})},s))})]})},qe=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,Ve=t.div`
  @media screen and (min-width: 1440px) {
    width: 313px;
    margin-left: 94px;
  }
`,$e=t.h3`
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 24px;
  }
`,Ze=t.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Qe=()=>e.jsx(ie,{children:e.jsxs(re,{children:[e.jsx(ae,{children:"Add Drink"}),e.jsxs(qe,{children:[e.jsx(Re,{}),e.jsxs(Ve,{children:[e.jsx($e,{children:"Follow Us"}),e.jsx(Ze,{children:e.jsx(te,{})}),e.jsx(He,{})]})]})]})});export{Qe as default};