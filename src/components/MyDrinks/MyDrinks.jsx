import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { DrinkList } from '../../components/DrinkList/DrinkList';

export const MyDrinks = () => {
  return (
    <Section>
      <Container>
        <PageTitle title="My drinks" />
        <DrinkList text="See more" />
      </Container>
    </Section>
  );
};
