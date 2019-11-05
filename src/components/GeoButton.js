import React from "react";

function GeoButton({ afterClick, afterClickLoad }) {

  const getPosition = () => {
    afterClickLoad(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        afterClick({ latitude, longitude });
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  return (
    <div className="GeoButton">
      <button onClick={getPosition}>Locate me</button>
    </div>
  );
}

export default GeoButton;
