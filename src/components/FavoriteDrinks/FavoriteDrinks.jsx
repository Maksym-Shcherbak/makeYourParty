import {
  Title,
  EmptyFavoriteDrinksContainer,
  EmptyFavoriteDrinks,
  EmptyDescription,
} from './FavoriteDrinks.styled';
import { DrinksItem } from '../../components/DrinksItem/DrinksItem';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectFavoriteDrinks,
} from '../../redux/drinks/drinksSelectors';

export const FavoriteDrinks = () => {
  const favoriteDrinks = useSelector(selectFavoriteDrinks);
  // const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Title>Favorite</Title>
      {favoriteDrinks.length === 0 ? (
        <EmptyFavoriteDrinksContainer>
          <EmptyFavoriteDrinks />
          <EmptyDescription>
            You haven't added any favorite cocktails yet
          </EmptyDescription>
        </EmptyFavoriteDrinksContainer>
      ) : (
        favoriteDrinks.map((drink) => {
          <DrinksItem key={drink._id.$oid} drink={drink} />;
        })
      )}
    </>
  );
};
