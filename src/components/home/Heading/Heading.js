import React from "react";
import "./heading.css";

const Heading = ({ greenHeading, heading, greenHeadingAfter, text }) => {
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
                <span>{greenHeading} </span> {heading} <span> {greenHeadingAfter} </span>
            </h2>
            <p>
                {text}

            </p>
        </div>
    );
};

export default Heading;
