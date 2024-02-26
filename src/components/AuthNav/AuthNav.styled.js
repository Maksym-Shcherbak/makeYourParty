import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import transition from '../../transition/transition';

export const SignupLink = styled(NavLink)`
  text-decoration: none;
  background-color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  padding: 14px 40px;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  transition: background-color ${transition};
  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
  &:hover {
    background-color: transparent;
    color: #f3f3f3;
    transition: background-color ${transition};
    border: 1px solid rgba(243, 243, 243, 0.2);
  }
`;

export const SigninLink = styled(NavLink)`
  text-decoration: none;
  background-color: transparent;
  border-radius: 42px;
  padding: 14px 40px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: border-color ${transition};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
    transition: background-color ${transition};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 14px;
  margin: left;

  @media screen and (min-width: 768px) {
  }
`;
