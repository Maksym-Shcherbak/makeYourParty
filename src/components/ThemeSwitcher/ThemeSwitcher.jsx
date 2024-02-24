import { useDispatch, useSelector } from 'react-redux';
import { Switch, SwitchInput } from './ThemeSwitcher.styled';
import { selectTheme } from '../../redux/auth/authSelectors';
import { toggleTheme } from '../../redux/auth/authSlice';

export default function ThemeSwitcher() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    console.log('Toggle theme clicked'); // Отладочное сообщение
    dispatch(toggleTheme());
  };

  return (
    <Switch>
      <SwitchInput
        type="checkbox"
        role="switch"
        checked={theme === 'light'}
        onChange={handleToggleTheme}
      />
    </Switch>
  );
}
