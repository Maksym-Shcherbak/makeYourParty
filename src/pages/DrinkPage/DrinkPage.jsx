import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import SectionTitle from '../../components/Drink/titleDrink/titleDrinks';
import DrinkPageHero from '../../components/Drink/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/Drink/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/Drink/RecipePreparation/RecipePreparation';

import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';

import { getById } from '../../redux/drinks/drinksOperations';

import {
  selectGetById,
  selectIsLoading,
} from '../../redux/drinks/drinksSelectors';
import { Loader } from '../../components/Loader/Loader';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();

  const drink = useSelector(selectGetById);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <Section>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SectionTitle title={drink.recipe.drink} />
            <DrinkPageHero recipe={drink.recipe} />
            <DrinkIngredientsList ingredients={drink.ingredients} />
            <RecipePreparation description={drink.recipe} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default DrinkPage;
