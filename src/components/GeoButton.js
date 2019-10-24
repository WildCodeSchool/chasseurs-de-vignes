import React from "react";
import { geolocated } from "react-geolocated";
import DisplayAoc from "./DisplayAoc";

class GeoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
    this.getPosition = this.getPosition.bind(this);
  }
  
  getPosition() {
    this.setState({
      latitude: this.props.coords.latitude,
      longitude: this.props.coords.longitude
    });
  }

  render() {
    return (
      <div className="GeoButton">
        <button onClick={this.getPosition} className="positionButton">
          Me géolocatiser
        </button>
        {this.state.latitude && this.state.longitude ? (
          <DisplayAoc
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default geolocated()(GeoButton);
