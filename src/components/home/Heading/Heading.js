import React from "react";
import "./heading.css";

const Heading = ({ greenHeading, heading, text, text2 }) => {
    return (
        <div className="heading">
            <div className="stars">
                <i className="fas fa-star small"></i>
                <i className="fas fa-star middle"></i>
                <i className="fas fa-star big"></i>
                <i className="fas fa-star middle"></i>
                <i className="fas fa-star small"></i>
            </div>
            <h2>
                {" "}
                <span>{greenHeading} </span> {heading}
            </h2>
            <p>
                {text}
                <br/>
                {text2}
            </p>
        </div>
    );
};

export default Heading;
