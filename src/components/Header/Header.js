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

  hideFull = view => {
    this.props.hideFullPage(view);
  };

  render() {
    const { isMobile } = this.state;
    return (
      <header className="Header">
        <Logo changeView={view => this.hideSearchMethod(view)} />
        <Navbar
          onBurgerButton={this.toggleMenu}
          isMobile={isMobile}
          changeView={view => this.hideSearchMethod(view)}
          hideFullPage={view => this.hideFull(view)}
        />
      </header>
    );
  }
}

export default Header;
