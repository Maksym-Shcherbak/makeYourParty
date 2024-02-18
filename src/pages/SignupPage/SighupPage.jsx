import AuthForm from '../../components/AuthForm/AuthForm';
import { NavLink } from 'react-router-dom';
import WelcomeTitle from '../../components/WelcomeTitle/WelcomeTitle';

const SignupPage = () => {
  return (
    <section>
      <div>
        <WelcomeTitle title="Sign Up" />
        <AuthForm />
        <nav>
          <NavLink to="/signin">Sign In</NavLink>
        </nav>
      </div>
    </section>
  );
};

export default SignupPage;
