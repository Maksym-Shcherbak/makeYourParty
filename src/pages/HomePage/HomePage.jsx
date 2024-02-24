import { useSelector } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle';
import { Container } from '../../styled/Container.js';
import { Section } from '../../styled/Section.js';
import { HomeMainLink } from '../../components/HomeDrinks/HomeDrinksStyled.jsx';
import { HomeDescription,HomeSection,HomeHeroImg,HomeTitlDescWrap,HeroImgWrap} from './HomePageStyled.jsx';
// import image from '../../images/blue_iced_tea@2x.webp';
import HomeDrinks from '../../components/HomeDrinks/HomeDrinks.jsx';
import { selectIsLoading, selectError } from '../../redux/drinks/drinksSelectors.js'
import { Loader } from '../../components/Loader/Loader.jsx';





const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  return (
    <Container>
      
      {isLoading && !isError && <Loader />}
        <HomeSection>
        <HomeTitlDescWrap>
        <PageTitle title={'Craft Your Perfect Drink with Drink Master'} />
        <HomeDescription>Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages.</HomeDescription>
        <HomeMainLink to="/add">Add drink</HomeMainLink>
        </HomeTitlDescWrap>
        <HeroImgWrap>
          <HomeHeroImg/>
        </HeroImgWrap>
        
      </HomeSection>
      <Section>
        <HomeDrinks />
      </Section>
      
      </Container>
  );
};

export default HomePage;
