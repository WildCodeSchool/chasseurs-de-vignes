import Autosuggest from 'react-autosuggest';
import React from 'react';
import './css/SearchBar.css'
import axios from 'axios';
import Resultat from './Resultat';

const renderSuggestion = suggestion => (
  <div>
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
      hasSubmitted : false
      };
  this.getResultat = this.getResultat.bind(this)
  }
  getResultat(event){
    event.preventDefault();
    this.getValue(this.state.value)
    this.setState({ hasSubmitted : true})
  }


  async getValue(value = this.state.value){
      const response = await axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&facet=appellatio&facet=denominati&facet=crinao`)
      this.setState({aoc : response.data.records, value})
  }

  componentDidMount() {
    this.getValue()
  }
  
  goodValue(){
    return this.state.aoc.map((region) => { 
      return region.fields.appellatio
    })
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
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
    return inputLength === 0 ? [] : this.goodValue(this.state.aoc).filter(lang =>
      lang.toLowerCase().slice(0, inputLength) === inputValue
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
      placeholder: 'Tape ton AOC',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <form onSubmit={this.getResultat}>
          <label htmlFor="AOC_Searched">AOC Recherchée</label>
          <Autosuggest
            name = "AOC_Searched"
            id = "AOC_Searched"z
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <button type="submit">submit</button>
        </form>
        {this.state.hasSubmitted && <Resultat />}
      </div>
    );
  }
}

export default SearchBar