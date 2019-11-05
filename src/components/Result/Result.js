import React from "react";
import './Result.css'
import { getDistance } from "geolib";
import RandomImage from "../RandomImage/RandomImage";

function Result({ latitude, longitude, geo_point_2d, id, denominati, new_nomcom }) {
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
    <div
      className="ResultsList__items col-12 col-sm-6 col-md-4 col-lg-3 no-padding"
      key={id}
    >
      <p className="Result-km">{distance} km</p>
      <RandomImage />
      <div className="Result-infos">
        <h3 className="Result-infos-title">AOC {denominati}</h3>
        <p className="Result-infos-desc">
          {new_nomcom.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default Result;
