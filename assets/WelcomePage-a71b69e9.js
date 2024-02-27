import{u as i,N as e,j as o}from"./index-360539b2.js";import{t as n,C as r,T as t,a,W as s}from"./WelcomePage.styled-fcc4d28c.js";const d=i(e)`
  text-decoration: none;
  background-color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  padding: 14px 40px;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  transition: background-color ${n};
  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
  &:hover {
    background-color: transparent;
    color: #f3f3f3;
    transition: background-color ${n};
  }
`,c=i(e)`
  text-decoration: none;
  background-color: transparent;
  border-radius: 42px;
  padding: 14px 40px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: border-color ${n};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
    transition: background-color ${n};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`,p=i.nav`
  display: flex;
  gap: 14px;
  margin: left;

  @media screen and (min-width: 768px) {
  }
`,l=()=>o.jsxs(p,{children:[o.jsx(d,{to:"/signup",children:"Sign Up"}),o.jsx(c,{to:"/signin",children:"Sign In"})]}),f=()=>o.jsx(r,{children:o.jsxs(t,{children:[o.jsx(a,{children:"Welcome to the app!"}),o.jsx(s,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),o.jsx(l,{})]})});export{f as default};
