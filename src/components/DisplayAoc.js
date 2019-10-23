import React from "react";
import axios from "axios";
import { getDistance } from "geolib";

class displayAoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      infos: []
    };
  }

  async componentDidMount() {
    const { page } = this.state;
    let url = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&start=${page}&rows=${10}&facet=appellatio&facet=denominati&facet=crinao&geofilter.distance=${this.props.latitude}%2C${this.props.longitude}%2C${100000}`
    const response = await axios.get(url);
    console.log(response)
    this.setState({ infos: response.data.records });
  }

  async getData(){
    const { page } = this.state;
    console.log(page);
    let url = `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&start=${page}&rows=${10}&facet=appellatio&facet=denominati&facet=crinao&geofilter.distance=${this.props.latitude}%2C${this.props.longitude}%2C${100000}`
    const response = await axios.get(url);
    console.log(response)
    this.setState({ infos: response.data.records });
  }

  nextPage = () => {
        const page = this.state.page
        this.setState({ page: page + 1 })
        this.getData()
    }

  render() {

    let myLatitude = this.props.latitude;
    let myLongitude = this.props.longitude;
    let createObjAoc = [];
    createObjAoc = this.state.infos.map(function(aoc) {
      if (aoc.fields.geo_point_2d) {
        let obj = {
          id_app: "",
          name_com_app: "",
          name_app: "",
          region: "",
          distance: 0
        };
        obj.id_app = aoc.fields.id_denom;
        obj.name_com_app = aoc.fields.new_nomcom;
        obj.name_app = aoc.fields.denominati;
        obj.region = aoc.fields.crinao;
        obj.distance = (
          getDistance(
            { latitude: myLatitude, longitude: myLongitude },
            {
              latitude: aoc.fields.geo_point_2d[0],
              longitude: aoc.fields.geo_point_2d[1]
            }
          ) / 1000
        ).toFixed(2);
        return obj;
      }
    });
    return (
      <div>
        <h3>AOC (-100km) :</h3>
        <button onClick={this.nextPage}>Page {this.state.page} ›</button>
        <ul>
          {createObjAoc.map((aoc, i) => (
            <li key={i + "a"}>
              <p>
                AOC {aoc.name_app} ({aoc.name_com_app})
              </p>
              <p>{aoc.region}</p>
              <p>Distance : {aoc.distance} km</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default displayAoc;
