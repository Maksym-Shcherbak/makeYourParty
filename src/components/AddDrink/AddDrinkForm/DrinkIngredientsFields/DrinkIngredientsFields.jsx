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

  // const createMarkup = () => {
  // const data = `
  //   <li>
  //     <select>
  //       {ingredients.map(({ ingredientId, title }) => {
  //         return (
  //           <option key={title} value={title} id={ingredientId}>
  //             {title}
  //           </option>
  //         );
  //       })}
  //     </select>
  //   </li>
  // `;
  // return data;
  // };

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
        {/* <ul dangerouslySetInnerHTML={{ __html: data }}></ul> */}
        {/* <ul>
          <li>
            <select>
              {ingredients.map(({ ingredientId, title }) => {
                return (
                  <option key={title} value={title} id={ingredientId}>
                    {title}
                  </option>
                );
              })}
            </select>
          </li>
        </ul> */}
      </div>
    </>
  );
};

// ingredientId, title
export default DrinkIngredientsFields;
