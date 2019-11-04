import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

    render() {
    const { isMobile } = this.state
    return (
      <header className="row">
        <div className="col-12 no-padding">
          <div className={isMobile ? "Header Header--mobile" : "Header"}>
            <Logo />
            <Navbar onBurgerButton={(isMobile) => this.setState({ isMobile })} isMobile={isMobile} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
