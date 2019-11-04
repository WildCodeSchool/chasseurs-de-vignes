import React from "react";

function Results({ result, nomCom }) {
  return (
    <div>
      <h4>{result}</h4>
      <p>{nomCom}</p>
    </div>
  );
}
export default Results;
