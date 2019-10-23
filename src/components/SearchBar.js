import Autosuggest from 'react-autosuggest';
import React from 'react'
import './css/SearchBar.css'
import axios from 'axios';
 
const renderSuggestion = suggestion => (
  <div className="SearchBar--suggestion">
    {suggestion}
  </div>
);

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      aoc : [],
    };
    this.getAoc = this.getAoc.bind(this)
  }
  async getAoc(){
    const response = await axios.get('https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&facet=appellatio&facet=denominati&facet=crinao');
      this.setState({
        aoc : response.data.records
      });
  };
    
  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : this.state.aoc.filter(region =>
      region.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  getSuggestionValue = suggestion => suggestion;


  onChange = (event, { newValue }) => {
    this.getAoc()
    this.setState({
      value: newValue
    });
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

  render() {
    const { value, suggestions } = this.state;
  
    const inputProps = {
      placeholder: 'Entrez votre AOC',
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
