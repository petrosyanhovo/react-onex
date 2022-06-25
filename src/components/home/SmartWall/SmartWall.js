import React from "react";
import "./smartWall.css";
import Heading from "../Heading/Heading";
import Button from "../../Button/Button.js";

const SmartWall = () => {

  return (
    <div className="smart-wall">
      <div className="smart-wall-video">
        {/* <video src={SmartWallVideo}></video> */}
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
