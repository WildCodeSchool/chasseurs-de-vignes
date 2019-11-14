import React, { Component } from "react";
import "./MainPage.css";

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

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    } = this.props;
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
                    afterClick={this.props.setCoords}
                    changeView={view => this.props.diviseScreen(view)}
                    searchMethod={this.props.setSearchMethod}
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
                    afterClick={this.props.setCoords}
                    searchMethod={this.props.setSearchMethod}
                    getNameRegion={this.props.getNameRegion}
                    changeView={view => this.props.diviseScreen(view)}
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
                    afterClick={this.props.setCoords}
                    changeView={view => this.props.diviseScreen(view)}
                    searchMethod={this.props.setSearchMethod}
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
            <button onClick={this.props.hideSearchMethod}></button>
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
                <Filter
                  changeRadius={this.props.setRadius}
                  currentRadius={radius}
                />
                {totalResults && (
                  <PageNavigation
                    currentStart={currentStart}
                    totalResults={totalResults}
                    rows={rows}
                    handleClick={action => this.props.handlePageClick(action)}
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
