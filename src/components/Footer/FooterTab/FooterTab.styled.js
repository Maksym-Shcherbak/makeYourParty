import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: var(#0A0A11);
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 80px 32px 24px 32px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterNavFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 80px;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const LogoFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 28px;

  color: var(--main-color);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
`;
export const Icon = styled.svg`
  width: 28px;
  height: 28px;
  fill: var(--main-color);
  stroke: var(--main-color);
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--main-color);
  font-weight: 500;
  line-height: 1.6;

  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(#253D6F);
  }
  &:focus {
    color: var(#253D6F);
  }
  &.active {
    color: var(#253D6F);
  }
`;

export const Copy = styled.p`
  display: inline;
  margin-right: 153px;

  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  opacity: 0.9;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  z-index: 1;
  margin-right: 14px;

  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  cursor: pointer;
`;