import React from 'react';
import './HomePage.css'

class HomePage extends React.Component {
    render () {
      return (
        <div className="homepage">
            <div className="title_container">
                <h1 className="title_homepage">
                    Vous aspirez à consommer les meilleurs vins ? <span className="span_homepage">Wine Note</span> est là pour vous.
                </h1>
            </div>
            <div className="text_container">
                <p className="text_homepage">
                    <b>Wine Note</b> a été conçu dans l'unique but d'assouvir vos soifs de vins et de connaissances du terroir français et ses Appellations Origines Contrôlés (AOC)
                </p>
            </div>
            <button className="button_homepage">
                <Link to="/about-us">
                    À propos de Wine Note
                </Link>
            </button>
        </div>
  )}
};

export default HomePage;
