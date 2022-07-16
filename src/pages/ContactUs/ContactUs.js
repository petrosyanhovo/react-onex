import React from "react";
import "./contactUs.css";
import  { getBranches } from '../../api'
import { useEffect, useState } from "react";

export const ContactUs = () => {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        getBranches().then(data => {
            setBranches(data)
        })
    }, [])

    return (
        <div className="container">
            <h2>ՀԵՏԱԴԱՐՁ ԿԱՊ</h2>
            <div className="schedule-block">
                <div className="schedule-title">
                    <h3>Սպասարկման կենտրոն</h3>
                    <p>
                        <span>Երկ - Շբթ</span> 09:00 - 19:00
                    </p>
                </div>
                <div className="schedule-title">
                    <h3>SMART WALL</h3>
                    <p>
                        <span>Երկ - Շբթ</span> 09:00 - 21:00 <br />
                        <span>Կիր</span> 12:00 - 18:00
                    </p>
                </div>
                <div className="schedule-title">
                    <a href="#">
                        <i className="fa-solid fa-phone"></i> (+374) 60 750 350
                    </a>
                    <br />
                    <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        contact@onex.am
                    </a>
                </div>
            </div>
            <div className="address-container">
                <div className="map-address">
                    <iframe
                        title="Google Map"
                        width="560"
                        height="500"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195168.3276383564!2d44.34848213219609!3d40.15330599739781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1656839950710!5m2!1sen!2s"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="address">
                {   branches.map((branch) => {
                        return (
                            <p key={branch.branchId}>
                                <i className="fas fa-home"></i>
                                {branch.title} <br />
                                <span>{branch.address}</span>
                            </p>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
};
