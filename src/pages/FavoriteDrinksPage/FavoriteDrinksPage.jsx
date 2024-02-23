import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchFavoriteDrink,
  removeFavoriteDrink,
} from '../../redux/drinks/drinksOperations';
import DrinkList from '../../components/DrinkList/DrinkList';
import { EmptyDrinks } from '../../components/EmptyDrinks/EmptyDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import {
  selectError,
  selectFavoriteDrinks,
  selectIsLoading,
} from '../../redux/drinks/drinksSelectors';
import { Loader } from '../../components/Loader/Loader';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFavoriteDrink());
  }, [dispatch]);

  const favoriteDrinks = useSelector(selectFavoriteDrinks);

  const handleDelete = (drinkId) => {
    dispatch(removeFavoriteDrink({ drinkId }));
  };

  const drinksData = Array.isArray(favoriteDrinks)
    ? favoriteDrinks
    : favoriteDrinks.data;

  return (
    <>
      <Section>
        <Container>
          {isLoading && !isError && <Loader />}
          <PageTitle title="Favorites" />
          {drinksData.length === 0 ? (
            <EmptyDrinks />
          ) : (
            <DrinkList
              drinks={drinksData}
              text={'See more'}
              onDelete={handleDelete}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default FavoriteDrinksPage;
