import{u as t,L as l,j as i,a as d,r as m,g as x,b as o,c as p}from"./index-44c50096.js";import{P as h}from"./PageTitle-782212d6.js";import{C as g,S as f}from"./Section-8ac4e6ea.js";import{e as u,a as w,b as j,c as b}from"./blue_iced_tea_mobile@2x-cecc14df.js";import{U as k,a as y,b as L,c as D,d as H}from"./UtilsMainDrinks-98aeeb8a.js";import{s as M,a as S}from"./drinksSelectors-9def1c59.js";const c=t(l)`
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
`,U=t.li`
  display: flex;
  justify-content: center;
`,z=t.p`
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
  
`,C=t.section`
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 118px;
   
  }
  
`,E=t.div`
  margin-bottom: 45px;
  @media screen and (min-width: 1440px) { 
    width: 715px;
    margin-bottom:0;
    
   
  }
  
`,I=t.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    width: 359px;
   
  }
  
`,P=t.img`
 
  height: 313px;
  margin: 0 auto;

  @media (max-width: 767px) {
    content: url(${u});
  
  }
  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${w});
     
  }
  @media (min-width: 768px) {
    content: url(${j});
    
  }
  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${b});
    height: 445px;
  }
   @media screen and (min-width: 1440px) {
    height: 445px;
    margin: 0;
   
  }
`,$=t.li`
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
`,v=({title:e,url:n,text:r,id:s})=>i.jsx($,{children:i.jsxs(k,{to:`/drinks/${s}`,children:[i.jsx(y,{src:n,alt:"Photo drinks"}),i.jsxs(L,{children:[i.jsx(D,{children:e}),i.jsx(H,{children:r})]})]})}),T=t.ul`
  margin-bottom: 40px;
  display: flex;
	flex-direction: row;
	gap: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  
   
  }

`,W=t.h2`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    color: -main-color;
   
  }


`,A=({header:e,data:n})=>i.jsxs(i.Fragment,{children:[i.jsx(W,{children:e}),i.jsx(T,{children:n==null?void 0:n.map(({drink:r,drinkThumb:s,_id:a})=>i.jsx(v,{title:r,text:"see more",url:s,id:a},a))})]}),F=({drinks:e})=>{const n=d();m.useEffect(()=>{n(x())},[n]);let r=Array.isArray(e)?e:Object.keys(e.drinks);return i.jsx(i.Fragment,{children:i.jsxs("ul",{children:[r.map(s=>i.jsx(A,{header:s,data:e.drinks[s]},s)),i.jsx(U,{children:i.jsx(c,{to:"/drinks",children:"Other drinks"})})]})})},J=()=>{const e=o(M),n=o(S),r=d();m.useEffect(()=>{r(x())},[r]);const s=o(a=>a.drinks.main);return i.jsxs(g,{children:[i.jsxs(C,{children:[i.jsxs(E,{children:[i.jsx(h,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(z,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(c,{to:"/add",children:"Add drink"})]}),i.jsx(I,{children:i.jsx(P,{})})]}),e&&!n&&i.jsx(p,{}),i.jsx(f,{children:i.jsx(F,{drinks:s})})]})};export{J as default};
