// import styled from 'styled-components';

// import { BiLogoFacebook } from 'react-icons/bi';
// import { IconContext } from 'react-icons';
// import { AiFillInstagram } from 'react-icons/ai';
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
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const initialItemsPerPage = () => {
    if (isDesktop) {
      setItemsPerPage(9);
    } else if (isMobile) {
      setItemsPerPage(10);
    } else {
      setItemsPerPage(8);
    }
  };

  const handlePaginPageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    initialItemsPerPage();
  }, [initialItemsPerPage]);

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
        />
        <Section>
          <DrinksPageList />
          <Pagination
            pageCount={Math.ceil(totalHits / itemsPerPage)}
            onPageChange={handlePaginPageClick}
          />
        </Section>
      </Container>
    </Section>
  );
};

export default DrinksPage;
