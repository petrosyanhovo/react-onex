import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="first-footer">
                <div className="left">
                    <h4>Ներբեռնե՛ք մեր հավելվածը</h4>
                    <div className="down-icons">
                        <a
                            href="https://itunes.apple.com/us/app/id1182969336"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/app_store_hy.svg" />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.onex"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/google_play_hy.svg" />
                        </a>
                        <a
                            href="https://chrome.google.com/webstore/detail/onexam/elnfdnpcmioiblhbichaacoghdhofeei"
                            target="_blank"
                        >
                            <img
                                src="https://onex.am/img/svg/chrome_hy.svg"
                                target="_blank"
                            />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <h4>Հետևեք մեզ</h4>
                    <div className="soc-icons">
                        <a
                            href="https://www.facebook.com/ONEXArmenia"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/facebook.svg" />
                        </a>
                        <a
                            href="https://www.instagram.com/onex.am/"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/instagram.svg" />
                        </a>
                        <a
                            href="https://www.telegram.me/onexarmenia"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/telegram.svg" />
                        </a>
                        <a
                            href="http://www.youtube.com/channel/UCRW2AYbUufqlo93lRS-4N-A?sub_confirmation=1"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/youtube.svg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/10419797"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/linkedin.svg" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@onex.am?lang=en"
                            target="_blank"
                        >
                            <img src="https://onex.am/img/svg/tiktok.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="second-footer">
                <div className="left">
                    <div className="pay-methods">
                        <h4>Վճարման եղանակներ</h4>
                        <div className="icons">
                            <img src="https://onex.am/img/mastercard.svg" />
                            <img src="https://onex.am/img/visa.svg" />
                            <img src="https://onex.am/img/arca.svg" />
                            <img src="https://onex.am/img/easypay.svg" />
                            <img src="https://onex.am/img/telcell-logo.svg" />
                        </div>
                    </div>
                    <div className="choose-lang">
                        <h4>Ընտրել լեզուն</h4>
                        <select>
                            <option>
                                {/* <img src="https://onex.am/images/flags/armenia.svg" />{" "} */}
                                Հայերեն
                            </option>
                            <option>
                                {/* <img src="https://onex.am/images/flags/usa.svg" />{" "} */}
                                English
                            </option>
                            <option>
                                {/* <img src="https://onex.am/images/flags/russia.svg" />{" "} */}
                                Русский
                            </option>
                        </select>
                    </div>
                </div>
                <div className="right1">
                    <div className="center">
                        <a
                            href="https://onex.am/hy/pages/onexprime"
                            target="_blank"
                        >
                            <span>PRIME</span> կարգավիճակ
                        </a>
                        <a
                            href="https://onex.am/hy/pages/onexprime"
                            target="_blank"
                        >
                            Ստացման վայրեր
                        </a>
                        <a href="https://onex.am/hy/pages/12" target="_blank">
                            Մեր պատմությունը
                        </a>
                        <a href="https://onex.am/hy/shops" target="_blank">
                            Խանութներ
                        </a>
                        <a
                            href="https://onex.am/hy/account/dropify"
                            target="_blank"
                        >
                            ONEX Dropify
                        </a>
                        <a href="https://onex.am/hy/pages/buyforme" target="_blank">
                            Գնիր իմ փոխարեն
                        </a>
                        <a href="https://onex.am/hy/onextrack" target="_blank">
                            Հետևել առաքանուն
                        </a>
                        <a href="https://blog.onex.am/" target="_blank">
                            Բլոգ
                        </a>
                    </div>
                    <div className="right">
                        <div className="top">
                            <h2>ՍՊԱՍԱՐԿՄԱՆ ԿԵՆՏՐՈՆ</h2>
                            <h4>
                                {" "}
                                <span>Երկ - Շբթ </span>09:00 - 19:00
                            </h4>
                        </div>
                        <div className="center">
                            <h2>ONEX SMART WALL</h2>
                            <h4>
                                <span>Երկ - Շբթ </span>09:00 - 21:00
                            </h4>
                            <h4>
                                <span>Կիր</span> 12:00 - 18:00
                            </h4>
                        </div>
                        <div className="bottom">
                            <a
                                href="https://onex.am/hy/user/contact"
                                target="_blank"
                            >
                                Հետադարձ կապ{" "}
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                            <a href="tel:+37460750350">
                                {" "}
                                <i className="fa fa-phone onex_green"> </i> (+374)
                                60 750 350
                            </a>
                            <a href="mailto:contact@onex.am">
                                <i className="fa fa-envelope onex_green"></i>
                                contact@onex.am
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-footer">
                <h4>
                    2015-2022 © ՕՆԷՔՍ ՍՊԸ։ Բոլոր իրավունքները պաշտպանված են:
                </h4>
                <div className="links">
                    <a href="https://onex.am/hy/pages/terms" target="_blank">
                        Ընդհանուր դրույթներ և պայմաններ
                    </a>{" "}
                    |{" "}
                    <a href="https://onex.am/ServiceAgreement.pdf" target="_blank">
                        Միջազգային բեռնափոխադրման պայմանագիր
                    </a>{" "}
                    |{" "}
                    <a href="https://onex.am/hy/pages/privacy_policy" target="_blank">
                        Գաղտնիության քաղաքականություն
                    </a>
                </div>
            </div>
        </footer>
    );
};
