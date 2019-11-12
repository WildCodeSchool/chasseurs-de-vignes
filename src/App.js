import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";


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
