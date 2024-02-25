import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import FooterDesc from '../Footer/FooterDesc/FooterDesc';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <FooterDesc />
    </>
  );
};

export default SharedLayout;
