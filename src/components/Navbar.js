import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getMenuMobile = this.getMenuMobile.bind(this)
  }

  getMenuMobile() {
    this.props.onBurgerButton(!this.props.isMobile);
  }

  render() {
    const { isMobile } = this.props
    return (
      <div>
        <FontAwesomeIcon onClick={this.getMenuMobile} id="open-menu" icon={isMobile ? faTimes : faBars} />
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
    );
  }
}
export default Navbar;
