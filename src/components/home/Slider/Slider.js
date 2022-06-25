import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import img1 from "../Slider/img/img1.jpg";
import img2 from "../Slider/img/img2.jpg";
import img3 from "../Slider/img/img3.jpg";
import img4 from "../Slider/img/img4.jpg";

const images = [img1,img2,img3,img4]

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const lengthOfDataSlide = dataSlider.length

  const nextSlide = () => {
    // console.log('nextSlide', slideIndex, dataSlider.length);
    if (slideIndex < lengthOfDataSlide - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(lengthOfDataSlide - 1);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
//   console.log(77, slideIndex, images[slideIndex]);

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        // console.log(23232,obj.id)
        return (
          <div
            key={obj.id}
            className={slideIndex === index ? "slide active-anim" : "slide"}
          >
            <img src={obj.img} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={slideIndex === index ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
