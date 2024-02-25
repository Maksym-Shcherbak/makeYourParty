import styled from 'styled-components';

export const TextereaWrapper = styled.div`
  margin-bottom: 20px;
`;

export const RecipeTexterea = styled.textarea`
  width: 280px;
  height: 184px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  background-color: transparent;
  color: #f3f3f3;

  padding: 16px 18px;

  resize: none;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 184px;
  }

  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: 480px;
  }
`;

export const SectionTitleAdd = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 118.75%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;
