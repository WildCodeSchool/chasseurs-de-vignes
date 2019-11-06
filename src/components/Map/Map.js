import React, { Component } from "react";
import France from "@svg-maps/france.regions";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

const regions = [{
    id: "ara",
    latitude: 45.481437830498514,
    longitude: 4.5141887834336085
  },
  {
    id: "bfc",
    latitude: 47.21963038384999,
    longitude: 4.748610310762349
  },
  {
    id: "bre",
    latitude: 47.89207487236879,
    longitude: -3.6118343602272613
  },
  {
    id: "cvl",
    latitude: 47.52911811949319,
    longitude: 1.805427692205875
  },
  {
    id: "cor",
    latitude: 42.1716153,
    longitude: 9.1710018
  },
  {
    id: "ges",
    latitude: 48.690745,
    longitude: 5.617216
  },
  {
    id: "hdf",
    latitude: 49.955555,
    longitude: 2.792501
  },
  {
    id: "idf",
    latitude: 49.03646231803129,
    longitude: 2.9219899503280455
  },
  {
    id: "nor",
    latitude: 49.1256272,
    longitude: 0.1032153
  },
  {
    id: "naq",
    latitude: 45.2033333,
    longitude: 0.19333333333333333
  },
  {
    id: "occ",
    latitude: 43.9266695,
    longitude: 2.1436188
  },
  {
    id: "pdl",
    latitude: 47.4599985,
    longitude: -0.7947931
  },
  {
    id: "pac",
    latitude: 43.73853498899408,
    longitude: 6.388010745793065
  }

]

class Map extends Component {
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

  getPositionRegions = () => {
    const { regionClick } = this.state
    const coordsRegion = regions.filter(x => x.id === regionClick)  
    if (regionClick) {
      this.setState({
        coords: {
          latitude: coordsRegion[0].latitude,
          longitude: coordsRegion[0].longitude
        }
      })
    }
    const { latitude, longitude} = this.state.coords
    this.props.afterClick({ latitude, longitude })
  }

  getMap = event => {
    this.setState({
      clickMap: true,
      regionClick: event.target.getAttribute("id")
    });
    this.getPositionRegions()
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
