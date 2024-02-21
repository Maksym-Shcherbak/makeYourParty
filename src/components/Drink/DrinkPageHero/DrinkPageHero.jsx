import Button from '../Button/Button';
import {
  DrinkWrapper,
  DrinkText,
  Description,
  ImagesDrink,
  SupTitle,
} from './DrinkPageHero.styled';

const DrinkPageHero = ({ data } = data) => {

  const { drink, alcoholic, glass, description, drinkThumb, _id, favorite } = data;

  return (
    <DrinkWrapper>
      <DrinkText>
        <SupTitle>
          {glass} / {alcoholic}
        </SupTitle>
        <Description>{description}</Description>
        <Button id={_id} favoriteDrink={favorite} />
      </DrinkText>
      <ImagesDrink src={drinkThumb} alt={drink} title={drink} />
    </DrinkWrapper>
  );
};

export default DrinkPageHero;
