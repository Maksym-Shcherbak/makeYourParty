import styled from 'styled-components';

export const ButtonStyle = styled.button`
&.subscribe {
    width: 100%;
    max-width: 335px;
    height: 54px;

    flex-shrink: 0;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 200px;
    cursor: pointer;
    color: var(--main-color);
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;

    transition: background-color 0.3s ease;

    &:hover:not(:disabled) {
      background-color: var(--main-color);
      color: #000;
    }
    &:focus:not(:disabled) {
      background-color: var(--main-color);
      color: #000;
    }
    &:disabled {
      cursor: not-allowed;
    }
    @media screen and (min-width: 768px) {
      width: 309px;
      height: 56px;
      font-size: 17px;
      line-height: 1.56;
    }
  }
`