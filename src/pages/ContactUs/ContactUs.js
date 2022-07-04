import React from "react";
import "./contactUs.css";

export const ContactUs = () => {
    return (
        <div className="container">
            <h2>ՀԵՏԱԴԱՐՁ ԿԱՊ</h2>
            <div className="schedule-block">
                <div className="schedule-title">
                    <h3>Սպասարկման կենտրոն</h3>
                    <p>
                        {" "}
                        <span>Երկ - Շբթ</span> 09:00 - 19:00
                    </p>
                </div>
                <div className="schedule-title">
                    <h3>SMART WALL</h3>
                    <p>
                        {" "}
                        <span>Երկ - Շբթ</span> 09:00 - 21:00 <br />
                        <span>Կիր</span> 12:00 - 18:00
                    </p>
                </div>
                <div className="schedule-title">
                    <a href="">
                        {" "}
                        <i class="fa-solid fa-phone"></i> (+374) 60 750 350
                    </a>
                    <br />
                    <a href="">
                        <i class="fa-solid fa-envelope"></i>
                        contact@onex.am
                    </a>
                </div>
            </div>
            <div className="address-container">
                <div className="map">
                    <iframe
                        width="560"
                        height="500"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195168.3276383564!2d44.34848213219609!3d40.15330599739781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1656839950710!5m2!1sen!2s"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="address">
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ԵՐԵՒԱՆ <br />
                        <span>Տերյան 105/1, Ցիտադել բիզնես կենտրոն</span>
                    </p>
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ԳԱՎԱՌ <br />
                        <span>Գրիգոր Լուսավորիչ 20/1</span>
                    </p>
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ԳՅՈՒՄՐԻ <br />
                        <span>
                            Գայի 1, Գյումրի Տեխնոլոգիական Կենտրոն(մուտքը
                            D-Link-ի կողմից)
                        </span>
                    </p>
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ՀՐԱԶԴԱՆ <br />
                        <span>Սպանդարյան 6 շենք</span>
                    </p>
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ՍՏԵՓԱՆԱԿԵՐՏ <br />
                        <span>
                            Ազատամարտիկների 26, "Եվրոպա" հյ, 2-րդ հարկ, 207
                            սենյակ
                        </span>
                    </p>
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ՎԱՆԱՁՈՐ <br />
                        <span>Տիգրան Մեծ 18</span>
                    </p>
                    <p>
                        <i className="fas fa-home"></i>
                        ONEX ԵՂԵԳՆԱՁՈՐ <br />
                        <span>Նարեկացու փողոց 6/4</span>
                    </p>
                    <p>
                        <i className="fas fa-home blue"></i>
                        ONEX ԱՋԱՓՆՅԱԿ (ՌՈՍՏԵԼԵԿՈՄ)
                        <br />
                        <span>Մարգարյան 14/8</span>
                    </p>
                    <p>
                        <i className="fas fa-home blue"></i>
                        ONEX ՄԱԼԱԹԻԱ֊ՍԵԲԱՍՏԻԱ (ՌՈՍՏԵԼԵԿՈՄ)
                        <br />
                        <span>Մալաթիա 86/1</span>
                    </p>
                    <p>
                        <i className="fas fa-home blue"></i>
                        ONEX ԱՎԱՆ (ՌՈՍՏԵԼԵԿՈՄ)
                        <br />
                        <span>Խուդյակով 220/10</span>
                    </p>
                    <p>
                        <i className="fas fa-home blue"></i>
                        ONEX ԷՐԵԲՈՒՆԻ (ՌՈՍՏԵԼԵԿՈՄ)
                        <br />
                        <span>Էրեբունու 20/52</span>
                    </p>
                    <p>
                        <i className="fas fa-home blue"></i>
                        ONEX Ք․ ԱԲՈՎՅԱՆ (ՌՈՍՏԵԼԵԿՈՄ)
                        <br />
                        <span>Հատիսի 1/6</span>
                    </p>
                    <p>
                        <i className="fas fa-home blue"></i>
                        ONEX Ք․ ԿԱՊԱՆ (ՌՈՍՏԵԼԵԿՈՄ)
                        <br />
                        <span>Շահումյան 3֊4/1</span>
                    </p>
                </div>
            </div>
            
        </div>
    );
};
