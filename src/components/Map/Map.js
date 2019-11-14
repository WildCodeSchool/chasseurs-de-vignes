import React from "react";
import "./Map.css";
import France from "@svg-maps/france.regions";
import { RadioSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

const regions = [
  {
    id: "ara",
    name: "Auvergne-Rhône-Alpes",
    latitude: 45.481437830498514,
    longitude: 4.5141887834336085,
    type: "map"
  },
  {
    id: "bfc",
    name: "Bourgogne-Franche-Comté",
    latitude: 47.21963038384999,
    longitude: 4.748610310762349,
    type: "map"
  },
  {
    id: "bre",
    name: "Bretagne",
    latitude: 47.89207487236879,
    longitude: -3.6118343602272613,
    type: "map"
  },
  {
    id: "cvl",
    name: "Centre-Val de Loire",
    latitude: 47.52911811949319,
    longitude: 1.805427692205875,
    type: "map"
  },
  {
    id: "cor",
    name: "Corse",
    latitude: 42.1716153,
    longitude: 9.1710018,
    type: "map"
  },
  {
    id: "ges",
    name: "Grand Est",
    latitude: 48.690745,
    longitude: 5.617216,
    type: "map"
  },
  {
    id: "hdf",
    name: "Hauts-de-France",
    latitude: 49.955555,
    longitude: 2.792501,
    type: "map"
  },
  {
    id: "idf",
    name: "Île-de-France",
    latitude: 49.03646231803129,
    longitude: 2.9219899503280455,
    type: "map"
  },
  {
    id: "nor",
    name: "Normandie",
    latitude: 49.1256272,
    longitude: 0.1032153,
    type: "map"
  },
  {
    id: "naq",
    name: "Nouvelle-Aquitaine",
    latitude: 45.2033333,
    longitude: 0.19333333333333333,
    type: "map"
  },
  {
    id: "occ",
    name: "Occitanie",
    latitude: 43.9266695,
    longitude: 2.1436188,
    type: "map"
  },
  {
    id: "pdl",
    name: "Pays de la Loire",
    latitude: 47.4599985,
    longitude: -0.7947931,
    type: "map"
  },
  {
    id: "pac",
    name: "Provence-Alpes-Côte d'Azur",
    latitude: 43.73853498899408,
    longitude: 6.388010745793065,
    type: "map"
  }
];

function Map({ afterClick, searchMethod, getNameRegion, changeView }) {
  const getPostionRegion = event => {
    const coordsRegion = regions.filter(
      x => x.id === event.target.getAttribute("id")
    );
    const { latitude, longitude, name, type } = coordsRegion[0];
    afterClick({ latitude, longitude });
    searchMethod(type);
    getNameRegion(name)
    changeView(false)
  };
  return (
    <div className="Map functions__map__method">
      <RadioSVGMap map={France} onLocationFocus={event => getPostionRegion(event)} />
    </div>
  );
}

export default Map;
