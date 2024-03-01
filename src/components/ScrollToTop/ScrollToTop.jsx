import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(
      () =>
        document
          .getElementById('root')
          .scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
      0
    );
  }, [pathname]);

  return null;
}
