import React from "react";
import "./shopsPage.css";
import Heading from "../../components/home/Heading/Heading";
import ShopsImg from "./shops_img/shops.png";
import USAImg from "./shops_img/usa.png";
import RusImg from "./shops_img/russia.png";
import UKImg from "./shops_img/uk.png";
import ChinaImg from "./shops_img/china.png";
import UAEImg from "./shops_img/uae.png";
import Accordion from "./Accordion";

function Shops() {
  return (
    <div className="shops">
      <div className="shops-header">
        <div className="shops-header-title">
          <Heading
            heading="ԼԱՎԱԳՈՒՅՆ"
            greenHeadingAfter="ԽԱՆՈՒԹՆԵՐ"
            text="Գնիր աշխարհի լավագույն օնլայն խանութներից" />
        </div>
        <div className="shops-header-image">
          <img src={ShopsImg} alt="" />
        </div>
      </div>

      <div className="shops-top-filter">
        <div className="shops-top-filter-search-input">
          <input type="text" placeholder="Փնտրել" />
        </div>
        <div className="shops-top-filter-by-country">
          <ul className="countries">
            <li className="country">
              <a href="">
                <div className="filter-country-content">
                  <i class="fa-solid fa-earth-americas"></i>
                  <span>Բոլորը</span>
                </div>
              </a>
            </li>
            <li className="country">
              <a href="">
                <div className="filter-country-content">
                  <img src={USAImg} alt="" />
                  <span>ԱՄՆ</span>
                </div>
              </a>
            </li>
            <li className="country">
              <a href="">
                <div className="filter-country-content">
                  <img src={RusImg} alt="" />
                  <span>Ռուսաստան</span>
                </div>
              </a>
            </li>
            <li className="country">
              <a href="">
                <div className="filter-country-content">
                  <img src={UKImg} alt="" />
                  <span>Մեծ Բրիտանիա</span>
                </div>
              </a>
            </li>
            <li className="country">
              <a href="">
                <div className="filter-country-content">
                  <img src={ChinaImg} alt="" />
                  <span>Չինաստան</span>
                </div>
              </a>
            </li>
            <li className="country">
              <a href="">
                <div className="filter-country-content">
                  <img src={UAEImg} alt="" />
                  <span>ԱՄԷ</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <Accordion /> */}
    </div>
  );
















































































}

export default ShopsPage;
