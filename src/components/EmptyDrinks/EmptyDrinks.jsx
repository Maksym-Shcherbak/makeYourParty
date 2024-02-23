import {
  EmptyFavoriteDrinksContainer,
  EmptyFavoriteDrinks,
  EmptyDescription,
} from './EmptyDrinks.styled';

export const EmptyDrinks = () => {
  return (
    <>
      <EmptyFavoriteDrinksContainer>
        <EmptyFavoriteDrinks />
        <EmptyDescription>
          You haven't added any favorite cocktails yet
        </EmptyDescription>
      </EmptyFavoriteDrinksContainer>
    </>
  );
};
