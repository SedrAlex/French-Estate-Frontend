import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties"
import { PuffLoader } from "react-spinners";

function Residencies() {  
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }
  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height:"60vh"}}> 
      <PuffLoader
          height="80"
          weight="80"
          radius = {1}
          color="#e9d65f"
          aria-label="puff-loading"
          />

      </div>
    )
  }

  return (
    <section className="r-wrapper">
      <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="goldenText">Meilleurs Choix</span>
          <span className="primaryText">Résidences Populaires</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.slice(7,15).map((card, index) => (
              <SwiperSlide key={index}>
               <PropertyCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </section>
  );
}

export default Residencies;
 const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className=" flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
 }