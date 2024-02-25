import { useDispatch, useSelector } from 'react-redux';
import { getMainPage } from '../../redux/drinks/drinksOperations';
import { useEffect } from 'react';

import MainDrinkList from '../MainDrinkList/MainDrinkList';
import { HomeMainLink, HomeLinkWrap,HomePgList } from './HomeDrinksStyled';
import { Loader } from '../Loader/Loader';

const HomeDrinks = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    
    dispatch(getMainPage());
   
  }, [dispatch]);


  const main = useSelector((state) => state.drinks.main);
  
  
  let allDrinksNamesList = Array.isArray(main) ? main : Object.keys(main.drinks);
  
  return (
    <>
          {allDrinksNamesList.length === 0 ? (
            <Loader/>
          ) : (
          <HomePgList>
            {
              allDrinksNamesList.map((drinkName) => <MainDrinkList
                key={drinkName}
                header={drinkName}
                data={main.drinks[drinkName]}>                
              </MainDrinkList>
               ) 
            }
            <HomeLinkWrap>
              <HomeMainLink to="/drinks">Other drinks</HomeMainLink>
            </HomeLinkWrap>
           </HomePgList>
          )}
    </>
  );};

export default HomeDrinks;