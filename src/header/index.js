import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  return (
    <header className="site__header">
      {/* Logo */}
      <Link className="navbar-brand nav_ac" to="/">
        {logotext}
      </Link>

      {/* Navigation Links */}
      <nav className="header__nav">
        <ul className="nav__links">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/portfolio" className="nav__link">Portfolio</Link></li>
          <li><Link to="/about" className="nav__link">About</Link></li>
          <li><Link to="/contact" className="nav__link">Contact</Link></li>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <Themetoggle />
    </header>
  );
};

export default Headermain;
