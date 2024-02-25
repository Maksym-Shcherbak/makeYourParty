import { useEffect, useState } from 'react';

import {
  ButtonAction,
  ButtonWrapper,
  CounterValue,
  IngredientsWrapper,
  ListSelectIng,
  SectionTitleIngredients,
  SectionWrapperList,
} from '../DrinkIngredientsFields/DrinkIngredientsFields.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../../../redux/drinks/drinksOperations';
import IngredientSelect from './IngredientSelect/IngredientSelect';

const DrinkIngredientsFields = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  // console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredients = useSelector((state) => state.drinks.ingredients);

  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
    const id = 'a,s.dfa?' + Math.random() * 1024.333 + 'adftghjftjfgjfgj';
    setData((prevData) => [...prevData, { id, ingredientId: '', measure: '' }]);
  };

  const decreaseCounter = () => {
    setCounter((prevCount) => prevCount - 1);
    setData((prevData) => [...prevData].slice(0, -1));
  };

  const onHandleDeleteIngredient = (id) => {
    setData((prevData) => [...prevData].filter((item) => item.id !== id));
    setCounter((prevCount) => prevCount - 1);
  };

  const onSelectHandleIng = (e) => {
    console.dir(e.currentTarget);

    // setData((prev) => [{ ...prev, ingredientId: e.target.value }]);

    // setData((prev) => {
    //   prev.map(({ id }) => {
    //     const searchId = data.find((el) => el.id === id);
    //     if (searchId) {
    //       return [{ ...prev, ingredientId: e.target.value }];
    //     }
    //   });
    // });
  };

  const onChangeInputCl = (e) => {
    console.dir(e.currentTarget);

    data.map(({ id }) => {
      const searchId = data.find((el) => el.id === id);
      if (searchId) {
        setData((prev) => {
          console.log(prev);
          // const abc = { prev.id, measure: e.target.value };
          // console.log(abc);
          // return [{ ...prev, measure: e.target.value }];
        });
      }
    });
  };

  return (
    <>
      <IngredientsWrapper>
        <SectionTitleIngredients>Ingredients</SectionTitleIngredients>
        <ButtonWrapper>
          <ButtonAction
            type="button"
            onClick={decreaseCounter}
            disabled={counter === 0 && true}
          >
            -
          </ButtonAction>
          <CounterValue>{counter}</CounterValue>
          <ButtonAction type="button" onClick={increaseCounter}>
            +
          </ButtonAction>
        </ButtonWrapper>
      </IngredientsWrapper>
      <SectionWrapperList>
        <ListSelectIng key={data.id}>
          {data.length > 0 &&
            data.map(({ id }) => {
              return (
                <IngredientSelect
                  key={id}
                  ingredients={ingredients}
                  id={id}
                  onHandleDeleteIngredient={onHandleDeleteIngredient}
                  data={data}
                  onSelectHandleIng={onSelectHandleIng}
                  onChangeInputCl={onChangeInputCl}
                />
              );
            })}
        </ListSelectIng>
      </SectionWrapperList>
    </>
  );
};

// ingredientId, title
export default DrinkIngredientsFields;
