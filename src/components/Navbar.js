import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar({ isMobile, onBurgerButton }) {
  const getMenuMobile = () => {
    onBurgerButton(!isMobile);
  }
  return (
    <div className="Navbar">
      <FontAwesomeIcon onClick={getMenuMobile} id="open-menu" icon={isMobile ? faTimes : faBars} />
      <div className="Navbar">
        <ul className={isMobile ? "Navbar-group Navbar-group--mobile" : "Navbar-group"}>
          <li className="Navbar-group-item">
            <a href="/public/index.html">Accueil</a>
          </li>
          <li className="Navbar-group-item">
            <a href="/public/index.html">À propos</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
