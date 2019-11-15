import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <h1 className="title_homepage">
          Vous aspirez à consommer les meilleurs vins ? <br/><br/>
          <span className="span_homepage">Wine Note</span><br/> est là pour vous.
          <br/><br/>
        </h1>
        <p className="text_homepage">
          <b>Wine Note</b> a été conçu dans l'unique but d'assouvir vos soifs de
          vins et de connaissances du terroir français et ses AOC.
        </p>
      </div>
    );
  }
}

export default HomePage;
