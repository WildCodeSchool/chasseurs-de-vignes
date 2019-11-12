import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ isMobile, onBurgerButton }) {
  const getMenuMobile = () => {
    onBurgerButton(!isMobile);
  };
  return (
    <div className="Navbar">
      <ul className="Navbar__group">
        <li className="Navbar__items__wrapper">
          <NavLink activeClassName="Navbar__items__link--active" className="Navbar__items__link" to="/search"></NavLink>
        </li>
        <li className="Navbar__items__wrapper">
          <NavLink activeClassName="Navbar__items__link--active" className="Navbar__items__link" to="/map"></NavLink>
        </li>
        <li className="Navbar__items__wrapper">
          <NavLink activeClassName="Navbar__items__link--active" className="Navbar__items__link" to="/geolocation"></NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
