import styled from "styled-components";
import baseColors from "../../BaseColors/baseColors";

export const Title = styled.h1`
  margin-top: 82px;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.1875;
  color: ${baseColors.colors.primaryWhite};
  @media screen and (min-width: 768px) {
    margin-top: 126px;
    font-size: 56px;
    line-height: 1.07143;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 200px;
    font-size: 64px;
    line-height: 1.0625;
  }


`