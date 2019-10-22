import React from 'react';
import './App.css';
import GeoLocation from './components/GeoLocButton';

function App() {
  return (
    <div className="App container-fluid">
      <header className="row">
        <nav className="col-12">
          <div className="border">Header</div>
        </nav>
      </header>
      <section className="row">
        <div className="col-12">
          <div className="border">Heading title</div>
        </div>
      </section>
      <section className="row">
        <div className="col-12 col-lg-4">
          <div className="border"> Instant search</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border"> Interactive map</div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border"> <GeoLocation /> </div>
        </div>
      </section>
    </div>
  );
}

export default App;
