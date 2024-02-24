import { useEffect, useState } from 'react';

import {
  ButtonAction,
  ButtonWrapper,
  CounterValue,
  IngredientsWrapper,
  SectionTitleIngredients,
} from '../DrinkIngredientsFields/DrinkIngredientsFields.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../../../redux/drinks/drinksOperations';
import IngredientSelect from './IngredientSelect/IngredientSelect';

const DrinkIngredientsFields = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [arrayIngredient, setArrayIngredient] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredients = useSelector((state) => state.drinks.ingredients);

  // console.log(data);

  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
    const id = 'a,s.dfa?' + Math.random() * 1024.333 + 'adftghjftjfgjfgj';
    setData((prevData) => [...prevData, id]);
  };

  const decreaseCounter = () => {
    setCounter((prevCount) => prevCount - 1);
    if (counter <= 0) {
      setCounter(0);
    }
    data.pop();
  };

  const onHandleDeleteIngredient = (id) => {
    setData(data.filter((item) => item !== id));
    setCounter(data.length - 1);
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
          {data.length > 0 &&
            data.map((id) => {
              return (
                <IngredientSelect
                  key={id}
                  ingredients={ingredients}
                  id={id}
                  onHandleDeleteIngredient={onHandleDeleteIngredient}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

// ingredientId, title
export default DrinkIngredientsFields;
