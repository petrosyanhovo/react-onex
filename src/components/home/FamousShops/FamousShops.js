import React from "react";
import "./famousShops.css";
import { NavLink as Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Button from "../../Button/Button";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}

const images = importAll(
    require.context("../FamousShops/famousShops_img", false, /\.(png|jpe?g|svg)$/)
);

const FamousShops = () => {
    return (
        <div className="famous-shops">
            <Heading
                heading="ԼԱՎԱԳՈՒՅՆ ԽԱՆՈՒԹՆԵՐ"
                text="Միջազգային օնլայն խանութների 90%-ը առաքում չեն իրականացնում դեպի Հայաստան," 
                text2 = "սակայն ONEX-ի միջոցով կարող եք ստանալ Ձեր առաքանիները Հայաստանում ու Արցախում՝ արագ և ապահով"
            />

            <div className="shops">
                <div className="shop-logo">
                    <a href="http://www.amazon.com" target="blank">
                        <img src={images["amazon.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.aliexpress.com" target="blank">
                        <img src={images["aliexpress.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.ebay.com" target="blank">
                        <img src={images["ebay.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.carters.com" target="blank">
                        <img src={images["carters.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.victoriassecret.com" target="blank">
                        <img src={images["vs.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.gap.com" target="blank">
                        <img src={images["gap.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.michaelkors.com" target="blank">
                        <img src={images["mk.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="http://www.forever21.com" target="blank">
                        <img src={images["forever21.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="https://www2.hm.com/en_gb/index.html" target="blank">
                        <img src={images["hm.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="https://www.ralphlauren.com/" target="blank">
                        <img src={images["rl.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="https://www.ozon.ru/" target="blank">
                        <img src={images["ozon.png"]} alt="" />
                    </a>
                </div>
                <div className="shop-logo">
                    <a href="https://www.taobao.com/" target="blank">
                        <img src={images["taobao.png"]} alt="" />
                    </a>
                </div>
            </div>

            <Link to='/shops' >
                <Button buttonName="Բոլոր խանութները" />    
            </Link>
        </div>
    );
};

export default FamousShops;
