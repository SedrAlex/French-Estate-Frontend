import React from "react";
import'./GetStarted.css'
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primary-values-Text">Commencez avec nous </span>
          <span className="secondary-golden-Text"> Abonnez-vous et trouvez des devis super attractifs
        <br />
          Trouvez bientôt votre résidence
          </span>
          <button className="button">
            <a href = "mailto:sedra.mhanna313@gmail.com">Commencez</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;