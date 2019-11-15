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

  componentWillReceiveProps(nextProps) {
    const { fullPage } = this.props;
    if (nextProps.fullPage !== fullPage) {
      this.setState({
        coords: {
          latitude: null,
          longitude: null
        },
        isLoading: true
      });
    }
  }

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
                  <HomePage changeView={view => this.diviseScreen(view)} />
                </Route>
                <Route path="/search">
                  <h2 className="functions__title">
                    Tape m'en <span className="aoc__color">vin</span> !
                  </h2>
                  <p className="functions__desc">
                    Tu connais le nom de ton AOC et tu cherches sa localité dans
                    notre Belle France ? Écris son nom ici mais sois pinard, on
                    s'occupe du reste !
                  </p>
                  <SearchBar
                    afterClick={this.setCoords}
                    changeView={view => this.diviseScreen(view)}
                    searchMethod={this.setSearchMethod}
                  />
                </Route>
                <Route path="/map">
                  <h2 className="functions__title">
                    La Carte des <span className="aoc__color">Vins</span>
                  </h2>
                  <p className="functions__desc">
                    Tu es curieux de savoir quelles AOC sont présentes dans une
                    région française spécifique ? Cépage la mer à boire, il
                    suffit de cliquer sur la carte !
                  </p>
                  <Map
                    afterClick={this.setCoords}
                    searchMethod={this.setSearchMethod}
                    getNameRegion={this.getNameRegion}
                    changeView={view => this.diviseScreen(view)}
                  />
                </Route>
                <Route path="/geolocation">
                  <h2 className="functions__title">
                    Allez viens, je t'emmène au{" "}
                    <span className="aoc__color">vin</span>
                  </h2>
                  <p className="functions__desc">
                    Tu veux connaître les AOC de ta région ? <br />
                    Géolocalise-toi et... TANIN, elles apparaissent comme par
                    magie autour de toi !
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
        {fullPage && (
          <section
            className={`MainPage__wrapper MainPage__right MainPage__right--about ${!viewMethod &&
              `MainPage__right--show`}`}
          >
            <AboutUs />
          </section>
        )}
        <section
          className={`MainPage__wrapper MainPage__right ${fullPage &&
            `MainPage__right--hide`} ${!viewMethod && `MainPage__right--show`}`}
        >
          {coords.latitude && (
            <div className="button__arrow__wrapper">
              <button onClick={this.hideSearchMethod}></button>
            </div>
          )}
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
