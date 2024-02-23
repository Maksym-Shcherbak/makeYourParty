import { useDispatch, useSelector } from 'react-redux';
import { getMainPage } from '../../redux/drinks/drinksOperations';
import { signIn } from '../../redux/auth/authOperations';

const HomePage = () => {
  const dispatch = useDispatch();

  const come = useSelector((state) => state.drinks.main);
  console.log(come);

  const handleclick = () => {
    dispatch(getMainPage());
  };

  const click = () => {
    {
      dispatch(
        signIn({
          email: 'user05@gmail.com',
          password: 'qwerty',
        })
      );
    }
  };

  return (
    <div>
      <h1>You are in</h1>
      <button onClick={handleclick}></button>
      <button onClick={click}></button>
    </div>
  );
};

export default HomePage;
