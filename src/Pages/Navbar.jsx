import React from "react";
import { Link } from "react-scroll";

import logo from "../Images/icons/logo-main.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" smooth={true} duration={500} ><img className="logo" src={logo} alt="ent_logo" /></Link>
        <div className="nav-link">
          <div className="list1">
            <Link to="about" smooth={true} duration={500}>AboutUs</Link><span className="pizza-emoji1"> 🍕</span>
          </div>
          <div className="list2">
            <Link to="order" smooth={true} duration={500}>Order</Link><span className="pizza-emoji2"> 🍕</span>
          </div>
          <div className="list3">
            <Link to="order" smooth={true} duration={500}>Contact Us</Link><span className="pizza-emoji3"> 🍕</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
