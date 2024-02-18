import AuthForm from '../../components/AuthForm/AuthForm';
import WelcomeTitle from '../../components/WelcomeTitle/WelcomeTitle';
import { Container } from '../WelcomePage/WelcomePage.styled';
import { Link, Wrap, Nav } from './SignupPage.styled';

const SignupPage = () => {
  return (
    <Container>
      <Wrap>
        <WelcomeTitle title="Sign Up" />
        <AuthForm />
        <Nav>
          <Link to="/signin">Sign In</Link>
        </Nav>
      </Wrap>
    </Container>
  );
};

export default SignupPage;
