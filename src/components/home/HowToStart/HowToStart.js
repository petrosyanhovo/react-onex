import React from "react";
import "./howToStart.css";
import Heading from "../Heading/Heading";
import step1 from "../HowToStart/img/step1.png";
import step2 from "../HowToStart/img/step2.png";
import step3 from "../HowToStart/img/step3.png";

const HowToStart = () => {
  return (
    <div className="howtostart">
      <Heading
        heading="ՕԳՏՎԵԼ"
        greenHeading="ԻՆՉՊԵՍ"
        text="Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով"
      />
      <div className="steps">
        <div className="step">
          <img src={step1} alt="" height={60} width={60} />
          <p>Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ</p>
        </div>
        <div className="step">
          <img src={step2} alt="" height={60} width={60} />
          <p>
          Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս
          </p>
        </div>
        <div className="step">
          <img src={step3} alt="" height={60} width={60} />
          <p>Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում</p>
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
