import React from "react";
import "./export.css";
import Heading from "../Heading/Heading";
import area1 from "../Export/export_img/export_usa.jpg";
import area2 from "../Export/export_img/export_rus.jpg";
import area3 from "../Export/export_img/docs.png";

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
                    <a href="">Արտահանում ՀՀ-ից դեպի ԱՄՆ</a>
                </div>
                <div className="export-one-area">
                    <img src={area2} alt="" />
                    <a href="">Արտահանում ՀՀ-ից դեպի Ռուսաստան</a>
                </div>
                <div className="export-one-area">
                    <img src={area3} alt="" />
                    <a href="">
                        Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Export;
