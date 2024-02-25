import styled from 'styled-components';

import motivation from '../../images/MotivatingModal/motivation.png';
import vector from '../../images/MotivatingModal/vector.svg';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
  z-index: 999;
  transform: scale(1);
  transition:
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const OverlayWrapper = styled.div`
  border-radius: 30px;
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  position: relative;
  overflow: hidden;
  background-image: url(${motivation});
`;

export const OverlayText = styled.div`
  position: absolute;
  left: 50%;
  top: 219px;
  width: 268px;
  height: 242px;
  transform: translateX(-50%);
  background-image: url(${vector});

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Message = styled.p`
  position: absolute;
  left: 50%;
  top: 30px;
  width: 231px;
  height: 128px;
  transform: translateX(-50%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f3f3f3;
`;

export const Button = styled.button`
  position: absolute;

  left: 50%;
  top: 85%;
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%);

  background: #161f37;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transition:
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
