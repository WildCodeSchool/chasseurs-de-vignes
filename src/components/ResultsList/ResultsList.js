import React from "react";
import "./ResultsList.css";
import Result from "../Result/Result";
import Loader from "../Loader/Loader";

function Results({
  results,
  isLoading,
  coords: { latitude, longitude },
  nameRegion,
  currentRadius,
  nbResults,
  searchMethod
}) {
  return (
    <div className="ResultsList">
      {isLoading && (
        <div className="Loader__content row">
          <div className="col-12">
            <Loader />
          </div>
        </div>
      )}
      <div className={isLoading ? `ResultsList--hidden` : ""}>
        <div className="ResultsList__wrapper">
          <h3 class="results__title">
            <span>{nbResults}</span> <p>AOC à -{currentRadius / 1000}km de ma recherche</p>
            <p>{searchMethod === "map" && nameRegion}</p>
          </h3>
          {results.length > 0 && (
            <>
              {results.map((result, index) => (
                <Result
                  key={latitude + longitude + index}
                  latitude={latitude}
                  longitude={longitude}
                  {...result.fields}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
