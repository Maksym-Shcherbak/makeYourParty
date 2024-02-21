// import styled from 'styled-components';
// Общие стили для обеих тем
import styled from 'styled-components';

export const Body = styled.div`
  margin: 0;
  overflow: hidden;
  background-color: #e2ecf0;
`;

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Shape = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Sun = styled(Shape)`
  background-color: #fdb813;
  box-shadow: 0 0 20px 10px #fdb813;
`;

export const Moon = styled(Shape)`
  display: none;
  background-color: #f2f2f2;
  box-shadow: 0 0 20px 10px #f2f2f2;
`;

export const ToggleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ToggleLabel = styled.label`
  display: block;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: #131111;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #e48989;
  }
`;

export const ToggleHandle = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d3e719;
  transition: transform 0.3s ease;
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleLabel}::before {
    transform: translateX(16px);
  }

  &:checked ~ ${Sun} {
    display: none;
  }

  &:checked ~ ${Moon} {
    display: block;
  }
`;

export const ChangeText = styled.p`
  position: absolute;
  top: -60px;
  left: -25px;
  font-size: 24px;
  color: #ee3b3b;
  white-space: nowrap;
`;


//--------------------------

export const DarkTheme = styled.div`
  /* стили для темной темы */
`;

export const LightTheme = styled.div`
  /* стили для светлой темы */
`;