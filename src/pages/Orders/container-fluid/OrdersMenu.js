import React from "react";
import "./ordersMenu.css";
import addImg from "./containerImg/add-parcel.png";
import { Link } from "react-router-dom";
export const OrdersMenu = () => {
  return (
    <div className="orders-menu-container">
      <div className="nav">
        <a href="">
          Պատվիրված է <span>0</span>
        </a>
        <Link to="/search">
          Հասել է պահեստ <span>0</span>
        </Link>
        <a href="">
          Ճանապարհին է <span>0</span>
        </a>
        <a href="">
          Հայաստանում է <span>0</span>
        </a>
        <a href="">
          Ընդունված է <span>0</span>
        </a>
      </div>
      <div className="container">
        <img src={addImg} alt="" />
        <p>Ներկայումս Դուք դեռ չունեք պատվերներ</p>
        <button className="containerBtn">
          + Ավելացնել սպասվող նոր առաքանի
        </button>
      </div>
      
    </div>
  );
};
