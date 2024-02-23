import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
   padding: 20px 100px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 auto; 
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media (max-width: 768px) {    
    padding-right: 32px;
    padding-left: 32px;

  }
  

  /* Медиа-запрос для экранов с шириной от 769px до 1440px */
  @media (min-width: 769px) and (max-width: 1440px) {
    padding-right: 100px;
    padding-left: 100px;
  }




 // @media screen and (min-width: 1440px) {
    //   width: 1440px;
    //   padding-right: 100px;
    //   padding-left: 100px;
    // }
  
  // @media screen and (min-width: 375px) {
  //   width: 375px;
  // }
  // @media screen and (min-width: 768px) {
  //   width: 768px;
  //   padding-right: 32px;
  //   padding-left: 32px;
  // }
  // @media screen and (min-width: 1440px) {
  //   width: 1440px;
  //   padding-right: 100px;
  //   padding-left: 100px;
  // }

`;



export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: ${(props) => props.color || '#ffffff'};
  background: ${(props) => props.bgColor || 'transparent'};
  border-radius: 40%;
  display: inline-block;
  margin-right: 5px;
  // box-shadow:
  //   0 0 5px #00baff,
  //   0 0 10px #00baff,
  //   0 0 20px #00baff,
  //   0 0 40px #00baff,
  //   0 0 80px #00baff;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
  justify-content: flex-end;

  @media screen and (max-width: 374.98px) {
    column-gap: 3.5vw;
  }

  @media screen and (max-width: 345px) {
    column-gap: 2.8vw;
  }

  @media screen and (max-width: 319.98px) {
    column-gap: 8.95px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 28px;
  }
`;