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

  submitRadius = () => {
    const { radius } = this.state;
    this.props.changeRadius(Number(radius) * 1000);
  };

  render() {
    const { radius } = this.state;
    const { currentRadius } = this.props;
    return (
      <div className="Filter">
        <p>Rayon actuel : {currentRadius / 1000} km</p>
        <p>
          Changer le rayon :
          <input type="number" onChange={this.getRadius} value={radius} />
          km
          <button onClick={this.submitRadius}>Filtrer</button>
        </p>
      </div>
    );
  }
}

export default Filter;
