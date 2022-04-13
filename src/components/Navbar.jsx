import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import "../../src/App.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth="true" duration={2000}>
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} offset={51} duration={2000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="products" smooth={true} offset={51} duration={2000}>
            Produtos
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={2000}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={2000}>
            Cadastre-se
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
