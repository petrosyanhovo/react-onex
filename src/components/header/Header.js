import React, { useState, useEffect } from "react";
import "../header/header.css";
import armenia from "../header/header_img/armenia.png";
import onex from "../header/header_img/onex.png";
import onex2 from "../header/header_img/favicon.png";
import { NavLink as Link } from "react-router-dom";
import { CalculatorModal } from "../../pages/CalculatorModal/CalculatorModal";
import { HeaderNavBar } from "./HeaderNavBar/HeaderNavBar";
import { MediaHeaderNavBar } from "./MediaHeaderNavBar/MediaHeaderNavBar";
import HeaderImg from "../../components/header/header_img/onex.png";

export const Header = ({ isAuth, logout }) => {
  const [isCalculatorModalShow, setCalculatorModalShow] = useState(false);
  const [isNavBarShow, setNavBarShow] = useState(false);
  const onLogout = () => logout();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserEmail(JSON.parse(localStorage.getItem("user")));
    // const initialValue = JSON.parse(getUserEmail);
  }, [])

  console.log(userEmail);

  //   const [isActive, setActive] = useState(true);

  const calculatorModalShow = () => {
    setCalculatorModalShow(!isCalculatorModalShow);
  };

  const navBarShow = () => {
    setNavBarShow(!isNavBarShow);
  };

  return (
    <header>
      {isAuth ? (
        <>
          <div className="first-part">
            <p>
              Ռուսաստանից առաքումների որակը զգալի բարձրացնելու նպատակով՝ փոխվել
              է ՌԴ պահեստի <span>հասցեն</span> ։
            </p>
          </div>

          <div className="orders-header">
            <div className="order-header-img">
              <img src={HeaderImg} alt="logo" />
            </div>
            <div className="orders-header-navbar">
              <a href=""> Ուղարկել առաջարկ </a>
              <div className="orders-header-navbar-user">
                <i className="fas fa-search"></i>
                <a href="">0 դր </a>
                <a href="">{userEmail}</a>
              </div>

              <button onClick={onLogout}>Logout</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="first-part">
            <p>
              Ռուսաստանից առաքումների որակը զգալի բարձրացնելու նպատակով՝ փոխվել
              է ՌԴ պահեստի <span>հասցեն</span> ։
            </p>
          </div>
          <div className="second-part">
            <div className="link">
              <Link to="/contact">Հետադարձ կապ </Link>|
              <a href="https://onex.am/pages/terms">Պայմաններ </a>|
              <a href="">(060)750-350</a>|{/* modal  */}
              <Link to="/shops">Խանութներ</Link>
              <a href="#">
                <img src={armenia} /> Հայերեն
              </a>
            </div>
            <div className="login-btn">
              <Link to="/login" className="btn-1">
                <i className="fa fa-sign-in"></i>
                ՄՈՒՏՔ
              </Link>

              <Link to="/register" className="btn-2">
                <i className="fa fa-user-plus"></i>
                ԳՐԱՆՑՎԵԼ
              </Link>
            </div>
          </div>
          <div className="third-part">
            <div
              className="hamburger fa-solid fa-bars "
              onClick={navBarShow}
            ></div>
            <div className="logo">
              <Link className="first" to="/">
                <img src={onex} alt="onex" />
              </Link>
              <Link className="second" to="/">
                <img src={onex2} alt="onex" />
              </Link>
            </div>
            <div className="right">
              <HeaderNavBar />
              {isNavBarShow && <MediaHeaderNavBar />}
              <div className="calc-and-search">
                <a onClick={calculatorModalShow}>
                  <i className="fa-solid fa-calculator"></i>
                </a>
                <Link to="/search">
                  <i className="fa-solid fa-search"></i>
                </Link>
              </div>
            </div>
          </div>

          {isCalculatorModalShow && (
            <CalculatorModal calculatorModalShow={calculatorModalShow} />
          )}
        </>
      )}
    </header>
  );
};
