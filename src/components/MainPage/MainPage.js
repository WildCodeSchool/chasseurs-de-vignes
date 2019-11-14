import React, { Component } from "react";
import "./MainPage.css";
import axios from "axios";
import PageNavigation from "../PageNavigation/PageNavigation";
import SearchBar from "../SearchBar/SearchBar";
import GeoButton from "../GeoButton/GeoButton";
import ResultsList from "../ResultsList/ResultsList";
import Map from "../Map/Map";
import Filter from "../Filter/Filter";
import { Switch, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";
import HomePage from "../HomePage/HomePage";
import AboutUs from "../AboutUs/AboutUs";

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
      () => this.fetchAocs(0)
    );
  };

  setRadius = radius => {
    this.setState(
      {
        radius
      },
      () => this.fetchAocs(0)
    );
  };

  async fetchAocs(numberStart) {
    const numberStartPage = numberStart;
    const {
      radius,
      coords: { latitude, longitude }
    } = this.state;
    const requestURL = `${apiURL}&rows=${rows}&start=${numberStartPage}&geofilter.distance=${latitude}%2C${longitude}%2C${radius}`;

    this.setState({ isLoading: true, showFunction: false });

    const res = await axios.get(requestURL);
    const { nhits, records } = res.data;
    const totalPagesCount = this.getPagesCount(nhits, rows);

    this.setState({
      aocs: records,
      totalResults: nhits,
      currentStart: numberStartPage,
      totalPages: totalPagesCount,
      isLoading: false
    });
  }

  setSearchMethod = type => {
    this.setState({
      searchMethod: type
    });
  };

  getNameRegion = region => {
    this.setState({
      nameRegion: region
    });
  };

  getPagesCount = (total, denominator) => {
    const divisible = total % denominator === 0;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  handlePageClick = action => {
    const { currentStart } = this.state;
    action === "next"
      ? this.fetchAocs(currentStart + rows)
      : this.fetchAocs(currentStart - rows);
  };

  hideSearchMethod = () => {
    const { viewMethod } = this.props;
    const changeView = !viewMethod;
    this.props.changeView(changeView);
  };

  diviseScreen = view => {
    this.props.changeView(view);
  };

  render() {
    const {
      radius,
      aocs,
      currentStart,
      totalResults,
      coords,
      isLoading,
      searchMethod,
      nameRegion
    } = this.state;
    const { viewMethod, fullPage } = this.props;

    return (
      <main className="MainPage">
        <section
          className={`MainPage__wrapper MainPage__left ${fullPage &&
            `MainPage__left--full`} ${!viewMethod && `MainPage__left--hide`}`}
        >
          <div className="functions__wrapper">
            <div className="functions__wrapper__line">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/search">
                  <h2 className="functions__title">Rechercher une AOC</h2>
                  <p className="functions__desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    At, voluptate! Illo beatae voluptatem, qui explicabo modi,
                    ratione repudiandae pariatur vel iusto est?
                  </p>
                  <SearchBar
                    afterClick={this.setCoords}
                    changeView={view => this.diviseScreen(view)}
                    searchMethod={this.setSearchMethod}
                  />
                </Route>
                <Route path="/map">
                  <h2 className="functions__title">Rechercher une AOC</h2>
                  <p className="functions__desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    At, voluptate! Illo beatae voluptatem, qui explicabo modi,
                    ratione repudiandae pariatur vel iusto est?
                  </p>
                  <Map
                    afterClick={this.setCoords}
                    searchMethod={this.setSearchMethod}
                    getNameRegion={this.getNameRegion}
                    changeView={view => this.diviseScreen(view)}
                  />
                </Route>
                <Route path="/geolocation">
                  <h2 className="functions__title">Rechercher une AOC</h2>
                  <p className="functions__desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    At, voluptate! Illo beatae voluptatem, qui explicabo modi,
                    ratione repudiandae pariatur vel iusto est?
                  </p>
                  <GeoButton
                    afterClick={this.setCoords}
                    changeView={view => this.diviseScreen(view)}
                    searchMethod={this.setSearchMethod}
                  />
                </Route>
                <Route path="/about-us">
                  <AboutUs />
                </Route>
                <Route path="/*">
                  <PageNotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
        <section
          className={`MainPage__wrapper MainPage__right ${fullPage &&
            `MainPage__right--hide`} ${!viewMethod && `MainPage__right--show`}`}
        >
          <div className="button__arrow__wrapper">
            <button onClick={this.hideSearchMethod}></button>
          </div>
          {isLoading && (
            <div className="Loader__content">
              <Loader />
            </div>
          )}
          {coords.latitude && (
            <>
              <ResultsList
                coords={coords}
                results={aocs}
                isLoading={isLoading}
                currentRadius={radius}
                nbResults={totalResults}
                searchMethod={searchMethod}
                nameRegion={nameRegion}
              />
              <div className="results__options">
                <Filter changeRadius={this.setRadius} currentRadius={radius} />
                {totalResults && (
                  <PageNavigation
                    currentStart={currentStart}
                    totalResults={totalResults}
                    rows={rows}
                    handleClick={action => this.handlePageClick(action)}
                  />
                )}
              </div>
            </>
          )}
        </section>
      </main>
    );
  }
}

export default MainPage;
