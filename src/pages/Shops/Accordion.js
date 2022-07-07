import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./accordion.css";

const Accordion = () => {
  const [expanded, setExpanded] = useState(false);

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
            <input type="checkbox" name="" id="" />
            <span>Հիպերմարկետ</span>
          </div>

          <div className="left-filter-option">
            <input type="checkbox" name="" id="" />
            <span>Հագուստ, կոշիկ, աքսեսուարներ</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="" id="" />
            <span>Գեղեցկություն և առողջություն</span>
          </div>
          <div className="left-filter-option">
            <input type="checkbox" name="" id="" />
            <span>Էլեկտրոնիկա և աքսեսուարներ</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
