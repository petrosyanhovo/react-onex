import React from "react";
import "./addOrder.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Orders from "../Orders";

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
export const AddOrder = ({ addOrderShow }) => {
  const [country, setCountry] = useState([]);
  const [user, setUser] = useState("");

  const loadCountries = async () => {
    const result = await axios.get("http://localhost:3000/countries");
    setCountry(result.data);
    console.log(country);
  };

  useEffect(() => {
    loadCountries();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // console.log(images);
  return (
    <div className="add-order">
      <div className="add-order-container">
        <div className="modal-header">
          <h2>Ավելացնել պատվեր</h2>
          <i className=" fa fa-times" onClick={addOrderShow}></i>
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
        <div className="order-shipping-method">
          <h3>
            Առաքման եղանակ <span>*</span> <i className="fa fa-info-circle"></i>
          </h3>
          <div className="order-shipping-method-check">
            <label htmlFor="plane">
              <input type="radio" name="shipping-method" id="plane" />
              <i className="fas fa-plane"> </i>
              Օդային
            </label>
          </div>
          <div className="order-shipping-method-check">
            <label htmlFor="ship">
              <input type="radio" name="shipping-method" id="ship" />
              <i className="fas fa-ship"> </i>
              Ծովային
            </label>
          </div>
        </div>
        <div className="order-receiver">
          <h3>
            Ստացողը ՀՀ-ում
            <span>*</span>
          </h3>
          <select className="form-select">
            <option selected>{user}</option>
          </select>
        </div>
        <div className="order-group">
          <input
            type="text"
            placeholder="Tracking համար(մուտքագրել առանց հավելյալ նշանների)"
            id="tracking"
          />

          <div className="order-group-total">
            <select>
              <option value="">- Արժույթ -</option>
              <option value="USD">$ USD</option>
              <option value="GBP">£ GBP</option>
              <option value="EUR">€ EUR</option>
              <option value="RUB">₽ RUB</option>
              <option value="CNY">¥ CNY</option>
              <option value="AED">د.إ AED</option>
            </select>
            <input type="text" name="" id="" placeholder="Արժեք" />
            <i className="fa fa-info-circle"></i>
            <input type="text" name="" id="" placeholder="Խանութ" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Պատվերի նկարագրություն"
          ></textarea>
        </div>
        <div className="order-add-file">
          <label htmlFor="file">
            <input type="file" name="" id="file" />
            Ինվոյս
            <i class="fa fa-file"></i>
          </label>
        </div>
        <div className="order-footer-buttons">
          <button type="submit" className="first-btn">
            + Ավելացնել
          </button>
          <button type="submit" onClick={addOrderShow}>
            Չեղարկել
          </button>
        </div>
      </div>
    </div>
  );
};
