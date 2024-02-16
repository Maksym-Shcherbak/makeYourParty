import AddDrinkForm from '../../components/AddDrink/AddDrinkForm/AddDrinkForm';
import FollowUs from '../../components/AddDrink/FollowUs/FollowUs';
import PopularDrinks from '../../components/AddDrink/PopularDrinks/PopularDrinks';
// import SectionTitle from '../../components/Drink/titleDrink/titleDrinks';
// import { Container } from '../../styled/Container';
import { Section } from '../../styled/Section';

const AddDrinkPage = () => {
  return (
    <>
      <Section>
        <AddDrinkForm />
      </Section>
      <FollowUs />
      <PopularDrinks />
    </>
  );
};

export default AddDrinkPage;
