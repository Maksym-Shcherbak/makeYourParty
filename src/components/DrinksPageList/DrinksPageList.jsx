import { useSelector } from 'react-redux';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';
import { EmptyDrinks } from '../EmptyDrinks/EmptyDrinks';

const DrinksPageList = () => {
  const drinks = useSelector((state) => state.drinks.search);

  return (
    <>
      <DrinksPgList>
        {drinks.length === 0 ? (
          <EmptyDrinks
            text={`Unfortunelly, nothing was found for your request`}
          />
        ) : (
          drinks.map((item) => {
            return (
              <DrinksPageItem
                key={item._id}
                text={'see more'}
                url={item.drinkThumb}
                title={item.drink}
                id={item._id}
              />
            );
          })
        )}
      </DrinksPgList>
      {/* <Pagination pageCount={totalHits} onPageChange={handlePaginPageClick} /> */}
    </>
  );
};

export default DrinksPageList;
