import React from "react";
import LoaderGif from "./images/loader.gif";
import "./Loader.css";

function Loader() {
  return (
    <div className="col-12">
      <div className="Loader">
        <div className="Loader__wrapper">
          <img className="Loader__image" src={LoaderGif} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
