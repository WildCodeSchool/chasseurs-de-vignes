import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: null
    };
  }

  getRadius = event => {
    event.preventDefault();
    this.setState({
      radius: event.target.value
    });
  };

  incrementRadius = () => {
    this.props.changeRadius(Number(this.props.currentRadius + 10000));
  };

  decrementRadius = () => {
    this.props.changeRadius(Number(this.props.currentRadius - 10000));
  };

  render() {
    const { currentRadius } = this.props;
    return (
      <div className="Filter">
        <button onClick={this.decrementRadius}>-</button>
        <span>{currentRadius / 1000} km</span>
        <button onClick={this.incrementRadius}>+</button>
      </div>
    );
  }
}

export default Filter;
