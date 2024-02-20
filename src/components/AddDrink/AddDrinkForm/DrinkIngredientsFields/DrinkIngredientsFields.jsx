import { useEffect, useState } from 'react';
import {
  ButtonAction,
  ButtonWrapper,
  CounterValue,
  IngredientsWrapper,
  SectionTitleIngredients,
} from '../AddDrinkForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../../../redux/drinks/drinksOperations';

const DrinkIngredientsFields = () => {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredients = useSelector((state) => state.drinks.ingredients);

  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCount) => prevCount - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };
  return (
    <>
      <IngredientsWrapper>
        <SectionTitleIngredients>Ingredients</SectionTitleIngredients>
        <ButtonWrapper>
          <ButtonAction type="button" onClick={decreaseCounter}>
            -
          </ButtonAction>
          <CounterValue>{counter}</CounterValue>
          <ButtonAction type="button" onClick={increaseCounter}>
            +
          </ButtonAction>
        </ButtonWrapper>
      </IngredientsWrapper>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default DrinkIngredientsFields;
