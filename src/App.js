import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Map from "./components/Map";
import GeoButton from "./components/GeoButton";
import ResultsList from "./components/ResultsList/ResultsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: null,
        longitude: null
      }
    };
    this.setCoords = this.setCoords.bind(this)
  }

  setCoords(coords) {
    this.setState({
      coords
    })
  }

  render() {
    const { coords } = this.state
    return (
      <div className="App container-fluid">
        <Header />
        <section className="row">
          <div className="col-12 col-lg-4"><SearchBar /></div>
          <div className="col-12 col-md-6 col-lg-4"><Map /></div>
          <div className="col-12 col-md-6 col-lg-4">
            <GeoButton afterClick={this.setCoords} />
          </div>
        </section>
        {coords.latitude && (
          <ResultsList coords={coords} />
        )}
      </div>
    );
  }
}

export default App;
