import React from "react";
import France from "@svg-maps/france.regions";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

const regions = {
  ara: {
    latitude: null,
    longitude: null
  },
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickMap: false,
      regionClick: null,
      coords: {
        latitude: null,
        longitude: null
      }
    };
  }

  getPositionMap = () => {
    const { clickMap } = this.state
    if (clickMap) {
      
    }
  }

  getMap = event => {
    this.setState({
      clickMap: true,
      regionClick: event.target.getAttribute("id")
    });
  };

  render() {
    return (
      <div className="Map">
        <SVGMap map={France} onLocationClick={event => this.getMap(event)} />
      </div>
    );
  }
}

export default Map;
