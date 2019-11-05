import React from "react";
import "./App.css";
import Header from "./components/Header";
import GeoButton from "./components/GeoButton";
import Map from "./components/Map";
import SearchBar from './components/SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aoc : ''    
    }
  }
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <section className="row">
          <div className="col-12">
            <div className="border">Heading title</div>
          </div>
        </section>
        <section className="row">
          <div className="col-12 col-lg-4">
            <div className="border"> <SearchBar /></div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="border"> Interactive map <Map /></div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="border">
              <GeoButton />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
