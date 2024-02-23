import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Navigation } from '../Header/Navigation/Navigation';
import FooterDesc from '../Footer/FooterDesc/FooterDesc';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <FooterDesc />
    </>
  );
};

export default SharedLayout;
