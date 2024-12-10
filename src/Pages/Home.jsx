import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import "./CSS/home.css";
import Arrow from "../Images/icons/white_arrow.png";
import Navbar from "./Navbar";
import "../App.css";
import logo from "../Images/icons/logo-main.png";

function Home() {

  return (
    <div>
      <Navbar />
      
      <div className="backgroundHome">
        {/* <Link to="/" smooth={true} duration={500} ><img className="logo" src={logo} alt="ent_logo" /></Link> */}
        <h1 style={{ fontSize: "70px", fontFamily:"ObviouslyMed" }}><span className="text-gradient">Entropy Pizza.</span> </h1>
        <p style={{ fontSize: "20px", fontFamily:"Obviously", marginTop:"-30px" }}>
          Discover delicious pizzas made with love.<br />
          With flavours you wouldn't have imagined.
        </p>
        {/* <button className="button-main">Explore our selection<img className="arrow-main" src={arrow} alt=""/></button> */}
        <button className="button-main">Explore our selection</button>
        {/* <div className="arrow-container">
          <p className="arrow-text">Scroll down</p>
          <img className="arrow-white" src={Arrow} alt="" />
        </div> */}
      </div>

    </div>
  );
}

export default Home;
