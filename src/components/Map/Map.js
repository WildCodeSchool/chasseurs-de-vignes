import React from "react";
import France from "@svg-maps/france.regions";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

const Map = () => (
  <div className="Map">
    <SVGMap
      map={France}
      onLocationClick={event => console.log(event.target.getAttribute("name"))}
    />
  </div>
);

export default Map;
