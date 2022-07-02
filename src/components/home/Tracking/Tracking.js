import React from "react";
import "./tracking.css";
import Heading from "../Heading/Heading";

const Tracking = () => {
    return (
        <div className="tracking elem-style">
            <Heading
                greenHeading="ՀԵՏԵՎԵԼ"
                heading="ԱՌԱՔԱՆՈՒՆ"
                text="Մուտքագրեք բեռնակրման համարը՝ առաքման ընթացքին հետևելու համար։"
            />

            <div className="trackInput">
                <form className="inputForm">
                    <div>
                        <input type="text" placeholder="1z81rf250331989368" />
                    </div>
                    <div>
                        <a href="" className="tracking-btn">
                            <i className="fas fa-search"></i>
                            <span>Փնտրել</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Tracking;
