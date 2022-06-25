import React from "react";
import "./calculatorModal.css";

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
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="shipping-method">
        <p>Առաքման եղանակ</p>
        <div className="shipping-method-air">
            <input type="radio" name="shipping-type" id="shipping-type" />
            <label htmlFor="shipping-type"><i className="fa fa-plane"></i></label>
        </div>
        <div className="shipping-method-ship">
            <input type="radio" name="shipping-type" id="shipping-type" />
            <label htmlFor="shipping-type"><i className="fa fa-ship"></i></label>
        </div>
      </div>
    </div>
  );
};
