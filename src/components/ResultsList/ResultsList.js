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
  nbResults
}) {
  return (
    <div className="ResultsList">
      {isLoading && (
        <div className="Loader__content">
          <Loader />
        </div>
      )}
      <h3 className="results__title">
        <span>{nbResults} AOC</span>{" "}
        <p> à -{currentRadius / 1000}km de ma recherche</p>
      </h3>
      <div className="ResultsList__wrapper">
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
  );
}

export default Results;
