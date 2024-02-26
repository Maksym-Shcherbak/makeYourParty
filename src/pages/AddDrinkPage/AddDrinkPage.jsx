import AddDrinkForm from '../../components/AddDrink/AddDrinkForm/AddDrinkForm';
import { SectionTitleAddDrink } from '../../components/AddDrink/AddDrinkForm/AddDrinkForm.styled';
import FollowUs from '../../components/Footer/FollowUs/FollowUs';
import PopularDrinks from '../../components/AddDrink/PopularDrinks/PopularDrinks';
import { Container } from '../../styled/Container';
import { ListWrapper, SideBar, Wrapper } from './AddDrinkPage.styled';
import { TitleFollowUs } from './AddDrinkPage.styled';
import { Section } from '../../styled/Section';

const AddDrinkPage = () => {
  return (
    <Container>
      <Section>
        <SectionTitleAddDrink>Add Drink</SectionTitleAddDrink>
        <Wrapper>
          <AddDrinkForm />
          <SideBar>
            <TitleFollowUs>Follow Us</TitleFollowUs>
            <ListWrapper>
              <FollowUs />
            </ListWrapper>
            <PopularDrinks />
          </SideBar>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default AddDrinkPage;
