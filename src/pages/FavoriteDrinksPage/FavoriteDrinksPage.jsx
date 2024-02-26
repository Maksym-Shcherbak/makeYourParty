import React, { useEffect, useState } from 'react';
import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFavoriteDrink,
  removeFavoriteDrink,
} from '../../redux/drinks/drinksOperations';
import DrinkList from '../../components/DrinkList/DrinkList';
import { EmptyDrinks } from '../../components/EmptyDrinks/EmptyDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import {
  selectError,
  selectFavoriteDrinks,
  selectIsLoading,
} from '../../redux/drinks/drinksSelectors';
import { Loader } from '../../components/Loader/Loader';
import { Paginator } from '../../components/Paginator/Paginator';
import { useMediaQuery } from 'react-responsive';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const favoriteDrinks = useSelector(selectFavoriteDrinks);

  const [currentPage, setCurrentPage] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const initialItemsPerPage = isDesktop ? 9 : 8;
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    setItemsPerPage(isDesktop ? 9 : 8);
  }, [isDesktop]);

  const totalHits = favoriteDrinks?.totalHits || 0;

  useEffect(() => {
    dispatch(
      fetchFavoriteDrink({ page: currentPage + 1, limit: itemsPerPage })
    );
  }, [dispatch, currentPage, itemsPerPage]);

  const handleDelete = async (drinkId) => {
    dispatch(removeFavoriteDrink({ drinkId }));
    const newTotalHits = totalHits - 1;
    const remainingItemsOnCurrentPage = newTotalHits % itemsPerPage;

    const newPage =
      remainingItemsOnCurrentPage === 0
        ? Math.min(currentPage + 1, Math.ceil(newTotalHits / itemsPerPage) - 1)
        : currentPage;

    setCurrentPage(newPage);

    await Promise.all([
      dispatch(fetchFavoriteDrink({ page: newPage + 1, limit: itemsPerPage })),
    ]);
  };

  const drinksData = Array.isArray(favoriteDrinks)
    ? favoriteDrinks
    : favoriteDrinks.data;

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
  };

  return (
    <>
      <Section>
        <Container>
          {isLoading && !isError && <Loader />}
          <PageTitle title="Favorites" />
          {drinksData.length === 0 ? (
            <EmptyDrinks />
          ) : (
            <>
              <DrinkList
                drinks={drinksData}
                text={'See more'}
                onDelete={handleDelete}
              />
              <Paginator
                totalHits={totalHits}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default FavoriteDrinksPage;
