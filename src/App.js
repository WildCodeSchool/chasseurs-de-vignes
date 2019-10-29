import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import GeoButton from "./components/GeoButton";
import DisplayResults from "./components/DisplayResults";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: null,
        longitude: null
      }
    };
  }
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <section className="row">
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-md-6 col-lg-4"></div>
          <div className="col-12 col-md-6 col-lg-4">
            <GeoButton afterClick={coords => this.setState({ coords })} />
          </div>
        </section>
        {this.state.coords.latitude && (
          <DisplayResults coords={this.state.coords} />
        )}
      </div>
    );
  }
}

export default App;
