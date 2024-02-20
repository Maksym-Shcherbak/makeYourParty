import styled from 'styled-components';
import notFound1x from '../../images/not_found@1x.webp';
import notFound2x from '../../images/not_found@2x.webp';
import notFound1xmobile from '../../images/not_found_mobile@1x.webp';
import notFound2xmobile from '../../images/not_found_mobile@2x.webp';

export const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 120px;
  line-height: 1.025;
  color: rgba(243, 243, 243, 0.1);

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 0.82;
  }

  @media (min-width: 1024px) {
    font-size: 200px;
    line-height: 1;
  }
`;

export const Img = styled.img`
  height: 201px;

  @media (max-width: 767px) {
    content: url(${notFound1xmobile});
    height: 156px;
  }

  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${notFound2xmobile});
  }

  @media (min-width: 768px) {
    content: url(${notFound1x});
  }

  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${notFound2x});
  }
`;
