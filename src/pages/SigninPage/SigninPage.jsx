import SinginForm from '../../components/SigninForm/SigninForm';
import WelcomeTitle from '../../components/WelcomeTitle/WelcomeTitle';
import { Container } from '../WelcomePage/WelcomePage.styled';
import { Link, Wrap, Nav } from '../SignupPage/SignupPage.styled';

const SigninPage = () => {
  return (
    <Container>
      <Wrap>
        <WelcomeTitle title="Sign In" />
        <SinginForm />
        <Nav>
          <Link to="/signup">Sign Up</Link>
        </Nav>
      </Wrap>
    </Container>
  );
};

export default SigninPage;
