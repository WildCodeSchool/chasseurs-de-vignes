import React from "react";
import "./AboutUs.css";

const TireBouchon = "https://image.flaticon.com/icons/svg/83/83506.svg";
const GrapeBottle = "https://image.flaticon.com/icons/svg/87/87089.svg";
const Groupe = "https://image.flaticon.com/icons/svg/15/15659.svg";

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
              Aujourd’hui, la philosophie des consommateurs est en plein
              bouleversement face aux défis écologiques que l’humanité va devoir
              relever à l’avenir. En France, la consommation de vin est ancrée
              dans nos traditions depuis le Moyen-Âge et l’introduction de vigne
              dans notre pays par l’Empire Romain.
              <br />
              Mais pour consommer bien, il est important de savoir ce que l’on
              consomme et d’où vient les vins que nous buvons. C’est pour cela
              que nous avons décidé de créer Wine Note. Cette application à la
              pointe de la technologie permet à chacun de trouver les AOC
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
              Cette désignation spécifique à la France est un gage de qualité
              premier sur un produit puisque ce label signifie que toutes les
              étapes de fabrication d’un vin ont été réalisées dans la même zone
              géographique.
              <br />
              Voir un vin porter le sigle AOC indique ainsi qu’il a été réalisé
              en se basant sur les savoir-faire et une main d’œuvre se basant
              sur la connaissance des produits, de la géographie mais aussi de
              la météo de sa région d’origine. Ainsi le vin qui se retrouve dans
              votre verre porte le gage d’une qualité à toute les étapes de sa
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
                QUI SONT LES MEMBRES DE L'ÉQUIPE DE DÉVELOPPEMENT DE WINE NOT ?
              </h3>
              <div className="AboutUs__link--click"></div>
            </div>
            <p className="AboutUs__wrapper__text">
              Wine Note est une application en avance sur les technologies
              modernes et réalisée par une équipe de jeunes talents prometteurs
              de la scène numérique française. Ayant fait leurs armes au cœur de
              la French Tech Loire Valley, notamment à l’école Wild Code School,
              les quatres membres de l’équipe sont ainsi les enfants spirituels
              d’une des scènes montantes du numérique en France qui a notamment
              donné naissance à l’incroyable start-up 5team ou encore Clearnox,
              l’expert des créanciers 2.0.
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
