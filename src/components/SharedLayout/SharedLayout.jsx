import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import FooterDesc from '../Footer/FooterDesc/FooterDesc';
import FooterMob from '../Footer/FooterMob/FooterMob';
import FooterTab from '../Footer/FooterTab/FooterTab';
import { Loader } from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';

const SharedLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
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
