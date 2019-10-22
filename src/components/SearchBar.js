import Autosuggest from 'react-autosuggest';
import React from 'react'
import './css/SearchBar.css'

let AOC = ['exemple','exemple 2', 'exemple 3', 'exemple 4', 'exemple 5', 'exemple 6']

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : AOC.filter(region =>
    region.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion;


const renderSuggestion = suggestion => (
  <div className="SearchBar--suggestion">
    {suggestion}
  </div>
);

class Autosugg extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };


  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
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
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}



export default Autosugg
