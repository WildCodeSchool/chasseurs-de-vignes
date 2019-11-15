import React from "react";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  changeViewHome = () => {
    this.props.changeView(false)
  }
  render() {
    return (
      <div className="HomePage">
        <h1 className="title_homepage">
          Vous aspirez à consommer les meilleurs vins ? <br />
          <br />
          <span className="span_homepage">Wine Note</span>
          <br /> est là pour vous.
        </h1>
        <p className="text_homepage">
          <b>Wine Note</b> a été conçu dans l'unique but d'assouvir vos soifs de
          vins et de connaissances du terroir français et de ses AOC.
        </p>
        <button onClick={this.changeViewHome} className="HomePage__button">
          <span>À propos de Wine Note</span>
        </button>
      </div>
    );
  }
}

export default HomePage;
