import PageTitle from '../../components/PageTitle/PageTitle';
import { Container } from '../../styled/Container.js';
import {Section} from '../../styled/Section.js'

import { UtilsMainLink } from '../../components/HomeDrinks/HomeDrinksStyled.jsx';
import { HomeDescription,HomeSection,HomeHeroImg,HomeTitlDescWrap} from './HomePageStyled.jsx';
import image from '../../images/main_blue_coctail.png';

import HomeDrinks from '../../components/HomeDrinks/HomeDrinks.jsx';



const HomePage = () => {


  return (
    <Container>
      <HomeSection>
        <HomeTitlDescWrap>
        <PageTitle title={'Craft Your Perfect Drink with Drink Master'} />
        <HomeDescription>Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages.</HomeDescription>
        <UtilsMainLink to="/add">Add drink</UtilsMainLink>
      </HomeTitlDescWrap>
        <HomeHeroImg src={image}/>
      </HomeSection>
      <Section>
        <HomeDrinks />
      </Section>
      
      </Container>
  );
};

export default HomePage;
