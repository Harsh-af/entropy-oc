import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import About from "./About";
import Order from "./Order";
import "./CSS/home.css";
import arrow from "../Images/icons/thin-arrow.png";

function Home() {
  const location = useLocation(); 
  const aboutRef = useRef(null);
  const orderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutRef.current.offsetTop) {
        if (location.pathname !== "/") {
          window.history.replaceState(null, null, "/");
        }
      } else if (
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < orderRef.current.offsetTop
      ) {
        if (location.pathname !== "/about") {
          window.history.replaceState(null, null, "/about");
        }
      } else {
        if (location.pathname !== "/order") {
          window.history.replaceState(null, null, "/order");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div>

      <div className="backgroundHome" ref={aboutRef} >
        <h1 style={{ fontSize: "70px", fontWeight: 900, fontFamily:"Obviously" }}>Entropy Pizzzza 🍕</h1>
        <p style={{ fontSize: "20px", fontWeight: 500, fontFamily:"Obviously", marginTop:"-30px" }}>
          Discover delicious pizzas made with love.<br />
          With flavours you wouldnt have imagined.
        </p>
        <button className="button-main">Explore our selection<img className="arrow-main" src={arrow} alt=""/></button>
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
