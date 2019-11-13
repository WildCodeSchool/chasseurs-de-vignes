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

 const whatSearchMethod = () => {
    if (searchMethod  === "map") {
      return(<h3 class="results__title">
        <span>{nbResults}</span> <p>AOC à -{currentRadius / 1000}km du point central de la région {nameRegion}</p>
    </h3>)
    } else {
     return( <h3 class="results__title">
      <span>{nbResults}</span> <p>AOC à -{currentRadius / 1000}km de ma recherche</p>
    </h3>)
    }
  }

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
          {whatSearchMethod()}
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
