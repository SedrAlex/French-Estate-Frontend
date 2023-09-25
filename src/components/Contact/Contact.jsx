import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { HiVideoCamera } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="co-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side */}
        <div className="flexColStart c-left">
          <span className="wheatText">Nos contacts</span>
          <span className="secondary-golden-Text">
            Facile de nous contacter
          </span>
          <span className="primaryText">
            Nous somm es toujours prêts à vous aider en vous fournissant notre
            service
          </span>
          <div className="flexColStart contactModes">
            {/**first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Appel</span>
                    <span className="goldenText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Appelle maintenant</div>
              </div>
               {/**second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chatte</span>
                    <span className="goldenText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chatte maintenant</div>
              </div>

              
            </div>

            {/** second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiVideoCamera size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Appel Vidéo</span>
                    <span className="goldenText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Appelle Vidéo maintenant</div>
              </div>

               {/**fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="goldenText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message maintenant</div>
              </div>

              
            </div>
          </div>
        </div>
        {/*right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./H17.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
