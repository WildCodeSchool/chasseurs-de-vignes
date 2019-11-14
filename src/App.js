import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMethod: true,
      fullPage: true
    };
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  changeView = view => {
    this.setState({
      viewMethod: view
    });
  };

  hideFull = view => {
    this.setState({
      fullPage: view
    });
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    if (this.state.fullPage === true) {
      if (pathname !== "/") {
        this.setState({
          fullPage: false
        });
      }
    }
  }
  componentDidUpdate() {
    const { pathname } = this.props.location;
    if (this.state.fullPage === false) {
      if (pathname === "/" || pathname === "/aboutus") {
        this.setState({
          fullPage: true
        });
      }
    }
  }
  render() {
    const { viewMethod, fullPage } = this.state;

    return (
      <div className="App container-fluid">
        <Header
          changeView={view => this.changeView(view)}
          hideFullPage={view => this.hideFull(view)}
          viewMethod={viewMethod}
        />
        <MainPage
          changeView={view => this.changeView(view)}
          viewMethod={viewMethod}
          fullPage={fullPage}
        />
      </div>
    );
  }
}
const ShowTheLocationWithRouter = withRouter(App);
export default ShowTheLocationWithRouter;
