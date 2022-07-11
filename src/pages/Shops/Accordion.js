import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./accordion.css";

const Accordion = ({ onChange }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-header">
                <h4
                    onClick={() => setExpanded(!expanded)}
                    className="question-title"
                >
                    Բաժիններ
                </h4>

                <button className="btn" onClick={() => setExpanded(!expanded)}>
                    { expanded ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </div>
            {expanded && (
                <div className="left-filter">
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Hypermarket"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Հիպերմարկետ</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Clothes"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Հագուստ, կոշիկ, աքսեսուարներ</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Beauty"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Գեղեցկություն և առողջություն</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Electronics"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Էլեկտրոնիկա և աքսեսուարներ</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Home"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Տուն և այգի</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Sport"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Սպորտ և ժամանց</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Kids"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Մանկական</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Car"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Մեքենաների համար</span>
                        </label>
                    </div>
                    <div className="left-filter-option">
                        <label>
                            <input
                                type="checkbox"
                                name="Brand"
                                id=""
                                onChange={(e) => onChange(e)}
                            />
                            <span>Բրենդային խանութ</span>
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
