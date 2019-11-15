import React from "react";
import "./PageNavigation.css";

function PageNavigation(props) {
  
  const { handleClick, currentStart, totalResults, rows } = props;

  const prevActionClick = () => {
    handleClick("prev");
  };
  
  const nextActionClick = () => {
    handleClick("next");
  };

  return (
    <div className="PageNavigation">
      {currentStart > 0 && (
        <button
          className="PageNavigation__button--prev"
          onClick={prevActionClick}
        ></button>
      )}
      {currentStart + rows < totalResults && (
        <button
          className="PageNavigation__button--next"
          onClick={nextActionClick}
        ></button>
      )}
    </div>
  );
}

export default PageNavigation;
