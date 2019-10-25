import React from "react";
import France from "@svg-maps/france.regions";
import {SVGMap } from "react-svg-map"; 
import "react-svg-map/lib/index.css";
 
class Map extends React.Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return <SVGMap map={France} onLocationClick={event => console.log(event.target.getAttribute('name'))} />;
  }
}
 
export default Map;