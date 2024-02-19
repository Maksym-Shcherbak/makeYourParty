import {
  DrinkWrapper,
  DrinkText,
  Button,
  Description,
  ImagesDrink,
  SupTitle,
} from './DrinkPageHero.styled';

const DrinkPageHero = ({ recipe }) => {
  const { drink, alcoholic, glass, description, drinkThumb } = recipe;

  return (
    <DrinkWrapper>
      <DrinkText>
        <SupTitle>
          {glass} / {alcoholic}
        </SupTitle>
        <Description>{description}</Description>
        <Button>Add to favorite drinks</Button>
      </DrinkText>
      <ImagesDrink src={drinkThumb} alt={drink} title={drink} />
    </DrinkWrapper>
  );
};

export default DrinkPageHero;
