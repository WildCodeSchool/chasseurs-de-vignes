import React from "react";
import "./PageNavigation.css";

const PageNavigation = props => {
  const {
    showPrevLink,
    showNextLink,
    handlePrevClick,
    handleNextClick,
    loading
  } = props;

  return (
    <div className="PageNavigation">
      <button
        className={`
				${showPrevLink ? "show" : "hide"}
				${loading ? "greyed-out" : ""}
				`}
        onClick={handlePrevClick}
      ></button>
      <button
        className={`
				${showNextLink ? "show" : "hide"}
				${loading ? "greyed-out" : ""}
				`}
        onClick={handleNextClick}
      ></button>
    </div>
  );
};

export default PageNavigation;
