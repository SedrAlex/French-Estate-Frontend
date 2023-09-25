import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
 import {motion} from 'framer-motion'
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/**Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="golden-circle" />
              <motion.h1
              initial = {{y:"2rem",opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{
                duration:2,
                type:"spring"
              }}
              >
           
             Découvrez <br />
             la propriété la plus<br /> adaptée
              </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
            Trouvez très facilement une variété de propriétés qui vous conviennent            </span>
            <span className="secondaryText"> 
            Oubliez toutes les difficultés pour trouver une résidence pour vous            </span>
          </div>

         <SearchBar />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>{" "}
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>{" "}
              <span className="secondaryText"> Award Winning</span>
            </div>
          </div>
        </div>

        {/*Right side */}
        <div className=" flexCenter hero-right">
          <motion.div
           initial={{x:"7rem",opacity:0}}
           animate  ={{x:0,opacity:1 }}
            transition={{
              duration:2,
              type:"spring"
            }}
          
             className="image-container">
            <img src="./home5.jpeg" alt="hero-image" />
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
