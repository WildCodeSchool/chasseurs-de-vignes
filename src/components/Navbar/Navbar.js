import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ isMobile, onBurgerButton, changeViewNavbar, viewMethod }) {
  const getMenuMobile = () => {
    onBurgerButton(!isMobile);
  };
  const hideSearchMethod = () => {
    changeViewNavbar(true)
  }

  return (
    <div className="Navbar">
      <ul className="Navbar__group">
        <li className="Navbar__items__wrapper">
          <NavLink activeClassName="Navbar__items__link--active" className="Navbar__items__link" to="/search" onClick={hideSearchMethod}></NavLink>
        </li>
        <li className="Navbar__items__wrapper">
          <NavLink activeClassName="Navbar__items__link--active" className="Navbar__items__link" to="/map" onClick={hideSearchMethod}></NavLink>
        </li>
        <li className="Navbar__items__wrapper">
          <NavLink activeClassName="Navbar__items__link--active" className="Navbar__items__link" to="/geolocation" onClick={hideSearchMethod}></NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
