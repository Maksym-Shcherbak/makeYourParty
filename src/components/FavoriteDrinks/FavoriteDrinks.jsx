import {
  EmptyFavoriteDrinksContainer,
  EmptyFavoriteDrinks,
  EmptyDescription,
} from './FavoriteDrinks.styled';
import { DrinkList } from '../../components/DrinkList/DrinkList';
// import { useSelector } from 'react-redux';
// import {
//   selectIsLoading,
//   selectFavoriteDrinks,
// } from '../../redux/drinks/drinksSelectors';
import PageTitle from '../PageTitle/PageTitle';

export const FavoriteDrinks = () => {
  // const favoriteDrinks = useSelector(selectFavoriteDrinks);
  // const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <PageTitle title="Favorites" />
      {/* {favoriteDrinks.length === 0 ? ( */}
      <EmptyFavoriteDrinksContainer>
        <EmptyFavoriteDrinks />
        <EmptyDescription>
          You haven't added any favorite cocktails yet
        </EmptyDescription>
      </EmptyFavoriteDrinksContainer>
      {/* ) : ( */}
      {/* // favoriteDrinks.map((drink) => { */}
      {/* //   <DrinkItem key={drink._id.$oid} drink={drink} />;
          // <DrinkList/>
        // })
      // ) */}
      {/* } */}
    </>
  );
};
