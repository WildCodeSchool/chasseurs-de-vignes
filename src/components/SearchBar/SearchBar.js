import Autosuggest from "react-autosuggest";
import React from "react";
import "./SearchBar.css";
import axios from "axios";

const renderSuggestion = suggestion => <div>{suggestion}</div>;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      coords: {
        latitude: null,
        longitude: null
      },
      suggestions: [],
      aoc: []
    };
    this.getResultat = this.getResultat.bind(this);
  }
  getResultat(event) {
    event.preventDefault();
    const { latitude, longitude } = this.state.coords;
    this.props.afterClick({ latitude, longitude });
  }

  async getValue() {
    const response = await axios.get(
      `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&rows=50&facet=appellatio&facet=denominati&facet=crinao`
    );
    this.setState({ aoc: response.data.records });
  }

  componentDidMount() {
    this.getValue();
  }

  goodValue() {
    return this.state.aoc
      .filter(region => region.fields.geo_point_2d)
      .map(region => {
        return `${region.fields.appellatio} - ${this.Capitalize(
          region.fields.new_nomcom
        )}`;
      });
  }

  Capitalize(str) {
    const words = str.split(/-| /);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.state.aoc
      .filter(x => x.fields.geo_point_2d)
      .map(x => {
        if (
          `${x.fields.appellatio} - ${this.Capitalize(x.fields.new_nomcom)}` ===
          newValue
        ) {
          this.setState({
            coords: {
              latitude: x.fields.geo_point_2d[0],
              longitude: x.fields.geo_point_2d[1]
            }
          });
        }
      });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : this.goodValue().filter(
          region => region.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  getSuggestionValue = suggestion => suggestion;

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Tape ton AOC",
      size: "500",
      value,
      onChange: this.onChange
    };
    return (
        <form onSubmit={this.getResultat} className="functions__search__method">
          <Autosuggest
            name="AOC_Searched"
            id="AOC_Searched"
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <button type="submit" className="functions__search__submit"></button>
        </form>
     
    );
  }
}

export default SearchBar;
