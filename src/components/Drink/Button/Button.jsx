import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonFavorite } from './Button.styled';
import {
  addFavoriteDrink,
  removeFavoriteDrink,
} from '../../../redux/drinks/drinksOperations';
import { selectFavoriteDrinks } from '../../../redux/drinks/drinksSelectors';

const Button = ({ id }) => {
  const [favorite, setfavorite] = useState(null);
  const dispatch = useDispatch();

  const favoriteList = useSelector(selectFavoriteDrinks);
  // const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    if (favoriteList.data.length) {
      favoriteList.data.find((item) => {
        if (item._id === id) {
          return setfavorite(item._id === id);
        }
      });
    }
  }, [favoriteList, id, setfavorite]);

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
