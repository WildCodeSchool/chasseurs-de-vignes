import React from "react";
import LoaderGif from "./images/loader.gif"
import "./Loader.css";

function Loader() {
    return (
      <div className="col-12">
        <div className="Loader">
          <img src={LoaderGif} />
        </div>
      </div>
    )
}

export default Loader;
