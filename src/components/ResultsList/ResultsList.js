import React from "react";
import "./ResultsList.css";
import Result from "../Result/Result";

function Results({
  results,
  isLoading,
  coords: { latitude, longitude },
  nameRegion,
  currentRadius,
  nbResults,
  searchMethod
}) {
  const whatSearchMethod = () => {
    switch (searchMethod) {
      case "map":
        return (
          <h3 class="results__title">
            <span>{nbResults} AOC</span>
            <p>
              à -{currentRadius / 1000}km du point central de la région
              {nameRegion}
            </p>
          </h3>
        );
      case "geolocation":
        return (
          <h3 class="results__title">
            <span>{nbResults} AOC</span>
            <p>à -{currentRadius / 1000}km de ma position</p>
          </h3>
        );
      case "bar":
        return (
          <h3 class="results__title">
            <span>{nbResults} AOC</span>
            <p>à -{currentRadius / 1000}km de ma recherche</p>
          </h3>
        );
    }
  };

  return (
    <div className="ResultsList">
      <div className="ResultsList__wrapper">
        {!isLoading && whatSearchMethod()}
        {!isLoading && results.length > 0 && (
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
