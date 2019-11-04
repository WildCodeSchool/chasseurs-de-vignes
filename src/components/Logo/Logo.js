import React from "react";
import logo from "./logo-wine-not--white.png";

function Logo() {
  return (
    <div className="Header-brand">
      <a href="./">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
}

export default Logo;
