import { AuthNav } from '../../components/AuthNav/AuthNav';
import {
  Container,
  TextAndControls,
  Title,
  WelcomeText,
} from './WelcomePage.styled';

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
      </TextAndControls>
    </Container>
  );
};

export default WelcomePage;
