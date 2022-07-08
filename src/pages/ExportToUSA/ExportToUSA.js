import React from "react";
import "./exportToUSA.css";
import Heading from "../../components/home/Heading/Heading";
import ExportToUSAImg from "../../components/home/Export/export_img/export_usa_new.png";
import Button from "../../components/Button/Button";

const ExportToUSA = () => {
    return (
        <div className="export-to-USA">
            <div className="export-to-USA-header">
                <div className="export-to-USA-header-title">
                    <Heading
                        heading="ԲԵՌՆԵՐԻ ԱՐԱԳ ԱՌԱՔՈՒՄ"
                        greenHeadingAfter="ԴԵՊԻ ԱՄՆ"
                    />
                    <div className="export-to-USA-header-title-text">
                        <p>
                            {" "}
                            <i className="fa fa-check"></i> Փաստաթղթերի,
                            ծանրոցների և բեռների առաքում ՀՀ-ից դեպի ԱՄՆ ցանկացած
                            հասցե
                        </p>
                    </div>
                    <div className="export-to-USA-header-title-text">
                        <p>
                            {" "}
                            <i className="fa fa-check"></i> Օնլայն գնումների
                            վերադարձ
                        </p>
                    </div>
                </div>
                <div className="export-to-USA-header-image">
                    <img src={ExportToUSAImg} alt="" />
                </div>
            </div>

            <div className="export-to-USA-conditions">
                <div className="export-to-USA-conditions-column">
                    <h5>ՏԵՎՈՂՈՒԹՅՈՒՆ</h5>
                    <p>
                        {" "}
                        <i className="fa fa-plane"></i>{" "}
                        <span>5-10 աշխ. օր</span>
                    </p>
                </div>
                <div className="export-to-USA-conditions-column">
                    <h5>1 ԿԳ ՍԱԿԱԳԻՆ</h5>
                    <p>6.000 դր</p>
                </div>
                <div className="export-to-USA-conditions-column">
                    <h5>ՖԻՔՍՎԱԾ ՎՃԱՐ</h5>
                    <p>2.000 դր</p>
                </div>
            </div>

            <p className="text">
                Նշված պայմանները գործում են մինչև Դելավերի մեր պահեստ (1622 E
                Ayre Street, Wilmington, Delaware, 19804) առաքման համար: Այլ
                հասցե առաքման դեպքում ավելանում է նաև ԱՄՆ-ի ներսում առաքման
                ժամկետը և արժեքը: Այն ճշտելու համար անհրաժեշտ է տրամադրել
                առաքման հասցեի ZIP կոդը, առաքանու քաշը և չափսերը:
            </p>

            <div className="export-to-USA-calculation">
                <Heading heading="ՔԱՇԻ ԵՎ ՍԱԿԱԳՆԻ ՀԱՇՎԱՐԿ" />
                <p className="calculation-text">
                    Քաշի հաշվարկման ժամանակ հաշվի է առնվում բեռի փաստացի և
                    ծավալային քաշերից առավելագույնը: <br />
                    Կլորացումը կատարվում է 0.5 կգ-ի ճշտությամբ դեպի վերև,
                    մինիմալը՝ 1 կգ:
                </p>
                <div className="export-to-USA-calculation-example">
                    <p>Օրինակ՝</p>
                    <p>0.7 կգ-ի դեպքում կհաշվարկվի 1 կգ - 8.000 դր</p>
                    <p>1.4 կգ-ի դեպքում կհաշվարկվի 1.5 կգ - 11.000 դր</p>
                </div>
            </div>

            <div className="export-to-USA-return">
                <Heading
                    heading="ՕՆԼԱՅՆ ԳՆՈՒՄՆԵՐԻ ՀԵՏ ՎԵՐԱԴԱՐՁ"
                    text="Օնլայն գնումների հետ վերադարձը կատարվում է վաճառողի կողմից տրամադրած 'Return Label'-ի միջոցով"
                />
            </div>

            <div className="export-to-USA-individual">
                <Heading heading="ԱՆՀԱՏԱԿԱՆ ՍԱԿԱԳՆԵՐ" />
                <div className="export-to-USA-individual-details">
                    <p>
                        Գործում են անհատական սակագներ՝ կախված ծանրոցների քաշից և
                        առաքումների պարբերականությունից:
                        <br /> Անհատական սակագին ստանալու համար կարող եք
                        զանգահարել <a href="tel:060 750 350">060 750 350</a> կամ
                        ուղարկել հարցում:
                        <br />
                        <br />
                    </p>
                    <p>
                        {" "}
                        <a href="#">ONEX PRIME MEMBER</a> կարգավիճակ ունեցող
                        օգտատերերի համար գործում է 20% զեղչ:{" "}
                    </p>
                    <Button buttonName="Ուղարկել հարցում" />
                </div>
            </div>

            <p className="text">
                Տեխնիկայի արտահանումը ժամանակավորապես դադարեցված է:
            </p>
        </div>
    );
};

export default ExportToUSA;
