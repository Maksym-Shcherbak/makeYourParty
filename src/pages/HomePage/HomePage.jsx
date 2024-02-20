import MainDrinkList from '../../components/MainDrinkList/MainDrinkList.jsx';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Container } from '../../styled/Container.js';
import drinks from '../../data/recipes.json';

import { HomeDescription,HomeSection,HomeHeroBtn ,HomeHeroImg,HomeTitlDescWrap} from './HomePageStyled.jsx';
import image from '../../images/main_blue_coctail.png';


const HomePage = () => {
  return (
    <Container>
      <HomeSection>
        <HomeTitlDescWrap>
        <PageTitle title={'Craft Your Perfect Drink with Drink Master'} />
        <HomeDescription>Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages.</HomeDescription>
        <HomeHeroBtn type="button">Add drink</HomeHeroBtn>
      </HomeTitlDescWrap>
        <HomeHeroImg src={image}/>
      </HomeSection>
      
      <MainDrinkList drinks={drinks} text={'see more'} />
      </Container>
  );
};

export default HomePage;
