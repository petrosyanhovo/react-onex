import React from "react";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  return (
    <>
      <nav className="nav ">
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
