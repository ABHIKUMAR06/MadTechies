import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar/Nav';
import Footer from './Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  const smoothScrollToTop = () => {
    const scrollDuration = 800; 
    const scrollStep = -window.scrollY / (scrollDuration / 16); 
    const scroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    smoothScrollToTop();
  }, [location]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
