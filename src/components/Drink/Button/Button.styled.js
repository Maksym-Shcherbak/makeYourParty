import styled from 'styled-components';

export const ButtonFavorite = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 128.571%;
  color: var(--secondary-color);

  padding: 14px 40px;
  margin-bottom: 80px;
  border-radius: 42px;
  text-align: center;
  border-color: transparent;
  background-color: var(--main-color);

  transition: all 250ms var(--transition-function);

  &:focus,
  &:hover {
    background-color: var(--secondary-color);
    color: var(--main-color);
    outline: 1px solid var(--main-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 112.5%;

    padding: 18px 44px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 198px;
  }
`;
