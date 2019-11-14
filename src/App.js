import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import axios from "axios";
const apiURL = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles`;
const rows = 12;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMethod: true,
      fullPage: true,
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
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
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
  changeView = view => {
    this.setState({
      viewMethod: view
    });
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
    this.changeView(changeView);
  };

  diviseScreen = view => {
    this.changeView(view);
  };
  hideFull = view => {
    this.setState({
      fullPage: view
    });
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    if (this.state.fullPage === true) {
      if (pathname !== "/") {
        this.setState({
          fullPage: false
        });
      }
    }
  }
  componentDidUpdate() {
    const { pathname } = this.props.location;
    if (this.state.fullPage === false) {
      if (pathname === "/" || pathname === "/about-us") {
        this.setState({
          fullPage: true,
          coords: { latitude: null, longitude: null },
          isLoading: true
        });
      }
    }
  }
  render() {
    const { viewMethod, fullPage } = this.state;
    const {
      radius,
      aocs,
      currentStart,
      totalResults,
      coords,
      isLoading,
      searchMethod,
      nameRegion,
      rows
    } = this.state;
    return (
      <div className="App container-fluid">
        <Header
          changeView={view => this.changeView(view)}
          hideFullPage={view => this.hideFull(view)}
          viewMethod={viewMethod}
        />
        <MainPage
          changeView={this.changeView}
          diviseScreen={this.diviseScreen}
          setSearchMethod={this.setSearchMethod}
          getNameRegion={this.getNameRegion}
          setCoords={this.setCoords}
          rows={rows}
          nameRegion={nameRegion}
          radius={radius}
          aocs={aocs}
          currentStart={currentStart}
          totalResults={totalResults}
          coords={coords}
          isLoading={isLoading}
          searchMethod={searchMethod}
          changeView={view => this.changeView(view)}
          viewMethod={viewMethod}
          fullPage={fullPage}
        />
      </div>
    );
  }
}
const ShowTheLocationWithRouter = withRouter(App);
export default ShowTheLocationWithRouter;
