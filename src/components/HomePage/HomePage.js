import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <h1 className="title_homepage">
          Vous aspirez à consommer les meilleurs vins ? <br/>
          <span className="span_homepage">Wine Note</span> est là pour vous.
        </h1>
        <p className="text_homepage">
          <b>Wine Note</b> a été conçu dans l'unique but d'assouvir vos soifs de
          vins et de connaissances du terroir français et ses Appellations
          Origines Contrôlés (AOC)
        </p>
        <Link className="button_homepage" to="/about-us">
          <span>À propos de Wine Note</span>
        </Link>
      </div>
    );
  }
}

export default HomePage;
