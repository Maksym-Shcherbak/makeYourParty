import AddDrinkForm from '../../components/AddDrink/AddDrinkForm/AddDrinkForm';
import { SectionTitleAddDrink } from '../../components/AddDrink/AddDrinkForm/AddDrinkForm.styled';
import FollowUs from '../../components/AddDrink/FollowUs/FollowUs';
import PopularDrinks from '../../components/AddDrink/PopularDrinks/PopularDrinks';
import { Container } from '../../styled/Container';
import { SideBar, Wrapper } from './AddDrinkPage.styled';

const AddDrinkPage = () => {
  return (
    <Container>
      <SectionTitleAddDrink>Add Drink</SectionTitleAddDrink>
      <Wrapper>
        <AddDrinkForm />
        <SideBar>
          <FollowUs />
          <PopularDrinks />
        </SideBar>
      </Wrapper>
    </Container>
  );
};

export default AddDrinkPage;
