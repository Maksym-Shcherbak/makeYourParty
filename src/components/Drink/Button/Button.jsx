import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonFavorite } from './Button.styled';

import {
  addFavoriteDrink,
  removeFavoriteDrink,
} from '../../../redux/drinks/drinksOperations';

const Button = ({ id, favoriteDrink }) => {
  const [favorite, setfavorite] = useState(null);
  const dispatch = useDispatch();
  console.log(favorite);

  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    if (favoriteDrink.length) {
      favoriteDrink.find((item) => {
        if (item === userId) {
          return setfavorite(true);
        }
      });
    }
  }, [favoriteDrink, userId]);

  const handleAddFavorite = () => {
    dispatch(
      addFavoriteDrink({
        drinkId: id,
      })
    );
    setfavorite(true);
  };

  const handleRemoveFavorite = () => {
    dispatch(
      removeFavoriteDrink({
        drinkId: id,
      })
    );
    setfavorite(false);
  };

  return (
    <>
      {!favorite ? (
        <ButtonFavorite type="button" onClick={() => handleAddFavorite()}>
          Add to favorite drinks
        </ButtonFavorite>
      ) : (
        <ButtonFavorite type="button" onClick={() => handleRemoveFavorite()}>
          Remove from favorite drinks
        </ButtonFavorite>
      )}
    </>
  );
};

export default Button;
