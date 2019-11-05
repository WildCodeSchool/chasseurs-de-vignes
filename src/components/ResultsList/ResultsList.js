import React, { Component } from "react";
import "./ResultsList.css";
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
        {isLoading && (
          <div className="Loader__content row">
            <div className="col-12">
              <Loader />
            </div>
          </div>
        )}
        <div className={isLoading && `ResultsList--hidden`}>
          {results.length > 0 && (
            <div className="ResultsList__group row">
              {results.map(result => (
                <Result
                  latitude={latitude}
                  longitude={longitude}
                  {...result.fields}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Results;
