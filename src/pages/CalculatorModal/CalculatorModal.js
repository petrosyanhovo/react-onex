import React from "react";
import "./calculatorModal.css";
import usa from "../img/usa.png";
import russia from "../img/russia.png";
import china from "../img/china.png";
import uk from "../img/uk.png";
import dubai from "../img/dubai.png";

export const CalculatorModal = () => {
  return (
    <div className="calculator-modal">
      <div className="calculator-header">
        <h2>Առաքման հաշվիչ</h2>
        <i className="fa fa-times"></i>
      </div>
      <p>
        Ֆիզիկական անձանց համար բեռնափոխադրման արժեքը հաշվարկվում է ըստ բեռի
        փաստացի քաշի, բացառությամբ գերծավալային քաշով բեռների:
      </p>
      <div className="flags">
        <img src={usa} alt="" />
        <img src={russia} alt="" />
        <img src={uk} alt="" />
        <img src={china} alt="" />
        <img src={dubai} alt="" />
      </div>
      <div className="shipping-method">
        <p>Առաքման եղանակ</p>
        <div className="shipping-method-air">
          <input type="radio" name="shipping-type" id="shipping-type" />
          <label htmlFor="shipping-type">
            <i className="fa fa-plane"></i>
          </label>
        </div>
        <div className="shipping-method-ship">
          <input type="radio" name="shipping-type" id="shipping-type" />
          <label htmlFor="shipping-type">
            <i className="fa fa-ship"></i>
          </label>
        </div>
        </div>
        <div className="extra-weight">
          <label htmlFor="extra-weight">
            <input type="checkbox" name="" id="extra-weight" />
            գերծավալային քաշ
          </label>
          <div className="input-number">
            <input type="number" name="" id="" />
            <input type="number" name="" id="" />
          </div>
          <div className="cost">
            <p>Առաքման արժեք</p>
            <p>{}դր</p>
          </div>
        </div>
     
    </div>
  );
};
