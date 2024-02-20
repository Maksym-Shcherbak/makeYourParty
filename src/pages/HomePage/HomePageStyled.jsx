import styled from "styled-components";

export const HomeDescription = styled.p`
  margin-top: 40px;
  margin-bottom: 0;
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
  
`;

export const HomeSection = styled.section`
  
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  }

  
`;


export const HomeTitlDescWrap = styled.div`
  margin-bottom: 45px;
  @media screen and (min-width: 1440px) { 
    width: 715px;
    margin-bottom:0;
    
   
  }
  
`


export const HomeHeroBtn = styled.button`
  margin-top: 40px;
  border-radius: 42px;
  padding: 18px 44px;
  font-weight: 600;
  background-color: --main-color;
  color: --secondary-color;
`;


export const HomeHeroImg = styled.img`
  display: block;
  background-size:cover;
  width: 252px;
  height: 313px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    margin-top: 145px;
    width: 359px;
    height: 445px;
   
  }
`;