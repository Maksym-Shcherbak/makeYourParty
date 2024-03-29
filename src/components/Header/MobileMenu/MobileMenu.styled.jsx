import { NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components';
import { themes } from '../../Themes';
const transition = '300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${(props) => (props.isopen === 'true' ? 1 : 0)};
  visibility: ${(props) => (props.isopen === 'true' ? 'visible' : 'hidden')};
  z-index:99;
  transform: ${(props) =>
    props.isopen === 'true' ? 'translateX(0)' : 'translateX(-100%)'};

  transition:
    opacity ${transition},
    visibility ${transition},
    transform ${transition};

  padding: 20px;
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  

  background: radial-gradient(
      circle,
      rgba(188, 230, 210, 0.4) -20%,
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 65%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 65%
    ),
    ${({ theme }) => theme.mainBackground};
  background-repeat: no-repeat;
  background-position-x:
    calc(45vw - 130px),
    -400px,
    calc(100vw - 190px);
  background-position-y:
    40px,
    -40px,
    400px;
  background-size:
    265px 265px,
    670px 670px,
    670px 670px;

  @media screen and (min-width: 768px) {
    background: radial-gradient(
        circle,
        rgba(188, 230, 210, 0.4) -20%,
        rgba(255, 255, 255, 0) 70%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      ),
      ${({ theme }) => theme.mainBackground};
    background-repeat: no-repeat;
    background-position-x:
      -130px,
      -430px,
      calc(100vw - 200px);
    background-position-y: 40px, 50px, 480px;
    background-size:
      400px 400px,
      670px 670px,
      570px 570px;
  }
`;

export const NavLink = styled(RouterNavLink)`
color: ${({ theme }) => theme.mainText};
  padding: 8px 16px;
  color: ${({ theme }) => theme.headerText};
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.navLinkBorder};
  transition:
    border-color ${transition},
    background-color ${transition},
    color ${transition};
    z-index:99;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.navLinkBorderHover};
  }

  &.active {
    background-color: ${({ theme }) => theme.activeNavLinkBg};
    color: ${({ theme }) => theme.activeNavLinkText};
    border-color: ${({ theme }) => theme.activeNavLinkBg};
  }

  @media screen and (min-width: 768px) {
    line-height: 1.6;
  }
`;
