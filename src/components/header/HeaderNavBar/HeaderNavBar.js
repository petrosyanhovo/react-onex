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
                    <a href="#">Օնլայն գնումներ</a>
                    <a href="#">Ծանրոցներ ՌԴ - ից</a>
                    <a href="#">Ծանրոցներ Նյու Յորքից</a>
                    <a href="#">Գնիր իմ փոխարեն</a>
                    <a href="#">Խանութներ</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">
                    Արտահանում
                    {/* <i className="fa fa-caret-down"></i> */}
                </button>
                <div className="dropdown-content">
                    <a href="#">Դեպի Ռուսաստան</a>
                    <a href="#">Դեպի ԱՄՆ</a>
                    <a href="#">Փաստաթղթեր</a>
                </div>
            </div>

            <a href="#" className="link">Կորպորատիվ</a>
            <a href="#" className="link">Մեծածախի հարցում</a>

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
