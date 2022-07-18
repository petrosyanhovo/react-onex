import React from "react";
import barCodeImg from "./orders_img/bar-code-gray.png";
import "./orders.css";
import { OrdersMenu } from "./container-fluid/OrdersMenu";
import { AddOrder } from "./addOrder/AddOrder";
import auth from "../../useAuth";

const orders = ({ logout }) => {

  return (
    <div className="orders">
      
      <div className="orders-panel">
        <div className="orders-panel-row">
          <div className="orders-panel-heading">
            <h2>ՊԱՏՎԵՐՆԵՐ</h2>
            <button className="button-heading">+</button>
          </div>
          <button className="barcode" disabled>
            <img src={barCodeImg} alt="" />
            Բարկոդ
          </button>
        </div>
      </div>
      <div className="orders-bottom-panel">
        <div className="control-panel">
          <i className="fa fa-th g-color-primary"></i>
          <i className="fa fa-list"></i>
          <div className="search-input">
            <input type="text" placeholder="Tracking համար" />
            <span>
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
        <div className="price-info">
          <p>
            Վճարման ենթակա <span>0 դր</span>
          </p>
        </div>
        <div className="ship-btn">
          <a href="">
            <button disabled> Առաքում լոքեր</button>
            <span>
              «Առաքում լոքեր» ծառայությունը պատվիրելու համար Դուք դեռևս չունեք
              առաքանի Հայաստանում
            </span>
          </a>
          <a href="">
            <button disabled> Առաքում տուն</button>
            <span>
              «Առաքում տուն» ծառայությունը պատվիրելու համար Դուք դեռևս չունեք
              առաքանի Հայաստանում
            </span>
          </a>
        </div>
      </div>
      <OrdersMenu />
      {/* <AddOrder /> */}
    </div>
  );
};

export default orders;
