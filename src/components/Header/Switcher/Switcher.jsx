// import * as React from 'react';
// // import Switch from '@mui/material/Switch';
// import { IoToggle } from "react-icons/io5";

// export const ControlledSwitches = ()=> {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <Switch
//       checked={checked}
//       onChange={handleChange}
//       inputProps={{ 'aria-label': 'controlled' }}
//     />
//   );
// }



import React, { useState } from 'react';
import styled from 'styled-components';
import { DarkTheme, LightTheme, ToggleLabel } from './Switcher.styled';

const Container = styled.div`
  /* Общие стили для контейнера */
`;

const Shape = styled.div`
  /* Стили для формы */
`;

const SwitchContainer = styled.div`
  margin: auto;
  position: relative;
`;

const SwitchInput = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.mainAccent};
  /* Другие стили для входа */
`;

export const Switcher = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {theme === 'light' ? <LightTheme /> : <DarkTheme />}
      <Wrapper id={theme}> 
        <SwitchContainer >
          <p className="change-text">{theme}</p>
          <SwitchInput onChange={switchTheme} type="checkbox" id="toggle-btn" />
          <ToggleLabel htmlFor="toggle-btn" className="toggle-label"></ToggleLabel>
        </SwitchContainer>

        <Container>
          <Shape id="sun" className={`shape ${theme === 'dark' ? 'hidden' : ''}`}></Shape>
          <Shape id="moon" className={`shape ${theme === 'light' ? 'hidden' : ''}`}></Shape>
        </Container>
      </Wrapper> 
    </>
  );
};
