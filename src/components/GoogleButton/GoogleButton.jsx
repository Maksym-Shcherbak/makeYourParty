import { GoogleLoginButton } from 'react-social-login-buttons';
import transition from '../../transition/transition';

const style = {
  width: '60%',
  marginRight: 'auto',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  borderRadius: '42px',
  padding: '14px 40px',
  color: '#f3f3f3',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.28',
  cursor: 'pointer',
  border: '1px solid rgba(243, 243, 243, 0.2)',
  transition: `border-color ${transition}`,
  textAlign: 'center',
  //   @media screen and (min-width: 768px) {
  //     padding: '18px 44px',
  //     fontSize: '16px',
  //     lineHeight: '1.12',
  //   }
};

const active = {
  backgroundColor: '#f3f3f3',
  color: '#161f37',
  transition: `background-color ${transition}`,
};

export const GoogleButton = () => {
  return (
    <GoogleLoginButton
      style={style}
      activeStyle={active}
      onClick={() =>
        (window.location.href =
          'https://project-backend-0pzg.onrender.com/api/auth/google')
      }
    />
  );
};
