import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMethod: true
    }
  }
  
  changeView = view => {
    this.setState({
      viewMethod: view
    })
  }

  render() {
    const { viewMethod } = this.state
    return (
      <div className="App container-fluid">
        <Header changeView={(view) => this.changeView(view)} viewMethod={viewMethod} />
        <MainPage changeView={(view) => this.changeView(view)} viewMethod={viewMethod} />
      </div>
    );
  }
}

export default App;
