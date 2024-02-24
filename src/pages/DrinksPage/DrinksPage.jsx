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
import DrinksPageSearch from '../../components/DrinksPageSearch/DrinksPageSearch.jsx';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.drinks.categories);
  const ingredients = useSelector((state) => state.drinks.ingredients);
  console.log(categories, 'запит за категоріі');
  console.log(ingredients, 'запит за категоріі');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Container>
      <PageTitle title={'Drinks'} />
      <DrinksPageSearch categories={categories} ingredients={ingredients} />
      <Section>
        <DrinksPageList />
      </Section>
      {/* <FaceBookBtn>
        <BiLogoFacebook
          style={{ color: '#F3F3F3', opacity: 0.8, fontSize: 28 }}
        />
      </FaceBookBtn>
      <InstBtn>
        <AiFillInstagram
          style={{ color: '#F3F3F3', opacity: 0.8, fontSize: 28 }}
        />
      </InstBtn> */}
    </Container>
  );
};

export default DrinksPage;

// const FaceBookBtn = styled.button`
//   border: 1px solid rgba(243, 243, 243, 0.2);
//   border-radius: 10px;
//   padding: 8px;
//   width: 44px;
//   height: 44px;
//   background: #0a0a11;
//   padding: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const InstBtn = styled.button`
//   border: 1px solid rgba(243, 243, 243, 0.2);
//   border-radius: 10px;
//   padding: 8px;
//   width: 44px;
//   height: 44px;
//   background: #0a0a11;
//   padding: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
