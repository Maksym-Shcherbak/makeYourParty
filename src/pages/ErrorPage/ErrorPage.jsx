import { Container } from '../../styled/Container';
import { Section } from '../../styled/Section';
import { NotFound } from '../../components/NotFound/NotFound';

const ErrorPage = () => {
  return (
    <Container>
      <Section>
        <NotFound />
      </Section>
    </Container>
  );
};

export default ErrorPage;
