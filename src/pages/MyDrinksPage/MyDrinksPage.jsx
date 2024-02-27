import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchDrinkOwn,
  removeDrinkOwn,
} from '../../redux/drinks/drinksOperations';
import DrinkList from '../../components/DrinkList/DrinkList';
import { EmptyDrinks } from '../../components/EmptyDrinks/EmptyDrinks';
import {
  selectError,
  selectIsLoading,
  selectOwnDrinks,
} from '../../redux/drinks/drinksSelectors';
import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Loader } from '../../components/Loader/Loader';
import { Paginator } from '../../components/Paginator/Paginator';
import { useMediaQuery } from 'react-responsive';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const myDrinks = useSelector(selectOwnDrinks);

  const [currentPage, setCurrentPage] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const initialItemsPerPage = isDesktop ? 9 : 8;
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    setItemsPerPage(isDesktop ? 9 : 8);
  }, [isDesktop]);

  const totalHits = myDrinks?.totalHits || 0;

  useEffect(() => {
    dispatch(fetchDrinkOwn({ page: currentPage + 1, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const handleDelete = async (drinkId) => {
    dispatch(removeDrinkOwn({ drinkId }));
    const newTotalHits = totalHits - 1;
    const remainingItemsOnCurrentPage = newTotalHits % itemsPerPage;

    const newPage =
      remainingItemsOnCurrentPage === 0
        ? Math.min(currentPage + 1, Math.ceil(newTotalHits / itemsPerPage) - 1)
        : currentPage;

    setCurrentPage(newPage);

    await Promise.all([
      dispatch(fetchDrinkOwn({ page: newPage + 1, limit: itemsPerPage })),
    ]);
  };
  const mydrinksData = Array.isArray(myDrinks) ? myDrinks : myDrinks.data;

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
  };

  return (
    <>
      <Section>
        <Container>
          <PageTitle title="My drinks" />
          {isLoading && !isError && <Loader />}
          {!isLoading && !isError && mydrinksData.length === 0 ? (
            <>
              <EmptyDrinks />
            </>
          ) : (
            <>
              <DrinkList
                drinks={mydrinksData}
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

export default MyDrinksPage;
