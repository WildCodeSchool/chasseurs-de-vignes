import React, { Component } from "react";
import "./ResultsList.css";
import axios from "axios";
import PageNavigation from "../PageNavigation";
import Result from "../Result/Result";
import Loader from "../Loader/Loader";

class Results extends Component {
  render() {
    const {
      results,
      isLoading,
      coords: { latitude, longitude }
    } = this.props;

    return (
      <div className="ResultsList">
        <div className="row">
          {isLoading && (
            <div className="col-12">
              <Loader />
            </div>
          )}
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
