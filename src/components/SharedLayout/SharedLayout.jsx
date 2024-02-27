import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/drinks/drinksSelectors';
import { Backdrop } from '../../components/MotivatingModal/MotivatingModal.styled';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          {isLoading && (
            <Backdrop>
              <Loader />
            </Backdrop>
          )}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
