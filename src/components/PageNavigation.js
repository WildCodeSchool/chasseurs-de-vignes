import React from "react";

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
      >
        Prev
      </button>
      <button
        className={`
				${showNextLink ? "show" : "hide"}
				${loading ? "greyed-out" : ""}
				`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default PageNavigation;
