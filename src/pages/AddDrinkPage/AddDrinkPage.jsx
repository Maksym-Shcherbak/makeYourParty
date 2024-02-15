import AddDrinkForm from '../../components/AddDrink/AddDrinkForm/AddDrinkForm';
import SectionTitle from '../../components/Drink/titleDrink/titleDrinks';

const AddDrinkPage = () => {
  return (
    <div>
      <SectionTitle title={'Add Drink'} />
      <AddDrinkForm />

      {/* follow us  */}
      <div>
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com/goITclub/">icon</a>
        <a href="https://www.instagram.com/goitclub/">icon</a>
        <a href="https://www.youtube.com/c/GoIT">icon</a>
      </div>
      {/* Popular drinks  */}
      <h3>Popular drinks</h3>
      {/* link:id */}
      <ul></ul>
    </div>
  );
};

export default AddDrinkPage;
