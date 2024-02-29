import { NavLink } from 'react-router-dom';
import icons from '../../../images/icons.svg'; // Импорт вашего спрайта
import { LogoIcon, LogoName, LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <NavLink to="/home">
      <LogoWrapper>
        <LogoIcon>
          <use href={`${icons}#logo`} />
        </LogoIcon>
        <LogoName>Drink Master</LogoName>
      </LogoWrapper>
    </NavLink>
  );
};

export default Logo;
