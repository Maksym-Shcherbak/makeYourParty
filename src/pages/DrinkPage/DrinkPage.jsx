import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import SectionTitle from '../../components/Drink/titleDrink/titleDrinks';
import DrinkPageHero from '../../components/Drink/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/Drink/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/Drink/RecipePreparation/RecipePreparation';

import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';

import {
  selectDrinkById,
  // selectIsLoading,
} from '../../redux/drinks/drinksSelectors';

import { getById } from '../../redux/drinks/drinksOperations';
// import { selectIsRefreshing } from '../../redux/auth/authSelectors';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  // const isLoading = useSelector(selectIsLoading);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const drink = useSelector(selectDrinkById);

  useEffect(() => {
    dispatch(getById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <Section>
      <Container>
        {!drink ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <SectionTitle title={drink.recipe.drink} />
            <DrinkPageHero data={drink.recipe} />
            <DrinkIngredientsList data={drink.recipe.ingredients} />
            <RecipePreparation description={drink.recipe.description} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default DrinkPage;
