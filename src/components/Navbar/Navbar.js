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
        <li>
          <NavLink activeClassName="Navbar__items--active" className="Navbar__items" to="/search">Search</NavLink>
        </li>
        <li className="Navbar__items">
          <NavLink activeClassName="Navbar__items--active" className="Navbar__items" to="/map">Map</NavLink>
        </li>
        <li className="Navbar__items">
          <NavLink activeClassName="Navbar__items--active" className="Navbar__items" to="/geolocation">Geolocation</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
