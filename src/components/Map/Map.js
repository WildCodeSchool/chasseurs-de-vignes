import React from "react";
import "./Map.css";
import France from "@svg-maps/france.regions";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

const regions = [
  {
    id: "ara",
    name: "Auvergne-Rhône-Alpes",
    latitude: 45.481437830498514,
    longitude: 4.5141887834336085
  },
  {
    id: "bfc",
    name: "Bourgogne-Franche-Comté",
    latitude: 47.21963038384999,
    longitude: 4.748610310762349
  },
  {
    id: "bre",
    name: "Bretagne",
    latitude: 47.89207487236879,
    longitude: -3.6118343602272613
  },
  {
    id: "cvl",
    name: "Centre-Val de Loire",
    latitude: 47.52911811949319,
    longitude: 1.805427692205875
  },
  {
    id: "cor",
    name: "Corse",
    latitude: 42.1716153,
    longitude: 9.1710018
  },
  {
    id: "ges",
    name: "Grand Est",
    latitude: 48.690745,
    longitude: 5.617216
  },
  {
    id: "hdf",
    name: "Hauts-de-France",
    latitude: 49.955555,
    longitude: 2.792501
  },
  {
    id: "idf",
    name: "Île-de-France",
    latitude: 49.03646231803129,
    longitude: 2.9219899503280455
  },
  {
    id: "nor",
    name: "Normandie",
    latitude: 49.1256272,
    longitude: 0.1032153
  },
  {
    id: "naq",
    name: "Nouvelle-Aquitaine",
    latitude: 45.2033333,
    longitude: 0.19333333333333333
  },
  {
    id: "occ",
    name: "Occitanie",
    latitude: 43.9266695,
    longitude: 2.1436188
  },
  {
    id: "pdl",
    name: "Pays de la Loire",
    latitude: 47.4599985,
    longitude: -0.7947931
  },
  {
    id: "pac",
    name: "Provence-Alpes-Côte d'Azur",
    latitude: 43.73853498899408,
    longitude: 6.388010745793065
  }
];

function Map({ afterClick, searchMethod, getNameRegion, changeView }) {
  const getPostionRegion = event => {
    const coordsRegion = regions.filter(
      x => x.id === event.target.getAttribute("id")
    );
    const { latitude, longitude, name } = coordsRegion[0];
    afterClick({ latitude, longitude });
    searchMethod("map");
    getNameRegion(name)
    changeView(false)
  };
  return (
    <div className="Map functions__map__method">
      <SVGMap map={France} onLocationClick={event => getPostionRegion(event)} />
    </div>
  );
}

export default Map;
