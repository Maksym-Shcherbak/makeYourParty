import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchDrinkOwn,
  removeDrinkOwn,
} from '../../redux/drinks/drinksOperations';
import DrinkList from '../../components/DrinkList/DrinkList';
import { EmptyDrinks } from '../../components/EmptyDrinks/EmptyDrinks';
import {
  selectError,
  selectIsLoading,
  selectOwnDrinks,
} from '../../redux/drinks/drinksSelectors';
import { Container } from '@mui/material';
import { Section } from '../../styled/Section';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Loader } from '../../components/Loader/Loader';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchDrinkOwn());
  }, [dispatch]);

  const myDrinks = useSelector(selectOwnDrinks);

  const handleDelete = (drinkId) => {
    dispatch(removeDrinkOwn({ drinkId }));
  };

  const mydrinksData = Array.isArray(myDrinks) ? myDrinks : myDrinks.data;
  return (
    <>
      <Section>
        <Container>
          {isLoading && !isError && <Loader />}
          <PageTitle title="My drinks" />
          {mydrinksData === 0 ? (
            <>
              <EmptyDrinks />
            </>
          ) : (
            <DrinkList
              drinks={mydrinksData}
              text={'See more'}
              onDelete={handleDelete}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default MyDrinksPage;
