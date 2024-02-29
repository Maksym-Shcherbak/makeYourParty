import {
  EmptyFavoriteDrinksContainer,
  EmptyFavoriteDrinks,
  EmptyDescription,
} from './EmptyDrinks.styled';

export const EmptyDrinks = ({ text }) => {
  return (
    <>
      <EmptyFavoriteDrinksContainer>
        <EmptyFavoriteDrinks />
        <EmptyDescription>{text}</EmptyDescription>
      </EmptyFavoriteDrinksContainer>
    </>
  );
};
