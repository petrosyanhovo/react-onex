import React from "react";
import "./smartLocker.css";
import Heading from "../Heading/Heading";
import Button from "../../Button/Button";
import SmartLockerImg from "../SmartLocker/SmartLocker_img/play-circle-outline-icon.png";

const SmartLocker = () => {
  return (
    <div className="smart-locker">
      <div className="smart-locker-content">
        <Heading
          greenHeading="ONEX"
          heading="SMART LOCKER"
          text="ONEX SMART LOCKER-ը Հայաստանում արտադրված առաջին SMART LOCKER-ն է։ Այն ամբողջությամբ մշակվել է մեր թիմի կողմից և նախատեսված է օնլայն գնումներն էլ ավելի հեշտ և արագ ստանալու համար։ Այս նորամուծության շնորհիվ օգտատերը կարող է ստանալ իր առաքանին իրեն հարմար ժամին՝ հարմար վայրից։ SMART LOCKER-ները տեղադրված են Մետրոպոլիտենի կայարաններում, սուպերմարկետներում, մոլերում, բիզնես կենտրոններում եւ այլն։"
        />
        <Button buttonName="Ավելին" />
      </div>
      <div className="smart-locker-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Okbsr1S_ZhQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen

        ></iframe>
        <img src={SmartLockerImg} alt="" className="image"/>
      </div>
    </div>
  );
};

export default SmartLocker;
