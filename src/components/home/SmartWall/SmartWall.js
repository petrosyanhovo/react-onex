import React from "react";
import "./smartWall.css";
import Heading from "../Heading/Heading";
import Button from "../../Button/Button.js";
import smartWallPlayIcon from "../SmartWall/SmartWall_img/play-circle-outline-icon.png";
import { NavLink as Link } from "react-router-dom";

const SmartWall = () => {
  return (
    <div className="smart-wall">
      <div className="smart-wall-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tHlUncRVzjg"
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/tHlUncRVzjg?autoplay=1> <img src=https://i.ytimg.com/vi/tHlUncRVzjg/maxresdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <img
          src={smartWallPlayIcon}
          alt=""
          className="image2"
          onClick={(e) => {
            e.target.style.display = "none";
            console.log(e.target.parentElement.firstChild);
          }}
        /> */}
      </div>
      <div className="smart-wall-content">
        <Heading
          greenHeading="ONEX"
          heading="SMART WALL"
          text="ONEX SMART WALL-ը տարբերվում է աշխարհում գործող նմանատիպ այլ լուծումներից իր նորարարություններով և ֆունկցիոնալությամբ։ Տվյալների վերլուծության միջոցով «խելացի պատը» կարողանում է բառացիորեն խոսել օգտատիրոջ հետ՝ տալով անհատական խորհուրդներ, ծանոթացնելով ONEX-ի նոր ծառայություններին և այլն։ Մեր մշակած համակարգը օգտատերերից ստացած տվյալների շնորհիվ օր օրի էլ ավելի կատարելագործվում և դառնում է առավել խելացի։"
        />
        <Link to="/smartwall">
          <Button buttonName="Ավելին" />
        </Link>
      </div>
    </div>
  );
};

export default SmartWall;
