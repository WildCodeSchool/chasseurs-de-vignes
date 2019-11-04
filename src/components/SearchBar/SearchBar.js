import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import "./SearchBar.css";
import axios from "axios";
import Results from "../Results";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
      displayResults: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      displayResults: true
    });
  };

  onSuggestionsFetchRequested = async ({ value }) => {
    const response = await axios.get(
      `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&facet=appellatio&facet=denominati&facet=crinao&q=${value}&`
    );
    this.setState({
      suggestions: response.data.records
    });
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsClearRequested = () => {};

  getSuggestionValue = suggestions => suggestions.fields.appellatio;

  renderSuggestion = suggestions => suggestions.fields.appellatio;

  render() {
    const { value, suggestions, displayResults } = this.state;
    const inputProps = {
      placeholder: "Tape ton AOC",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="AOC_Searched">AOC Recherchée</label>
          <Autosuggest
            name="AOC_Searched"
            id="AOC_Searched"
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          <button type="submit">submit</button>
        </form>
        {displayResults && <Results result={value} />}
      </div>
    );
  }
}

export default SearchBar;
