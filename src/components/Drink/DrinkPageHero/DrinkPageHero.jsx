import {
  DrinkWrapper,
  DrinkText,
  Description,
  ImagesDrink,
  SupTitle,
} from './DrinkPageHero.styled';

import SectionTitle from '../titleDrink/titleDrinks';
import Button from '../Button/Button';

import defaultCoctail from '../../../images/DrinkImages/default400.png';

const DrinkPageHero = ({ data } = data) => {
  const { drink, alcoholic, glass, description, drinkThumb, _id, favorite } =
    data;

  return (
    <DrinkWrapper>
      <DrinkText>
        <SectionTitle title={drink} />
        <SupTitle>
          {glass} / {alcoholic}
        </SupTitle>
        <Description>{description}</Description>
        <Button id={_id} favoriteDrink={favorite} />
      </DrinkText>
      <ImagesDrink
        src={drinkThumb}
        alt={drink}
        title={drink}
        onError={({ currentTarget }) => {
          currentTarget.src = defaultCoctail;
        }}
      />
    </DrinkWrapper>
  );
};

export default DrinkPageHero;
