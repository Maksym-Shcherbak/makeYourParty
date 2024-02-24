import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import DrinkPageHero from '../../components/Drink/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/Drink/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/Drink/RecipePreparation/RecipePreparation';

import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import { Loader } from '../../components/Loader/Loader';

import {
  selectDrinkById,
  selectError,
  selectIsLoading,
} from '../../redux/drinks/drinksSelectors';

import { getById } from '../../redux/drinks/drinksOperations';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector(selectDrinkById);
  console.log(drink);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(getById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {isError && <h1>{isError}</h1>}
        {drink && (
          <>
            <DrinkPageHero data={drink.recipe} />
            <DrinkIngredientsList data={drink.recipe.ingredients} />
            <RecipePreparation instructions={drink.recipe.instructions} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default DrinkPage;
