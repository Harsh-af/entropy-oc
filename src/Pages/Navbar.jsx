import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="about" smooth={true} duration={500} className="logo">Entropy</Link>
        <ul className="nav-links">
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="order" smooth={true} duration={500}>Order</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
