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
      },
      isLoading: false
    };
    this.setCoords = this.setCoords.bind(this);
    this.getLoader = this.getLoader.bind(this);
    this.stopLoader = this.stopLoader.bind(this);
  }
  
  setCoords(coords) {
    this.setState({
      coords
    });
  }

  getLoader(loading) {
    this.setState({
      isLoading: loading
    });
    setTimeout(this.stopLoader, 3000)
  }

  stopLoader() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { coords, isLoading } = this.state;
    return (
      <div className="App container-fluid">
        <Header />
        <section className="container__functions">
          <div className="col-12 col-lg-4">{/* <SearchBar /> */}</div>
          <div className="col-12 col-md-6 col-lg-4">{/* <Map /> */}</div>
          <div className="col-12 col-md-6 col-lg-4">
            <GeoButton
              afterClick={this.setCoords}
              afterClickLoad={this.getLoader}
            />
          </div>
        </section>
        <section className="container__returns">
          {coords.latitude && (
            <ResultsList coords={coords} isLoading={isLoading} />
          )}
        </section>
      </div>
    );
  }
}

export default App;
