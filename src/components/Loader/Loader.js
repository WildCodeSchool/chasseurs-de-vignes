import React from 'react';
import LoaderGif from './images/loader.gif';
import './Loader.css';

function Loader() {
  return (
    <div className="Loader">
      <div className="Loader__wrapper">
        <img className="Loader__image" src={LoaderGif} alt="Loader" />
      </div>
    </div>
  );
}

export default Loader;
