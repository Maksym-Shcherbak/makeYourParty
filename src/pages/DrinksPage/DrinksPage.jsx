import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { Container } from '../../styled/Container.js';
import { Section } from '../../styled/Section.js';
import DrinksPageList from '../../components/DrinksPageList/DrinksPageList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategories,
  getIngredients,
} from '../../redux/drinks/drinksOperations.js';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import { useMediaQuery } from 'react-responsive';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.drinks.categories);
  const ingredients = useSelector((state) => state.drinks.ingredients);
  const totalHits = useSelector((state) => state.drinks.totalDrinks);
  const [page, setPage] = useState(1);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const initialItemsPerPage = isDesktop ? 9 : 10;
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePaginPageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    const initialItemsPerPage = () => {
      if (isDesktop) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(10);
      }
    };
    initialItemsPerPage();
  }, [isDesktop]);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <PageTitle title={'Drinks'} />
        <DrinksSearch
          categories={categories}
          ingredients={ingredients}
          page={page}
          limit={itemsPerPage}
        />
        <Section>
          <DrinksPageList />
          {totalHits > itemsPerPage && (
            <Pagination
              pageCount={Math.ceil(totalHits / itemsPerPage)}
              onPageChange={handlePaginPageClick}
            />
          )}
        </Section>
      </Container>
    </Section>
  );
};

export default DrinksPage;
