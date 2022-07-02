import React from "react";
import "./export.css";
import Heading from "../Heading/Heading";
import area1 from "../Export/export_img/export_usa.jpg";
import area2 from "../Export/export_img/export_rus.jpg";
import area3 from "../Export/export_img/docs.png";
import { NavLink as Link } from "react-router-dom";

const Export = () => {
    return (
        <div className="export">
            <Heading
                heading="ԱՐՏԱՀԱՆՈՒՄ"
                text="Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները"
                text2="ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե"
            />
            <div className="export-areas">
                <div className="export-one-area">
                    <img src={area1} alt="" />
                    <Link to = '/exporttoUSA' >
                        <p>Արտահանում ՀՀ-ից դեպի ԱՄՆ</p>
                    </Link>
                </div>
                <div className="export-one-area">
                    <img src={area2} alt="" />
                    <Link to = '/exporttorussia' >
                        <p>Արտահանում ՀՀ-ից դեպի Ռուսաստան</p>
                    </Link>
                </div>
                <div className="export-one-area">
                    <img src={area3} alt="" />
                    <Link to = '/exportdocuments' >
                        <p> Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Export;
