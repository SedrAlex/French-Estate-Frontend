import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/**left side */}
        <div className="flexColStart f-left">
          <img src="./hom2.png" alt="" width={120} />
          <span className="goldenText">
            Notre vision est de créer
            <br /> le meilleur endroit où vivre
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primary-values-2-Text">Information</span>
          <span>Champ élysée, Paris, France</span>
          <div className="flexCenter f-menu">
            <span>Propriété</span>
            <span>Service</span>
            <span>Produit</span>
            <span>À propos de nous</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
