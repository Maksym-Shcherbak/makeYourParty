import * as React from 'react';
// import Switch from '@mui/material/Switch';
import { IoToggle } from "react-icons/io5";

export const ControlledSwitches = ()=> {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}