import { useParams } from 'react-router-dom';

import getDetails from '../../data/recipes.json';

import SectionTitle from '../../components/Drink/titleDrink/titleDrinks';
import DrinkPageHero from '../../components/Drink/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/Drink/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/Drink/RecipePreparation/RecipePreparation';

import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';

const getById = (id) => {
  for (const item of getDetails) {
    if (item._id.$oid === id) {
      return item;
    }
  }
};

const DrinkPage = () => {
  const { drinkId } = useParams();
  const drink = getById(drinkId);

  return (
    <Section>
      <Container>
        <SectionTitle title={drink.drink} />
        <DrinkPageHero data={drink} />
        <DrinkIngredientsList data={drink.ingredients} />
        <RecipePreparation description={drink.description} />
      </Container>
    </Section>
  );
};

export default DrinkPage;
