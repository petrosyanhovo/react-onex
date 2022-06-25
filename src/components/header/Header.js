import React from "react";
import "../header/header.css";
import armenia from "../header/img/armenia.png";
import onex from "../header/img/onex.png";

export const Header = () => {
  return (
    <header>
      <div className="first-part">
        <p>
          Ռուսաստանից առաքումների որակը զգալի բարձրացնելու նպատակով՝ փոխվել է ՌԴ
          պահեստի <span>հասցեն</span> ։
        </p>
      </div>
      <div className="second-part">
        <div className="link">
          <a href="https://onex.am/user/contact">Հետադարձ կապ </a>
          <a href="https://onex.am/pages/terms"> Պայմաններ </a>
          <a href=""> (060) 750-350 </a>
          {/* modal  */}
          <a href="https://onex.am/shops"> Խանութներ</a>
          <a href="#">
            <img src={armenia} /> Հայերեն
          </a>
        </div>
        <div className="login-btn">
          <a href="" className="btn-1">
            <i className="fa fa-sign-in"></i>
            ՄՈՒՏՔ
          </a>
          <a href="" className="btn-2">
            <i className="fa fa-user-plus"></i>
            ԳՐԱՆՑՎԵԼ
          </a>
        </div>
      </div>
      <div className="third-part">
        <div className="logo">
          <img src={onex} alt="onex" />
        </div>
        <div className="nav">
          <a href="#">Ներմուծում</a>
          <a href="#">Արտահանում</a>
          <a href="#">Կորպորատիվ</a>
          <a href="#">Մեծածախի հարցում</a>
          <a href="#">SMART Լուծումներ</a>
          <a href="">
            <i className="fa-solid fa-calculator"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-search"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
