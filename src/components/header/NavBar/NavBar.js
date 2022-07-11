import React from "react";
import "./NavBar.css";
import { useState } from "react";

const NavBar = ({ navBarShow }) => {
    const [isActive, setActive] = useState(true);
   

    return (
        <>
            <nav className={isActive ? "nav active" : "nav"}>
                <a className="link" href="#">
                    Ներմուծում
                </a>
                <a className="link" href="#">
                    Արտահանում
                </a>
                <a className="link" href="#">
                    Կորպորատիվ
                </a>
                <a className="link" href="#">
                    Մեծածախի հարցում
                </a>
                <a className="link" href="#">
                    SMART Լուծումներ
                </a>
            </nav>
        </>
    );
};

export default NavBar;
