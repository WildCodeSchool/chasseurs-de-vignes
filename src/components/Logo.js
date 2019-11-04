import React from "react";
import logo from "./images/logo-wine-not--white.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="Header-brand">
        <a href="./">
          <img src={logo} alt="Logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
