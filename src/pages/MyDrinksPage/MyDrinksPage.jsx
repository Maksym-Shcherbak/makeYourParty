// import React, { useEffect, useState } from 'react';
import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import { Title } from '../../components/FavoriteDrinks/FavoriteDrinks.styled';
import {
  DrinksList,
  DrinkItem,
  DrinkCard,
  DrinkImg,
  DrikTitle,
  DrinkInfo,
  DrinkDescribe,
  StyledLink,
  DeleteBtn,
} from '../../components/MyDrinks/DrinksList.styled';
import { DeleteIcon } from '../../components/DeleteIcon/DeleteIcon';

import getFavorites from '../../data/favorites.json';

const MyDrinksPage = () => {
  return (
    <Section>
      <Container>
        <Title>My drinks</Title>
        <DrinksList>
          {getFavorites.map((drink) => (
            <DrinkItem key={drink._id.$oid}>
              <DrinkCard>
                <DrinkImg src={drink.drinkThumb} alt={drink.drink} />
              </DrinkCard>
              <DrikTitle>{drink.drink}</DrikTitle>
              <DrinkInfo>
                {drink.alcoholic === 'Alcoholic'
                  ? 'Alcoholic'
                  : 'Non-alcoholic'}
              </DrinkInfo>
              <DrinkDescribe>{drink.description}</DrinkDescribe>
              <StyledLink to={`/drinks/${drink._id.$oid}`}>See more</StyledLink>
              <DeleteBtn>
                <DeleteIcon />
              </DeleteBtn>
            </DrinkItem>
          ))}
        </DrinksList>
      </Container>
    </Section>
  );
};

export default MyDrinksPage;
