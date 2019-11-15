import React from "react";
import "./AboutUs.css";

const TireBouchon = require("./images/wine_opener.png");
const GrapeBottle = require("./images/wine.png");
const Groupe = require("./images/success.png");

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <section>
          <div className="AboutUs__wrapper">
            <div className="AboutUs__link">
              <img
                className="AboutUs__wrapper__image"
                src={TireBouchon}
                alt="tireBouchon"
              />
              <h3 className="AboutUs__wrapper__title">
                QU'EST-CE QUE WINE NOTE ?
              </h3>
              <div className="AboutUs__link--click"></div>
            </div>
            <p className="AboutUs__wrapper__text">
              Aujourd’hui, la <b>philosophie</b> des consommateurs est en plein
              bouleversement face aux défis écologiques que l’<b>humanité</b> va devoir
              relever à l’avenir. En France, la consommation de vin est ancrée
              dans nos traditions depuis le Moyen-Âge et l’introduction de vigne
              dans notre pays par l’Empire Romain.
              <br/>
              <br/>
              Mais pour bien consommer, il est important de savoir ce qui est dans notre verre,
              d’où vient le <b>vin</b> que nous buvons. C’est pour cela
              que nous avons décidé de créer <b>WINE NOTE</b>. Cette application à la
              pointe de la technologie permet à chacun de trouver les <b>AOC</b>
              (Appellation d’Origine Contrôlée) proches de lui ou de découvrir
              les différentes appellations protégées de nos régions.
            </p>
          </div>
          <div className="AboutUs__wrapper">
            <div className="AboutUs__link">
              <img
                className="AboutUs__wrapper__image"
                src={GrapeBottle}
                alt="Grapebottle"
              />
              <h3 className="AboutUs__wrapper__title">
                POURQUOI PARLER D'AOC EN TERME DE VIN EST-IL IMPORTANT ?
              </h3>
              <div className="AboutUs__link--click"></div>
            </div>
            <p className="AboutUs__wrapper__text">
              Cette désignation spécifique à la <b>France</b> est un gage de qualité
              premier puisque ce label signifie que toutes les
              étapes de fabrication d’un vin ont été réalisées dans la même zone
              géographique.
              <br/>
              <br/>
              Voir un vin porter le sigle AOC indique ainsi qu’il a été réalisé
              à travers le <b>savoir-faire</b> et une <b>main d’œuvre</b> se basant
              sur la poussée connaissance des produits, de la géographie mais aussi de
              la météo de sa région d’origine. Ainsi le produit qui se retrouve dans
              votre verre porte le gage d’une qualité à toutes les étapes de sa
              conception.
            </p>
          </div>
          <div className="AboutUs__wrapper">
            <div className="AboutUs__link">
              <img
                className="AboutUs__wrapper__image"
                src={Groupe}
                alt="Groupe"
              />
              <h3 className="AboutUs__wrapper__title">
                QUI SONT LES MEMBRES DE L'ÉQUIPE DE DÉVELOPPEMENT DE WINE NOTE ?
              </h3>
              <div className="AboutUs__link--click"></div>
            </div>
            <p className="AboutUs__wrapper__text">
              <b>WINE NOTE</b> est une application en avance sur les technologies
              modernes et réalisée par une équipe de jeunes talents prometteurs
              de la scène numérique française. Ayant fait leurs armes au cœur de
              la <b>French Tech Loire Valley</b>, notamment à l’école <b>Wild Code School</b>,
              les quatres membres de l’équipe sont ainsi les enfants spirituels
              d’une des scènes montantes du numérique en France grâce au génie de
              leur formateur, le célèbre et intrépide <b>Andréa Maugars</b>.
            </p>
          </div>
          <div className="AboutUs__credits">
            Un projet réalisé par Alex Le Coq, Antoine Ribeiro, Tanguy
            Duponchelle et Frédéric Paurisse
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
