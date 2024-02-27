import { AuthNav } from '../../components/AuthNav/AuthNav';
import {
  Container,
  TextAndControls,
  Title,
  WelcomeText,
} from './WelcomePage.styled';
import { GoogleLoginButton } from 'react-social-login-buttons';

const WelcomePage = () => {
  return (
    <Container>
      <TextAndControls>
        <Title>Welcome to the app!</Title>
        <WelcomeText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </WelcomeText>
        <AuthNav />
        <GoogleLoginButton
          onClick={() =>
            (window.location.href =
              'https://project-backend-0pzg.onrender.com/api/auth/google')
          }
        />
      </TextAndControls>
    </Container>
  );
};

export default WelcomePage;
