import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./accordion.css";

const Accordion = ({onChange}) => {
  const [expanded, setExpanded] = useState(false);
  // let filteredBYCategory = [];

  // const [shops, setShops] = useState([]);

  //   useEffect(() => {
  //     fetch('http://localhost:3000/shops')
  //     .then(response => response.json())
  //     .then(json => setShops(json));
  //   }, [])


  // const onChange = (e) => {
  //   if (e.target.checked) {
  //     filteredBYCategory = shops.filter(shop => {
  //       for (const cat of shop.category) {
  //         if (cat === e.target.name) {
  //           return true
  //         }
  //       }
  //     })
  //   }
  //   setShops(filteredBYCategory)
  //   console.log(filteredBYCategory);
  // }

  return (
    <div className="accordion">
      <div className="accordion-header">
        <h4 onClick={() => setExpanded(!expanded)} className = "question-title">
          բաժիններ
        </h4>

        <button className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {expanded && (
        <div className=" left-filter">

          <div className="left-filter-option">
            <input type="checkbox" name="Hypermarket" id="" onChange={(e) => onChange(e)} />
            <span>Հիպերմարկետ</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Clothes" id="" onChange={(e) => onChange(e)} />
            <span>Հագուստ, կոշիկ, աքսեսուարներ</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Beauty" id="" onChange={(e) => onChange(e)} />
            <span>Գեղեցկություն և առողջություն</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Electronics" id="" onChange={(e) => onChange(e)} />
            <span>Էլեկտրոնիկա և աքսեսուարներ</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Home" id="" onChange={(e) => onChange(e)} />
            <span>Տուն և այգի</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Sport" id="" onChange={(e) => onChange(e)} />
            <span>Սպորտ և ժամանց</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Kids" id="" onChange={(e) => onChange(e)} />
            <span>Մանկական</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Car" id="" onChange={(e) => onChange(e)} />
            <span>Մեքենաների համար</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="Brand" id="" onChange={(e) => onChange(e)} />
            <span>Բրենդային խանութ</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default Accordion;
