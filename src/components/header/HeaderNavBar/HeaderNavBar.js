import React, { useState } from "react";
import { a } from "react-router-dom";
import "./HeaderNavBar.css";
export const HeaderNavBar = () => {
    return (
        <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn">
                    Ներմուծում
                    {/* <i className="fa fa-caret-down"></i> */}
                </button>
                <div className="dropdown-content">
                    <a href="#">
                        <img src="https://onex.am/images/online-shopping.svg" />
                        Օնլայն գնումներ
                    </a>
                    <a href="#">
                        <img src="https://onex.am/images/flags/russia.svg" />
                        Ծանրոցներ ՌԴ - ից
                    </a>
                    <a href="#">
                        <img src="https://onex.am/images/flags/usa.svg" />
                        Ծանրոցներ Նյու Յորքից
                    </a>
                    <a href="#">
                        <img src="https://onex.am/images/buyforme/handshake.svg" />
                        Գնիր իմ փոխարեն
                    </a>
                    <a href="#">
                        <img src="https://onex.am/images/shops-menu.svg" />
                        Խանութներ
                    </a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">
                    Արտահանում
                    {/* <i className="fa fa-caret-down"></i> */}
                </button>
                <div className="dropdown-content">
                    <a href="#">
                        <img src="https://onex.am/images/flags/russia.svg" />
                        Դեպի Ռուսաստան
                    </a>
                    <a href="#">
                        <img src="https://onex.am/images/flags/usa.svg" />
                        Դեպի ԱՄՆ
                    </a>

                    <a href="#">
                        <img src="https://onex.am/img/globe.svg" />
                        Փաստաթղթեր
                    </a>
                </div>
            </div>

            <a href="#" className="link">
                Կորպորատիվ
            </a>
            <a href="#" className="link">
                Մեծածախի հարցում
            </a>

            <div className="dropdown">
                <button className="dropbtn">
                    SMART Լուծումներ
                    {/* <i className="fa fa-caret-down"></i> */}
                </button>
                <div className="dropdown-content">
                    <a href="#">ONEX Smart Wall</a>
                    <a href="#">ONEX Smart Lockers</a>
                    <a href="#">ONEX Smart Services</a>
                    <a href="#">Dropify</a>
                    <a href="#">OneClick Extension</a>
                </div>
            </div>
        </div>
    );
};
