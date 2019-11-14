import React from "react";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1>ERROR 404</h1>
      <img
        className="PageNotFound__image"
        src="https://media.giphy.com/media/XGauQmWCNn3n2PEK3X/giphy.gif"
        alt="Con de Mimes"
      />
    </div>
  );
}

export default PageNotFound;
