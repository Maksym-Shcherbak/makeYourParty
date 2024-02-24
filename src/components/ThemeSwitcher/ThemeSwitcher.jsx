import React, { useState } from 'react';
import { Switch, SwitchInput } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ handleToggleTheme }) => { 
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    setIsChecked((prev) => !prev);
    handleToggleTheme(); 
  };

  return (
    <Switch>
      <SwitchInput
        type="checkbox"
        role="switch"
        checked={isChecked}
        onChange={toggleTheme}
      />
    </Switch>
  );
};

export default ThemeSwitcher;

