import React from "react";
import "./smartServices.css";
import Heading from "../Heading/Heading";
import SmartServiceImg from "../SmartServices/smartServices_img/smart-service.png";
import Button from "../../Button/Button";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../SmartServices/smartServices_img", false, /\.(png|jpe?g|svg)$/)
);

const SmartServices = () => {
  return (
    <div className="smartServices">
      <Heading
        greenHeading="SMART"
        heading="ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ"
        text="Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները"
      />
      <div className="smart-services-section">
        <div className="smart-services-image">
          <img src={SmartServiceImg} alt="" />
        </div>
        <div className="smart-services-content">
          <p>
            <img src={images["photo-camera.png"]} />
            <span> Լուսանկարել դրսից</span>
          </p>
          <p>
            <img src={images["photos-inside.png"]} />
            <span>Լուսանկարել ներսից</span>
          </p>
          <p>
            <img src={images["stop.png"]} />
            <span>Կանգնեցնել</span>
          </p>
          <p>
            <img src={images["check-order.png"]} />
            <span>Ստուգել պատվերը</span>
          </p>
          <p>
            <img src={images["single-package.png"]} />
            <span>Չվերափաթեթավորել</span>{" "}
          </p>
          <p>
            <img src={images["repackaging.png"]} />
            <span>Հավելյալ վերափաթեթավորում</span>{" "}
          </p>
          <p>
            <img src={images["change-receiver.png"]} />
            <span>Փոխել ստացողին</span>{" "}
          </p>
          <p>
            <img src={images["unboxing.png"]} />
            <span>Բաժանել մասերի</span>{" "}
          </p>
        
          <Button  buttonName="Ավելին"/>

        </div>
      </div>
    </div>
  );
};

export default SmartServices;
