import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
    // window.scrollTo({ behavior: 'smooth', top: 0 });
    // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
  }, [pathname]);

  return null;
}
