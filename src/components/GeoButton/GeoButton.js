import React from "react";
import "./GeoButton.css";

function GeoButton({ afterClick, changeView, searchMethod }) {

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        afterClick({ latitude, longitude });
        changeView(false)
        searchMethod("geolocation")
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  return (
    <div className="GeoButton functions__geo__method">
      <button onClick={getPosition}><span>Me géolocaliser</span></button>
    </div>
  );
}

export default GeoButton;
