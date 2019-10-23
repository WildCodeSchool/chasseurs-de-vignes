import React from "react";
import axios from "axios";

const listAoc = [
  {
    name: "Chinon",
    latitude: 0,
    longitude: 0
  },
  {
    name: "Cheverny",
    latitude: 47.44824823071584,
    longitude: 1.297759810404915
  },
  {
    name: "Touraine",
    latitude: 47.37171508877887,
    longitude: 1.264731132756366
  }
];

class displayAoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: []
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=delimitation-parcellaire-des-aoc-viticoles&rows=100&facet=appellatio&facet=denominati&facet=crinao"
    );
    this.setState({ infos: response.data.records });
  }

  distance(lat1, lon1, lat2, lon2, name) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      let radlat1 = (Math.PI * lat1) / 180;
      let radlat2 = (Math.PI * lat2) / 180;
      let theta = lon1 - lon2;
      let radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;
      let aoc = { dist: dist.toFixed(2), name: name };
      return aoc;
    }
  }

  render() {
             let displayAoc = [];
             displayAoc = this.state.infos
               .map(function(x) {
                 let obj = {
                   latitude: "",
                   longitude: "",
                   name: "",
                   region: ""
                 };
                 if (x.fields.geo_shape) {
                   obj.latitude = x.fields.geo_shape.coordinates
                     .join()
                     .split(",")
                     .map((z, index) => (index % 2 !== 0 ? z : false))
                     .filter(z => z);
                   obj.longitude = x.fields.geo_shape.coordinates
                     .join()
                     .split(",")
                     .map((y, index) => (index % 2 === 0 ? y : false))
                     .filter(y => y);
                   obj.name = x.fields.denominati;
                   obj.region = x.fields.crinao;
                   return obj;
                 } else {
                   return false;
                 }
               })
               .filter(x => x);

               console.log(displayAoc)

             let compareAoc = displayAoc.map(aoc =>
               this.distance(
                 this.props.latitude,
                 this.props.longitude,
                 aoc.latitude[0],
                 aoc.longitude[0],
                 aoc.name
               )
             );

             let distanceToAoc = compareAoc.filter(aoc => aoc.dist <= 50);

             return (
               <div>
                 <ul>
                   {distanceToAoc.map(aoc => (
                     <li key={aoc.name}>
                       AOC {aoc.name} › {aoc.dist} km
                     </li>
                   ))}
                 </ul>
               </div>
             );
           }
}

export default displayAoc;
