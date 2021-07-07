import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../CovidData/slider.css";

const Slider = () => {
  return (
    <Fragment>
      <Carousel infiniteLoop  fade={true}  autoPlay>
        <div>
          <img 
           className="d-block w-100"
          src="covid191.jpeg" alt="slider1" />
          
        </div>
        <div>
          <img 
           className="d-block w-100"
          src="covid19.jpg" alt="slider2" />
        
        </div>
        <div>
          <img 
           className="d-block w-100"
          src="covid193.png" alt="slider3" />
          
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Slider;
