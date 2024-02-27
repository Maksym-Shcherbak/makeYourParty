import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import FooterDesc from '../Footer/FooterDesc/FooterDesc';
import FooterMob from '../Footer/FooterMob/FooterMob';
import FooterTab from '../Footer/FooterTab/FooterTab';
import { Loader } from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/drinks/drinksSelectors';
import { Backdrop } from '@mui/material';

const SharedLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          {isLoading && (
            <Backdrop open={true}>
              <Loader />
            </Backdrop>
          )}
          <Outlet />
        </Suspense>
      </main>
      {!isTablet && !isDesktop && <FooterMob />}
      {isTablet && !isDesktop && <FooterTab />}
      {isDesktop && <FooterDesc />}
    </>
  );
};

export default SharedLayout;
