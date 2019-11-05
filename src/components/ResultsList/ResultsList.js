import React, { Component } from "react";
import "./ResultsList.css";
import axios from "axios";
import PageNavigation from "../PageNavigation";
import Result from "../Result/Result";
import Loader from "../Loader/Loader";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      radius: 50000,
      results: [],
      totalResults: 0,
      totalPages: 0,
      currentStart: 0
    };
  }

  async componentDidMount() {
    this.fetchAocs(0);
  }

  async fetchAocs(updatedPageNo = "") {
    const pageNumber = updatedPageNo ? updatedPageNo : "";
    const { latitude, longitude } = this.props.coords;
    const { radius } = this.state;
    const pathUrl = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles`;
    const paramsUrl = `${pathUrl}&rows=12&start=${pageNumber}&geofilter.distance=${latitude}%2C${longitude}%2C${radius}`;

    const res = await axios.get(paramsUrl);
    const total = res.data.nhits;
    const totalPagesCount = this.getPagesCount(total, res.data.parameters.rows);
    this.setState({
      data: res.data,
      results: res.data.records,
      totalResults: res.data.nhits,
      currentStart: updatedPageNo,
      totalPages: totalPagesCount
    });
  }

  getPagesCount = (total, denominator) => {
    const divisible = total % denominator === 0;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  handlePageClick = type => {
    const { currentStart, data, query } = this.state;
    const updatedPageNo =
      "prev" === type
        ? currentStart - data.parameters.rows
        : currentStart + data.parameters.rows;
    this.fetchAocs(updatedPageNo, query);
  };

  render() {
    const { results, currentStart, totalResults } = this.state;
    const { latitude, longitude } = this.props.coords;
    const { isLoading } = this.props;
    const showPrevLink = 1 < currentStart;
    const showNextLink = totalResults > currentStart;
    return (
      <div className="ResultsList">
        {isLoading && <Loader />}
        <div className={isLoading && `ResultsList--hidden`}>
          <div className="col-12">
            <PageNavigation
              showPrevLink={showPrevLink}
              showNextLink={showNextLink}
              handlePrevClick={() => this.handlePageClick("prev")}
              handleNextClick={() => this.handlePageClick("next")}
            />
          </div>
          {results.length > 0 && (
            <div className="col-12">
              <div className="ResultsList__group row">
                {results.map(result => (
                  <Result
                    latitude={latitude}
                    longitude={longitude}
                    {...result.fields}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Results;
