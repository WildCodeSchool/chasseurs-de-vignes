import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      aoc : ''    
    }

  }
  render(){
    return (
      <div className="App container-fluid">
        <Header />
        <section className="row">
          <div className="col-12">
            <div className="border">Heading title</div>
          </div>
        </section>
        <section className="row">
          <div className="col-12 col-lg-4">
            <div className="border"> <SearchBar aoc={this.state.aoc}/> </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="border"> Interactive map</div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="border"> Button search by geolocation</div>
          </div>
        </section>
      </div>
    )
  }
 
}
export default App;
