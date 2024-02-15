import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import icons from '../../../images/icons.svg'; // Импорт вашего спрайта


const LogoWrapper = styled.div`
display: flex;
  gap: 8px;
   margin-right: auto;
  transition: transform ${props => props.transitionDuration || '0.3s'} ${props => props.transitionTimingFunction || 'ease'};
  @media (min-width: 768px) {
       gap: 14px;}

       @media (min-width: 1024px) {
             margin-right: 0;
           }
  `;

const LogoIcon = styled.svg`
  width: 22px;
  height: 22px;
`;

const LogoName = styled.p`
font-weight: 600;
color: #F3F3F3;
`;
const Logo = () => {
  return (
    <NavLink to="/home">
      <LogoWrapper>
        <LogoIcon>
          <use href={`${icons}#logo`} /> 
        </LogoIcon>
        <LogoName>Drink Master</LogoName>
      </LogoWrapper>
    </NavLink>
  );
};

export default Logo;

