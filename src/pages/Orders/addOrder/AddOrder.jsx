import React from "react";
import "./addOrder.css";
import axios from "axios";
import { useEffect, useState } from "react";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../CalculatorModal/calculatorModal_img",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
export const AddOrder = () => {
  const [country, setCountry] = useState([]);

  const loadCountries = async () => {
    const result = await axios.get("http://localhost:3000/countries");
    setCountry(result.data);
    console.log(country);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  // console.log(images);
  return (
    <div className="add-order">
      <div className="add-order-container">
      <div className="modal-header">
        <h2>Ավելացնել պատվեր</h2>
        <i className=" fa fa-times"></i>
      </div>
      <div className="ordered-country">
        {country.map((val) => {
          return (
            <div className="order-country-flag" key={val.countryId}>
              <label htmlFor={val.country}>
                <img src={images[val.countryImg]} alt="" />
              </label>
              <input type="radio" name="country" id={val.country} />
            </div>
          );
        })}
      </div>
      </div>
      
    </div>
  );
};
