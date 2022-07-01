import React, { useState } from "react";
import "../header/header.css";
import armenia from "../header/header_img/armenia.png";
import onex from "../header/header_img/onex.png";
import onex2 from "../header/header_img/favicon.png";
import { NavLink as Link } from "react-router-dom";
import { CalculatorModal } from "../../pages/CalculatorModal/CalculatorModal";

export const Header = () => {
    const [isCalculatorModalShow, setCalculatorModalShow] = useState(false);

    const calculatorModalShow = () => {
        setCalculatorModalShow(!isCalculatorModalShow);
    };

    function openModal() {}

    return (
        <header>
            <div className="first-part">
                <p>
                    Ռուսաստանից առաքումների որակը զգալի բարձրացնելու նպատակով՝
                    փոխվել է ՌԴ պահեստի <span>հասցեն</span> ։
                </p>
            </div>
            <div className="second-part">
                <div className="link">
                    <a href="https://onex.am/user/contact">Հետադարձ կապ</a>|
                    <a href="https://onex.am/pages/terms">Պայմաններ </a>|
                    <a href="">(060)750-350</a>|{/* modal  */}
                    <a href="https://onex.am/shops">Խանութներ</a>|
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
                <div className="hamburger fa-solid fa-bars "></div>
                <div className="logo">
                    <Link className="first" to="/">
                        <img src={onex} alt="onex" />
                    </Link>
                    <Link className="second" to="/">
                        <img src={onex2} alt="onex" />
                    </Link>
                </div>
                <div className="right">
                    <nav className="nav">
                        <a href="#">Ներմուծում</a>
                        <a href="#">Արտահանում</a>
                        <a href="#">Կորպորատիվ</a>
                        <a href="#">Մեծածախի հարցում</a>
                        <a href="#">SMART Լուծումներ</a>
                    </nav>
                    <div className="calc-and-search">
                        <a onClick={calculatorModalShow}>
                            <i className="fa-solid fa-calculator"></i>
                        </a>
                        <a href="">
                            <i className="fa-solid fa-search"></i>
                        </a>
                    </div>
                </div>
            </div>
            {isCalculatorModalShow && (
                <CalculatorModal calculatorModalShow={calculatorModalShow} />
            )}
        </header>
    );
};
