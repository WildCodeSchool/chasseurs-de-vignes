import Autosuggest from 'react-autosuggest';
import React from 'react';
import './css/SearchBar.css'
import axios from 'axios';

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
];





const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        value: '',
        suggestions: [],
        aoc : []
        };
    }
    async componentDidMount(){
        const response = await axios.get('https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&facet=appellatio&facet=denominati&facet=crinao')
        console.log(response.data.records)
        this.setState({
         aoc : response.data.records
    })
    }
    getSuggestions = value => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
    };
    goodValue(){
      return this.state.aoc.map((region) => { 
        console.log(region.fields.appellatio)
        return region.fields.appellatio
      }
      )}

    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
      this.goodValue()
      console.log(this.goodValue(this.state.aoc))
    };

  

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  getSuggestionValue = suggestion => suggestion.name;
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Tape ton AOC',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBar