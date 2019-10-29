import React from "react";
import "./DisplayResults.css";
import axios from "axios";
import PageNavigation from "./PageNavigation";
import { getDistance } from "geolib";
import ImagesRandom from "./ImagesRandom";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      coords: {
        latitude: null,
        longitude: null
      },
      radius: 50000,
      results: {},
      totalResults: 0,
      totalPages: 0,
      currentStart: 0
    };
  }

  componentDidMount() {
    this.refreshPosition();
  }

  refreshPosition = () => {
    const { latitude } = this.props.coords;
    const { longitude } = this.props.coords;
    this.setState(
      {
        coords: {
          latitude,
          longitude
        }
      },
      () => {
        this.aocResults(0);
      }
    );
  };

  aocResults = (updatedPageNo = "") => {
    const pageNumber = updatedPageNo ? updatedPageNo : "";
    const { latitude } = this.state.coords;
    const { longitude } = this.state.coords;
    const { radius } = this.state;
    const pathUrl = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles`;
    const paramsUrl = `${pathUrl}&rows=12&start=${pageNumber}&geofilter.distance=${latitude}%2C${longitude}%2C${radius}`;

    axios.get(paramsUrl).then(res => {
      const total = res.data.nhits;
      const totalPagesCount = this.getPagesCount(
        total,
        res.data.parameters.rows
      );
      this.setState({
        data: res.data,
        results: res.data.records,
        totalResults: res.data.nhits,
        currentStart: updatedPageNo,
        totalPages: totalPagesCount
      });
    });
  };

  renderResults = () => {
    const { results } = this.state;
    const { latitude } = this.state.coords;
    const { longitude } = this.state.coords;
    if (Object.keys(results).length && results.length) {
      return (
        <div className="row DisplayResults">
          {results.map(result => {
            const distance = (
              getDistance(
                { latitude, longitude },
                {
                  latitude: result.fields.geo_point_2d[0],
                  longitude: result.fields.geo_point_2d[1]
                }
              ) / 1000
            ).toFixed(1);
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 no-padding DisplayResults-content"
                key={result.fields.id}
              >
                <div className="DisplayResults-km">{distance} km</div>
                <ImagesRandom />
                <div className="DisplayResults-infos">
                  <h3 className="DisplayResults-infos-title">
                    AOC {result.fields.denominati}
                  </h3>
                  <p className="DisplayResults-infos-desc">
                    {result.fields.new_nomcom}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  getPagesCount = (total, denominator) => {
    const divisible = total % denominator === 0;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  handlePageClick = type => {
    const updatedPageNo =
      "prev" === type
        ? this.state.currentStart - this.state.data.parameters.rows
        : this.state.currentStart + this.state.data.parameters.rows;
    this.aocResults(updatedPageNo, this.state.query);
  };

  render() {
    const { currentStart, totalResults } = this.state;
    const showPrevLink = 1 < currentStart;
    const showNextLink =
      totalResults > currentStart && totalResults - currentStart !== 10;
    return (
      <div className="Results">
        <PageNavigation
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={() => this.handlePageClick("prev")}
          handleNextClick={() => this.handlePageClick("next")}
        />
        {this.renderResults()}
      </div>
    );
  }
}

export default Results;
