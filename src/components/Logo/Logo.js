import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo({ changeView }) {
  const hideSearchMethod = () => {
    changeView(true);
  };
  return (
    <div className="Logo">
      <Link to="/" onClick={hideSearchMethod}>
        <div href="./" className="Logo__wrapper">
          <span>LOGO</span>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
