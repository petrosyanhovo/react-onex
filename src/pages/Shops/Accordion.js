import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./accordion.css";
import axios from "axios";

const Accordion = ({ onChange }) => {

    const [expanded, setExpanded] = useState(false);
    const [category, setCategory] = useState();

    const loadCategories = async() => {
        const result = await axios.get( 'http://localhost:3000/categories' )
        setCategory(result.data);
        console.log(category);
      }

    useEffect(() => {
        loadCategories();
    }, [])

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
                category.map((cat) =>{
                    return (
                        <div className="left-filter" key={cat.id}>

                        <div className="left-filter-option">
                            <label>
                                <input
                                    type="checkbox"
                                    name={cat.category}
                                    id=""
                                    onChange={(e) => onChange(e)}
                                />
                                <span>{cat.category}</span>
                            </label>
                        </div>
    
                    </div>
                    )
                })
            )}
        </div>
    );
};

export default Accordion;
