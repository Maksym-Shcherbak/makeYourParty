// import styled from 'styled-components';

// import { BiLogoFacebook } from 'react-icons/bi';
// import { IconContext } from 'react-icons';
// import { AiFillInstagram } from 'react-icons/ai';

import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { Container } from '../../styled/Container.js';
import { Section } from '../../styled/Section.js';
import DrinksPageList from '../../components/DrinksPageList/DrinksPageList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getCategories,
  getIngredients,
} from '../../redux/drinks/drinksOperations.js';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch.jsx';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.drinks.categories);
  const ingredients = useSelector((state) => state.drinks.ingredients);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <PageTitle title={'Drinks'} />
        <DrinksSearch categories={categories} ingredients={ingredients} />
          <DrinksPageList />
      </Container>
    </Section>
  );
};

export default DrinksPage;
