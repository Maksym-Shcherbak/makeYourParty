import styled from 'styled-components';

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  // justify-content: center;
  // grid-gap: 8px;
  // padding-right: 14px;

  @media screen and (min-width: 768px) {
    grid-gap: 16px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    grid-gap: 14px;
  }
`;

export const Image = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  margin-left: 14px;
`;

export const Text = styled.span`
  font-size: 16px;
`;
