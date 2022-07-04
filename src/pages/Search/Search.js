import React, { useState } from "react";
import "./search.css";
import track from "./search-img/track-package.png";
export const Search = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="container">
      <div className="content">
        <div className="first-part">
          <h2>
            ՀԵՏԵՎԵԼ <span>ԱՌԱՔԱՆՈՒՆ</span>{" "}
          </h2>
          <p>
            Արտերկրից դեպի ՀՀ և հակառակ ուղղությամբ ուղարկված Ձեր ծանրոցների
            առաքման ողջ ընթացքին կարող եք հետևել այստեղ
          </p>
        </div>
        <div className="second-part">
          <img src={track} alt="" />
        </div>
      </div>
      <form action="">
        <input type="text" placeholder="Մուտքագրեք բեռնային համարը.. . " />
        <button
          type="submit"
          onMouseOver={() => setFlag(true)}
          onMouseLeave={() => setFlag(false)}
        >
          <i className={flag ? "fas fa-arrow-right" : "fas fa-search"}></i>
        </button>
      </form>
    </div>
  );
};
