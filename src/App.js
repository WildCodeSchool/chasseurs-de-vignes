import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs"


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
