import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMethod: true,
      fullPage: true
    }
  }

  changeView = view => {
    this.setState({
      viewMethod: view
    })
  };

  hideFull = view => {
    this.setState({
      fullPage: view
    })
  };

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

export default App;
