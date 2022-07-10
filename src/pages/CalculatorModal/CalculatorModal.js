import React, { useEffect, useState } from "react";
import "./calculatorModal.css";
import usa from "./calculatorModal_img/usa.png";
import russia from "./calculatorModal_img/russia.png";
import china from "./calculatorModal_img/china.png";
import uk from "./calculatorModal_img/uk.png";
import uae from "./calculatorModal_img/dubai.png";

export const CalculatorModal = ({ calculatorModalShow }) => {

    // const [isChecked, setIsChecked] = useState(false);
    // const [isMethodChecked, setIsMethodChecked] = useState(false);
    const [flagName, setFlagName] = useState(""); 
    const [shippingMethod, setShippingMethod] = useState("");
    const [weight, setWeight] = useState("");
    const [shippingCost, setShippingCost] = useState("");
    const [selectedUnit, setSelectedUnit] = useState("")


    useEffect(() => {
        calculateShippingCost();
    }, [weight]);

    const calculateShippingCost = () =>{
        switch (true) {
            case (flagName === "usa" && shippingMethod === "plane"): setShippingCost(weight * 6000);
                break;
            case (flagName === "usa" && shippingMethod === "ship"): setShippingCost(weight * 15000);
                break;
            case (flagName === "rus"): setShippingCost(weight * 2000);
                break;
            case (flagName === "uk"): setShippingCost(weight * 6000);
                break;
            case (flagName === "china" && shippingMethod === "plane"): setShippingCost(weight * 8000);
                break;
            case (flagName === "china" && shippingMethod === "ship"): setShippingCost(weight * 1500);
                break;
            case (flagName === "uae"): setShippingCost(weight * 5000);
                break;
            default: setShippingCost(weight * 6000);
        }
    }


    return (
        <div className="calculator">
            <div className="calculator-modal">
                <div className="calculator-header">
                    <h2>Առաքման հաշվիչ</h2>
                    <div className="close" onClick={calculatorModalShow}>
                        <i className="fa fa-times" ></i>
                    </div>
                </div>
                <p>
                    Ֆիզիկական անձանց համար բեռնափոխադրման արժեքը հաշվարկվում է
                    ըստ բեռի փաստացի քաշի, բացառությամբ գերծավալային քաշով
                    բեռների:
                </p>
                <div className="calculator-flags">
                    <ul>
                        <li>
                            <input 
                                type="radio" 
                                id="usa" 
                                name="flag" 
                                value="usa" 
                                defaultChecked
                                onClick={(e) => {
                                    // setIsChecked(e.target.checked);
                                    setFlagName(e.target.value)
                                    }} />
                            <label htmlFor="usa" className="label-country">
                                <img src={usa} alt="" />
                            </label>
                        </li>
                        <li>
                            <input 
                                type="radio" 
                                id="rus" 
                                name="flag" 
                                value="rus"                                 
                                onClick={(e) => {
                                    // setIsChecked(e.target.checked);
                                    setFlagName(e.target.value)
                                    }} />
                            <label htmlFor="rus" className="label-country">
                                <img src={russia} alt="" />
                            </label>
                        </li>
                        <li>
                            <input 
                                type="radio" 
                                id="uk" 
                                name="flag" 
                                value="uk"
                                onClick={(e) => {
                                    // setIsChecked(e.target.checked);
                                    setFlagName(e.target.value)
                                    }} />
                            <label htmlFor="uk" className="label-country">
                                <img src={uk} alt="" />
                            </label>
                        </li>
                        <li> 
                            <input 
                                type="radio" 
                                id="china" 
                                name="flag" 
                                value="china"
                                onClick={(e) => {
                                    // setIsChecked(e.target.checked);
                                    setFlagName(e.target.value)
                                    }} />
                            <label htmlFor="china" className="label-country">
                                <img src={china} alt="" />
                            </label>
                        </li>
                        <li>
                            <input 
                                type="radio" 
                                id="uae" 
                                name="flag" 
                                value="uae"
                                onClick={(e) => {
                                    // setIsChecked(e.target.checked);
                                    setFlagName(e.target.value)
                                    }} />
                            <label htmlFor="uae" className="label-country">
                                <img src={uae} alt="" />
                            </label>
                        </li>
                    </ul>
                    
                    
                </div>
                <div className="shipping-method">
                    <p>Առաքման եղանակ</p>
                    <div className="shipping-method-air">
                        <input
                            type="radio"
                            name="shipping-type"
                            id="plane"
                            value="plane" 
                            defaultChecked
                            onClick={(e) => {
                                // setIsMethodChecked(e.target.checked);
                                setShippingMethod(e.target.value)
                                }}
                        />
                        <label htmlFor="plane">
                            <i className="fa fa-plane"></i>
                        </label>
                    </div>
                    <div className="shipping-method-ship">
                        <input
                            type="radio"
                            name="shipping-type"
                            id="ship"
                            value="ship" 
                            onClick={(e) => {
                                // setIsMethodChecked(e.target.checked);
                                setShippingMethod(e.target.value);
                                console.log(e);
                                }}
                        />
                        <label htmlFor="ship">
                            <i className="fa fa-ship"></i>
                        </label>
                    </div>
                </div>
                <div className="calculate-shipping-cost">
                    <div className="extra-weight">
                        <label htmlFor="extra-weight-label">
                            <input
                                type="checkbox"
                                name=""
                                id="extra-weight-input"
                            />
                            գերծավալային քաշ
                        </label>
                    </div>
                    <div className="extra-weight-dimentions">
                        <p>* Բեռը համարվում է գերծավալային քաշով, եթե կողմերի երկարությունների գումարը գերազանցում է 150 սմ-ը և ծավալային** քաշը 2 և ավելի անգամ գերազանցում է փաստացի քաշը: Այս դեպքում հաշվարկվում է ըստ բեռի ծավալային քաշի, սակայն գործում է հատուկ զեղչված սակագին՝ 4000 դր/կգ 
                                <br />
                            ** Ծավալային քաշի հաշվարկի միջազգային բանաձևն է՝ (Երկարություն X Լայնություն X Բարձրություն) / 5000 (սմ/կգ)
                        </p>

                    </div>
                    <div className="input-weight">
                        <input
                            type="number"
                            name=""
                            id="input-weight"
                            placeholder="փաստացի քաշ"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <select name="" id="input-select" onChange = {(e) => setSelectedUnit(e.target.value)}>
                            <option value="cm" defaultValue>
                                սմ/կգ
                            </option>
                            <option value="inch">դյույմ/ֆունտ</option>
                        </select>
                    </div>
                    <div className="cost">
                        <p>Առաքման արժեք</p>
                        <p className="shipping-cost">{shippingCost} դր</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
