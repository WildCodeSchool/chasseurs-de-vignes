import React from "react";
import "./Result.css";
import { getDistance } from "geolib";
import RandomImage from "../RandomImage/RandomImage";

function Result({
  latitude,
  longitude,
  geo_point_2d,
  id,
  denominati,
  new_nomcom
}) {
  const distance = (
    getDistance(
      { latitude, longitude },
      {
        latitude: geo_point_2d[0],
        longitude: geo_point_2d[1]
      }
    ) / 1000
  ).toFixed(1);

  return (
    <div className="Result">
      <div className="Result__wrapper">
        <p className="Result__km">{distance} km</p>
        <RandomImage />
        <div className="Result__infos">
          <h3 className="Result__title">AOC {denominati}</h3>
          <p className="Result__desc">{new_nomcom.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default Result;
