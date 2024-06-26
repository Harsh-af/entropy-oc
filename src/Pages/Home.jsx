import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import About from './About';
import Order from './Order';

function Home() {
  const location = useLocation(); 
  const aboutRef = useRef(null);
  const orderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutRef.current.offsetTop) {
        if (location.pathname !== '/') {
          window.history.replaceState(null, null, '/');
        }
      } else if (
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < orderRef.current.offsetTop
      ) {
        if (location.pathname !== '/about') {
          window.history.replaceState(null, null, '/about');
        }
      } else {
        if (location.pathname !== '/order') {
          window.history.replaceState(null, null, '/order');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <div>
      <div className="backgroundHome" ref={aboutRef} >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Welcome to Entropy</h1>
        <p style={{ fontSize: '20px' }}>
          Discover delicious pizzas made with love.
        </p>
        <p style={{ fontSize: '20px' }}>
          Explore our menu and place your order now!
        </p>
      </div>
      <div className="backgroundAbout" id="about" ref={orderRef} >
        <About />
      </div>
      <div className="backgroundOrder" id="order" ref={orderRef} >
        <Order />
      </div>
    </div>
  );
}

export default Home;
