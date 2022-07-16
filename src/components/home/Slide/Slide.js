import React, { Component } from "react";
import Slide from "react-slick";
import "./slide.css";
import img1 from "../Slide/img/img1.jpg";
import img2 from "../Slide/img/img2.jpg";
import img3 from "../Slide/img/img3.jpg";
import img4 from "../Slide/img/img4.jpg";

const images = [img1, img2, img3, img4];

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <>
        <Slide {...settings}>
          <div className="img-div">
            <img src={img1} alt="" />{" "}
          </div>
          <div className="img-div">
            <img src={img2} alt="" />{" "}
          </div>{" "}
          <div className="img-div">
            <img src={img3} alt="" />{" "}
          </div>{" "}
          <div className="img-div">
            <img src={img4} alt="" />{" "}
          </div>{" "}
        </Slide>
      </>
    );
  }
}
