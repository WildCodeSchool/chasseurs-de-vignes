import React from "react";
import axios from "axios";
import { getDistance } from "geolib";

class displayAoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countStart: 0,
      total: 0,
      infos: []
    };
  }

  async componentDidMount() {
    const { countStart } = this.state;
    let url = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&start=${countStart}&rows=${10}&facet=appellatio&facet=denominati&facet=crinao&geofilter.distance=${
      this.props.latitude
    }%2C${this.props.longitude}%2C${50000}`;
    const response = await axios.get(url);
    this.setState({ 
      infos: response.data.records, 
      total: response.data.nhits 
    })
  }

  async getData() {
    const { countStart } = this.state;
    let url = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&start=${countStart + 10}&rows=${10}&facet=appellatio&facet=denominati&facet=crinao&geofilter.distance=${
      this.props.latitude
    }%2C${this.props.longitude}%2C${50000}`;
    const response = await axios.get(url);
    this.setState({ 
      infos: response.data.records, 
      total: response.data.nhits 
    })
  }

  render() {
    let myLatitude = this.props.latitude;
    let myLongitude = this.props.longitude;
    let createObjAoc = [];
    createObjAoc = this.state.infos.map(function(aoc) {
      if (aoc.fields.geo_point_2d) {
        let obj = {
          id_app: aoc.fields.id,
          name_com_app: aoc.fields.new_nomcom,
          name_app: aoc.fields.denominati,
          region: aoc.fields.crinao,
          distance:
            (getDistance(
              { latitude: myLatitude, longitude: myLongitude },
              {
                latitude: aoc.fields.geo_point_2d[0],
                longitude: aoc.fields.geo_point_2d[1]
              }
            ) / 1000).toFixed(2)
        };
        return obj;
      }
    })

    return (
      <div className="DisplayAoc">
        <hr/>
        <p>{this.state.total} résultats</p>
        <hr/>
        <ul>
          {createObjAoc.map(aoc => (
            <li key={aoc.id_app}>
              AOC {aoc.name_app} ({aoc.name_com_app}) › {aoc.distance} km
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default displayAoc;
