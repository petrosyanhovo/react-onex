import React from "react";
import "./smartWall.css";
import Heading from "../Heading/Heading";
import Button from "../../Button/Button.js";
import smartWallImg from "../SmartWall/SmartWall_img/smartwall.jpg";
import smartWallPlayIcon from "../SmartWall/SmartWall_img/play-circle-outline-icon.png";

const SmartWall = () => {
  return (
    <div className="smart-wall">
      <div className="smart-wall-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tHlUncRVzjg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
       <img src={smartWallPlayIcon} alt="" className="image2"/>

  
      </div>
      <div className="smart-wall-content">
        <Heading
          greenHeading="ONEX"
          heading="SMART WALL"
          text="ONEX SMART WALL-ը տարբերվում է աշխարհում գործող նմանատիպ այլ լուծումներից իր նորարարություններով և ֆունկցիոնալությամբ։ Տվյալների վերլուծության միջոցով «խելացի պատը» կարողանում է բառացիորեն խոսել օգտատիրոջ հետ՝ տալով անհատական խորհուրդներ, ծանոթացնելով ONEX-ի նոր ծառայություններին և այլն։ Մեր մշակած համակարգը օգտատերերից ստացած տվյալների շնորհիվ օր օրի էլ ավելի կատարելագործվում և դառնում է առավել խելացի։"
        />
        <Button buttonName="Ավելին" />
      </div>
    </div>
  );
};

export default SmartWall;
