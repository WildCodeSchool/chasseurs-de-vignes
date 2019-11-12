import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <div href="./" className="Logo__wrapper">
          <span>LOGO</span>
        </div>
        </Link>
      </div>
  );
}

export default Logo;
