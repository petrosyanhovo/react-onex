import React from "react";
import "./shippingPriceList.css";
import Heading from "../Heading/Heading";
import usa from "./shippingPriceList_img/usa.png";
import dubai from "./shippingPriceList_img/dubai.png";
import russia from "./shippingPriceList_img/russia.png";
import uk from "./shippingPriceList_img/uk.png";
import china from "./shippingPriceList_img/china.png";
const ShippingPriceList = () => {
  const data = [
    {
      country: "ԱՄՆ (օդային)",
      deliveryTime: "5 - 9 աշխ. օր",
      minimum: false,
      volumetricWeight: "եթե առկա չէ գերծավալային քաշ",
      price: "6.000 դր",
      img: usa,
      shipping: true,
    },
    {
      country: "ԱՄՆ (ծովային)",
      deliveryTime: "2 - 3 ամիս",
      minimum: "մինչև 10 կգ – 15.000 դր",
      volumetricWeight: "",
      price: "1.500 դր",
      img: usa,
      shipping: false,
    },
    {
      country: "Ռուսաստան (օդային)",
      deliveryTime: " 2 - 5 աշխ. օր",
      minimum: "մինչև 0.5 կգ – 1.000 դր",
      volumetricWeight: "եթե առկա չէ գերծավալային քաշ",
      price: "2.000 դր",
      img: russia,
      shipping: true,
    },
    {
      country: "Մեծ Բրիտանիա",
      deliveryTime: " 5 - 10 աշխ. օր",
      minimum: false,
      volumetricWeight: "եթե առկա չէ գերծավալային քաշ",
      price: "6.000 դր",
      img: uk,
      shipping: true,
    },
    {
      country: "Չինաստան (օդային)",
      deliveryTime: " 5 - 10 աշխ. օր",
      minimum: false,
      volumetricWeight: "եթե առկա չէ գերծավալային քաշ",
      price: "8.000 դր",
      img: china,
      shipping: true,
    },
    {
      country: "Չինաստան (ծովային)",
      deliveryTime: "≈ 2.5 ամիս",
      minimum: "մինչև 1 կգ – 1.500 դր",
      volumetricWeight: "",
      price: "1.500 դր",
      img: china,
      shipping: false,
    },
    {
      country: "Դուբայ",
      deliveryTime: "4 - 8 աշխ. օր",
      minimum: false,
      volumetricWeight: "եթե առկա չէ գերծավալային քաշ",
      price: "5.000 դր",
      img: dubai,
      shipping: true,
    },
  ];

  return (
    <div className="shippingpricelist">
      <Heading heading="ԴԵՊԻ ՀՀ ԱՌԱՔՄԱՆ ԵՂԱՆԱԿՆԵՐ ԵՎ ՍԱԿԱԳՆԵՐ" />
      <table>
        <thead>
          <tr>
            <th>ԵՐԿԻՐ</th>
            <th>ԱՌԱՔՄԱՆ ՏԵՎՈՂՈՒԹՅՈՒՆ</th>
            <th>ՄԻՆԻՄԱԼ</th>
            <th>ԾԱՎԱԼԱՅԻՆ ՔԱՇ</th>
            <th>ՍԱԿԱԳԻՆ (1ԿԳ)</th>
          </tr>
        </thead>

        {data.map((val, index) => {
          return (
            <tbody key={index}>
              <tr >
                <td>
                  <img src={val.img} alt = "" /> {val.country}
                </td>
                <td>
                  <i
                    className={"fas " + (val.shipping ? "fa-plane" : "fa-ship")}
                  ></i>
                  {val.deliveryTime}
                </td>
                <td>
                  {" "}
                  <i className={"fas " + (!val.minimum ? "fa-times" : "")}></i>
                  {val.minimum}
                </td>
                <td>
                  {" "}
                  <i
                    className={
                      "fas " + (val.volumetricWeight ? "fa-times" : "fa-check")
                    }
                  ></i>{" "}
                  {val.volumetricWeight}
                </td>
                <td>{val.price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShippingPriceList;
