import { useDispatch, useSelector } from 'react-redux';
// import { selectMainDrinks } from '../../redux/drinks/drinksSelectors';
import { getMainPage } from '../../redux/drinks/drinksOperations';
import { useEffect } from 'react';
import MainDrinkList from '../MainDrinkList/MainDrinkList';
import { UtilsMainLink,HomeLinkWrap } from './HomeDrinksStyled';

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
            false
          ) : (
          <ul>
            {
              allDrinksNamesList.map((drinkName) => <MainDrinkList
                key={drinkName}
                header={drinkName}
                data={main.drinks[drinkName]}>                
              </MainDrinkList>
               ) 
            }
            <HomeLinkWrap>
              <UtilsMainLink to="/drinks">Other drinks</UtilsMainLink>
            </HomeLinkWrap>
            
           </ul>
          )}
    </>
  );};

export default HomeDrinks;