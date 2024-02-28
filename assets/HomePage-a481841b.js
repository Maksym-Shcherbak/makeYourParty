import{u as t,L as c,j as i,a as o,r as d,g as x,b as l}from"./index-075ea953.js";import{P as p}from"./PageTitle-9a6d9924.js";import{C as h,S as g}from"./Section-99781750.js";import{e as f,a as u,b as w,c as j}from"./blue_iced_tea_mobile@2x-cecc14df.js";import{U as b,a as k,b as y,c as D,d as L}from"./UtilsMainDrinks-2cc0788e.js";const m=t(c)`
  display: inline-flex;
  align-items: center;
  border-radius: 42px;
  padding: 18px 44px;
  background: #f3f3f3;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: black;
  &:hover{
    background-color: inherit;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid;
    border-color: rgba(243, 243, 243, 0.5);
    color: rgba(243, 243, 243, 0.5);
  }
`,H=t.li`
  display: flex;
  justify-content: center;
`,M=t.p`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.42857;
  
  color: --main-color;
  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.33333;
   
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
   
  }
  
`,S=t.section`
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 118px;
   
  }
  
`,U=t.div`
  margin-bottom: 45px;
  @media screen and (min-width: 1440px) { 
    width: 715px;
    margin-bottom:0;
    
   
  }
  
`,z=t.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    width: 359px;
   
  }
  
`,C=t.img`
 
  height: 313px;
  margin: 0 auto;

  @media (max-width: 767px) {
    content: url(${f});
  
  }
  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${u});
     
  }
  @media (min-width: 768px) {
    content: url(${w});
    
  }
  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${j});
    height: 445px;
  }
   @media screen and (min-width: 1440px) {
    height: 445px;
    margin: 0;
   
  }
`,P=t.li`
  display: flex;
	flex-direction: column;
  
  @media screen and (max-width: 767px) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 342px;
    min-height: 398px;
    &:nth-last-child(-n + 1) {
      display: none;
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    min-height: 438px;
  }
`,I=({title:e,url:n,text:r,id:s})=>i.jsx(P,{children:i.jsxs(b,{to:`/drinks/${s}`,children:[i.jsx(k,{src:n,alt:"Photo drinks"}),i.jsxs(y,{children:[i.jsx(D,{children:e}),i.jsx(L,{children:r})]})]})}),$=t.ul`
  margin-bottom: 40px;
  display: flex;
	flex-direction: row;
	gap: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  
   
  }

`,v=t.h2`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    color: -main-color;
   
  }


`,E=({header:e,data:n})=>i.jsxs(i.Fragment,{children:[i.jsx(v,{children:e}),i.jsx($,{children:n==null?void 0:n.map(({drink:r,drinkThumb:s,_id:a})=>i.jsx(I,{title:r,text:"see more",url:s,id:a},a))})]}),T=({drinks:e})=>{const n=o();d.useEffect(()=>{n(x())},[n]);let r=Array.isArray(e)?e:Object.keys(e.drinks);return i.jsx(i.Fragment,{children:i.jsxs("ul",{children:[r.map(s=>i.jsx(E,{header:s,data:e.drinks[s]},s)),i.jsx(H,{children:i.jsx(m,{to:"/drinks",children:"Other drinks"})})]})})},Y=()=>{const e=o();d.useEffect(()=>{e(x())},[e]);const n=l(r=>r.drinks.main);return i.jsxs(h,{children:[i.jsxs(S,{children:[i.jsxs(U,{children:[i.jsx(p,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(M,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(m,{to:"/add",children:"Add drink"})]}),i.jsx(z,{children:i.jsx(C,{})})]}),i.jsx(g,{children:i.jsx(T,{drinks:n})})]})};export{Y as default};
