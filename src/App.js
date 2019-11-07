import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs"
import PageNotFound from "./components/PageNotFound/PageNotFound"


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
