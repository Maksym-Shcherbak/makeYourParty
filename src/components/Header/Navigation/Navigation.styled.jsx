import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: absolute;
  z-index: 10;
  top: 77px;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  background-color: $backgroundColor;

  @media screen and (min-width: 1440px) {
    position: static;
    display: block;
  }

  a {
    padding: 8px 16px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    border-radius: 40px;
    color: #f3f3f3;
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
  }

  a.active {
    padding: 8px 16px;
    background-color: rgba(243, 243, 243, 0.2);
  }

  .list {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16 px;
    margin: 20% auto 0 auto;
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

export const List = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
  }

  .burger_close {
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  display: flex;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
