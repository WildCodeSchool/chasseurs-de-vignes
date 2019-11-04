import React from "react";
import "./css/Header.css";
import Logo from "./Logo";
import Navbar from "./Navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
    this.getMenuMobile = this.getMenuMobile.bind(this);
  }

  getMenuMobile(showMenu) {
    this.setState({
        isMobile: showMenu
    });
  }

    render() {
    const { isMobile } = this.state
    return (
      <header className="row">
        <div className="col-12 no-padding">
          <div className={isMobile ? "Header Header--mobile" : "Header"}>
            <Logo />
            <Navbar isMobile={(showMenu) => this.getMenuMobile(showMenu)} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
