
import styled from 'styled-components';

export const LogoWrapper = styled.div`
display: flex;
  gap: 8px;
   align-items: center;  
  transition: transform ${props => props.transitionDuration || '0.3s'} ${props => props.transitionTimingFunction || 'ease'};
  @media (min-width: 768px) {
       gap: 14px;}

       @media (min-width: 1024px) {
             margin-right: 0;
           }
  `;

export const LogoIcon = styled.svg`
  width: 22px;
  height: 22px;
`;

export const LogoName = styled.p`
font-weight: 600;
color: #F3F3F3;
margin: 0;
`;
