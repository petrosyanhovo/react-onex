import React from "react";
import "./calculatorModal.css";
import usa from "./calculatorModal_img/usa.png";
import russia from "./calculatorModal_img/russia.png";
import china from "./calculatorModal_img/china.png";
import uk from "./calculatorModal_img/uk.png";
import dubai from "./calculatorModal_img/dubai.png";

export const CalculatorModal = () => {
  
  return (
    
    <div className="calculator-background">
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
            <input type="radio" name="shipping-type" id="shipping-plane" />
            <label htmlFor="shipping-plane">
              <i className="fa fa-plane"></i>
            </label>
          </div>
          <div className="shipping-method-ship">
            <input type="radio" name="shipping-type" id="shipping-ship" />
            <label htmlFor="shipping-ship">
              <i className="fa fa-ship"></i>
            </label>
          </div>
        </div>
        <div className="extra-weight">
          <label htmlFor="extra-weight-label">
            <input type="checkbox" name="" id="extra-weight-input" />
            գերծավալային քաշ
          </label>
          <div className="input-number">
            <input
              type="number"
              name=""
              id="input-number"
              placeholder="փաստացի քաշ"
            />
            <select name="" id="input-select">
              <option value="cm" defaultValue>
                սմ/կգ
              </option>
              <option value="inch">դյույմ/ֆունտ</option>
            </select>
          </div>
          <div className="cost">
            <p>Առաքման արժեք</p>
            <p>{"200"} դր</p>
          </div>
        </div>
      </div>
    </div>
  );
};
