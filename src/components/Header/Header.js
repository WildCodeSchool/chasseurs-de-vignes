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
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(isMobile) {
    this.setState({
      isMobile
    });
  }

  hideSearchMethod = view => {
    this.props.changeView(view);
  };

  render() {
    const { isMobile } = this.state;
    const { viewMethod } = this.props;
    return (
      <header className="Header">
        <Logo />
        <Navbar
              onBurgerButton={this.toggleMenu}
              isMobile={isMobile}
              changeView={(view) => this.hideSearchMethod(view)}
            />
      </header>
    );
  }
}

export default Header;
