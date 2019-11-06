import React, { Component } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  
  toggleMenu(isMobile) {
    this.setState({
      isMobile
    })
  }

  render() {
    const { isMobile } = this.state;
    return (
      <header className="row">
        <div className="col-12 no-padding">
          <div className={isMobile ? "Header Header--mobile" : "Header"}>
            <Logo />
            <Navbar
              onBurgerButton={this.toggleMenu}
              isMobile={isMobile}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
