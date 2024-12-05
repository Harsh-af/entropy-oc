import React from "react";
import { Link } from "react-scroll";

import logo from "../Images/icons/logo-main.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" smooth={true} duration={500} ><img className="logo" src={logo} alt="ent_logo" /></Link>
        <div className="nav-links">
          <div className="list">
            <Link to="about" smooth={true} duration={500}>About<span className="pizza-emoji1"> 🍕</span></Link>
          </div>
          <div className="list">
            <Link to="order" smooth={true} duration={500}>Order<span className="pizza-emoji2"> 🍕</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
