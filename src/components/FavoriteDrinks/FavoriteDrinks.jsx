import {
  EmptyFavoriteDrinksContainer,
  EmptyFavoriteDrinks,
  EmptyDescription,
} from './FavoriteDrinks.styled';
import PageTitle from '../PageTitle/PageTitle';

export const FavoriteDrinks = () => {
  return (
    <>
      <PageTitle title="Favorites" />
      <EmptyFavoriteDrinksContainer>
        <EmptyFavoriteDrinks />
        <EmptyDescription>
          You haven't added any favorite cocktails yet
        </EmptyDescription>
      </EmptyFavoriteDrinksContainer>
    </>
  );
};
