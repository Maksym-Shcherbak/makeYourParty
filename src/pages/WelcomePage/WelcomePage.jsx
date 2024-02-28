import { useDispatch, useSelector } from 'react-redux';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import {
  Container,
  TextAndControls,
  Title,
  WelcomeText,
} from './WelcomePage.styled';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setToken } from '../../redux/auth/authSlice';
import { selectToken } from '../../redux/auth/authSelectors';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  console.log(token);

  useEffect(() => {
    dispatch(setToken(token));
  }, [dispatch, token]);

  console.log(useSelector(selectToken));

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
