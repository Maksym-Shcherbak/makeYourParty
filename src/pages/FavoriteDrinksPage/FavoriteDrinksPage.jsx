import { FavoriteDrinks } from '../../components/FavoriteDrinks/FavoriteDrinks';
import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';

const FavoriteDrinksPage = () => {
  return (
    <>
      <Section>
        <Container>
          <FavoriteDrinks />
        </Container>
      </Section>
    </>
  );
};

export default FavoriteDrinksPage;
