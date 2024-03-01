import{u as n,L as d,j as i,a as x,r as m,g as l,b as c}from"./index-90d2c636.js";import{e as p,a as h,b as g,c as w,P as f}from"./blue_iced_tea_mobile@2x-d3733771.js";import{C as u,S as j}from"./Section-75b32fad.js";import{U as b,a as k,b as y,c as D,d as L}from"./UtilsMainDrinks-62a2a0b8.js";const o=n(d)`
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
`,H=n.li`
  display: flex;
  justify-content: center;
`,M=n.p`
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
  
`,S=n.section`
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 118px;
   
  }
  
`,U=n.div`
  margin-bottom: 45px;
  @media screen and (min-width: 1440px) { 
    width: 715px;
    margin-bottom:0;
    
   
  }
  
`,z=n.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    width: 359px;
   
  }
  
`,C=n.img`
 
  height: 313px;
  margin: 0 auto;

  @media (max-width: 767px) {
    content: url(${p});
  
  }
  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${h});
     
  }
  @media (min-width: 768px) {
    content: url(${g});
    
  }
  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${w});
    height: 445px;
  }
   @media screen and (min-width: 1440px) {
    height: 445px;
    margin: 0;
   
  }
`,P=n.li`
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
`,I=({title:e,url:t,text:r,id:s})=>i.jsx(P,{children:i.jsxs(b,{to:`/drinks/${s}`,children:[i.jsx(k,{src:t,alt:"Photo drinks"}),i.jsxs(y,{children:[i.jsx(D,{children:e}),i.jsx(L,{children:r})]})]})}),$=n.ul`
  margin-bottom: 40px;
  display: flex;
	flex-direction: row;
	gap: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  
   
  }

`,v=n.h2`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    color: -main-color;
   
  }


`,T=({header:e,data:t})=>i.jsxs(i.Fragment,{children:[i.jsx(v,{children:e}),i.jsx($,{children:t==null?void 0:t.map(({drink:r,drinkThumb:s,_id:a})=>i.jsx(I,{title:r,text:"see more",url:s,id:a},a))})]}),W=({drinks:e})=>{let t=Array.isArray(e)?e:Object.keys(e.drinks);return i.jsx(i.Fragment,{children:i.jsxs("ul",{children:[t.map(r=>i.jsx(T,{header:r,data:e.drinks[r]},r)),i.jsx(H,{children:i.jsx(o,{to:"/drinks",children:"Other drinks"})})]})})},R=()=>{const e=x();m.useEffect(()=>{e(l())},[e]);const t=c(r=>r.drinks.main);return i.jsxs(u,{children:[i.jsxs(S,{children:[i.jsxs(U,{children:[i.jsx(f,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(M,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(o,{to:"/add",children:"Add drink"})]}),i.jsx(z,{children:i.jsx(C,{})})]}),i.jsx(j,{children:i.jsx(W,{drinks:t})})]})};export{R as default};
