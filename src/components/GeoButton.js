import React from "react";

class GeoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: 0,
        longitude: 0
      }
    }
  }
  getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
          this.setState({
            coords: { 
              latitude,
              longitude
            }
          });
          this.props.afterClick({ latitude, longitude });
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };  
    
  render() {
      
    return (
      <div className="GeoButton">
      <button onClick={this.getPosition}>Locate me</button>
      </div>
    );
  }
}

export default GeoButton;
