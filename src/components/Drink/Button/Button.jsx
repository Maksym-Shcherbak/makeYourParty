import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonFavorite } from './Button.styled';

import Notiflix from 'notiflix';

import {
  addFavoriteDrink,
  removeFavoriteDrink,
} from '../../../redux/drinks/drinksOperations';

import { selectMotivation } from '../../../redux/drinks/drinksSelectors';
import MotivatingModal from '../../MotivatingModal/MotivatingModal';
import { reset } from '../../../redux/drinks/drinksSlice';

const Button = ({ id, favoriteDrink }) => {
  const [favorite, setFavorite] = useState(null);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user.id);

  //Modal-----------------------------------------
  const [modal, setModal] = useState(false);
  const motivation = useSelector(selectMotivation);

  const modalClose = () => {
    dispatch(reset());
    setModal(false);
  };

  useEffect(() => {
    if (motivation) {
      setModal(true);
    }
  }, [motivation]);
  //Modal-----------------------------------------

  useEffect(() => {
    if (favoriteDrink.length) {
      favoriteDrink.find((item) => {
        if (item === userId) {
          return setFavorite(true);
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
    setFavorite(true);
    Notiflix.Notify.success(`Add to your favorite`, {
      width: '460px',
      svgSize: '220px',
      fontSize: '16px',
    });
  };

  const handleRemoveFavorite = () => {
    dispatch(
      removeFavoriteDrink({
        drinkId: id,
      })
    );

    setFavorite(false);
    Notiflix.Notify.warning(`Remove from your favorite`, {
      width: '460px',
      svgSize: '220px',
      fontSize: '16px',
    });
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

      {modal && <MotivatingModal text={motivation} modalClose={modalClose} />}
    </>
  );
};

export default Button;
