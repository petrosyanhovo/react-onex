import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/montserratarm/Montserratarm-Regular.otf";
import "./fonts/montserratarm/Montserratarm-ExtraBold.otf";
import "./fonts/montserratarm/Montserratarm-Thin.otf";
import "./fonts/montserratarm/Montserratarm-Light.otf";
import "./fonts/montserratarm/Montserratarm-ExtraLight.otf";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
