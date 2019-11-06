import React from "react";
import "./ResultsList.css";
import Result from "../Result/Result";
import Loader from "../Loader/Loader";

function Results({
  results,
  isLoading,
  coords: { latitude, longitude }
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
        {results.length > 0 && (
          <div className="ResultsList__group row">
            {results.map((result, index) => (
              <Result key={latitude+longitude+index}
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

export default Results;
