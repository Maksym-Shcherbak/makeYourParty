import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: #0A0A11;
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  max-width: 375px;
  margin: auto;
  padding: 18px 20px 40px 20px;
`;

export const FooterNavFlex = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
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
  margin-bottom: 20px;

  color: var(--main-color);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;
`;
export const Icon = styled.svg`
  width: 22px;
  height: 22px;
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
    color: #253D6F;
  }
  &:focus {
    color: #253D6F;
  }
  &.active {
    color: #253D6F;
  }
`;

export const Copy = styled.div`
  margin-bottom: 8px;

  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  opacity: 0.9;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  z-index: 1;
  margin-right: 14px;

  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  cursor: pointer;
`;
