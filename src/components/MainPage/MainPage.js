import React, { Component } from "react";
import "./MainPage.css";
import axios from "axios";
import PageNavigation from "../PageNavigation/PageNavigation";
import SearchBar from "../SearchBar/SearchBar";
import GeoButton from "../GeoButton/GeoButton";
import ResultsList from "../ResultsList/ResultsList";
import Map from "../Map/Map";

const apiURL = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles`;
const rows = 12;

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aocs: [],
      totalResults: 0,
      totalPages: 0,
      currentStart: 0,
      coords: {
        latitude: null,
        longitude: null
      },
      radius: 50000,
      isLoading: true,
      searchMethod: null,
      nameRegion: null
    };
  }

  setCoords = coords => {
    this.setState(
      {
        coords
      },
      this.fetchAocs
    );
  };

  async fetchAocs(updatedPageNo = 0) {
    const pageNumber = updatedPageNo ? updatedPageNo : "";
    const {
      radius,
      coords: { latitude, longitude }
    } = this.state;
    const requestURL = `${apiURL}&rows=${rows}&start=${pageNumber}&geofilter.distance=${latitude}%2C${longitude}%2C${radius}`;

    this.setState({ isLoading: true });

    const res = await axios.get(requestURL);
    const { nhits, records } = res.data;
    const totalPagesCount = this.getPagesCount(nhits.total, rows);

    this.setState({
      aocs: records,
      totalResults: nhits,
      currentStart: updatedPageNo,
      totalPages: totalPagesCount,
      isLoading: false
    });
  }

  setSearchMethod = (type) => {
    this.setState({
      searchMethod: type
    });
  }

  getNameRegion = (region) => {
    this.setState({
      nameRegion: region
    });
  }

  getPagesCount = (total, denominator) => {
    const divisible = total % denominator === 0;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  handlePageClick = type => {
    const { currentStart, rows, query } = this.state;
    const updatedPageNo =
      "prev" === type ? currentStart - rows : currentStart + rows;
    this.fetchAocs(updatedPageNo, query);
  };

  render() {
    const { aocs, currentStart, totalResults, coords, isLoading, searchMethod, nameRegion } = this.state;
    const showPrevLink = 1 < currentStart;
    const showNextLink = totalResults > currentStart;

    return (
      <div className="MainPage">
        <section className="container__functions row">
          <div className="col-12 col-lg-4">
            <SearchBar />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Map afterClick={this.setCoords} searchMethod={this.setSearchMethod} getNameRegion={this.getNameRegion} />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <GeoButton afterClick={this.setCoords} />
          </div>
        </section>
        <section className="container__returns row">
          <div className={isLoading ? `MainPage__results--hidden` : ""}>
            <div className="col-12">
              <PageNavigation
                showPrevLink={showPrevLink}
                showNextLink={showNextLink}
                handlePrevClick={() => this.handlePageClick("prev")}
                handleNextClick={() => this.handlePageClick("next")}
              />
            </div>
          </div>
          {coords.latitude && (
            <div className="col-12">
              {(searchMethod === "map") ? 
              <ResultsList
                coords={coords}
                results={aocs}
                isLoading={isLoading}
                nameRegion={nameRegion}
                /> : 
                <ResultsList
                coords={coords}
                results={aocs}
                isLoading={isLoading}
                />
              }
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default MainPage;
