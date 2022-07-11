import { useState, useEffect } from 'react'
import './smartServicesMore.css'
import Heading from '../../components/home/Heading/Heading'
import SmartServicesImg from '../../components/home/SmartServices/smartServices_img/smart-service.png'
import SmartServicesUsageImg from '../SmartServicesMore/smartServicesMore_img/smart-services-usage-img.png'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../components/home/SmartServices/smartServices_img", false, /\.(png|jpe?g|svg)$/)
);

const SmartServicesMore = () => {

  const [smartServicesDesc, setSmartServicesDesc] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(json => setSmartServicesDesc(json));
  }, [])

  return (
    <div className='smart-services-more'>

      <div className="smart-services-more-head">
        <div className="smart-services-more-head-title">
          <Heading greenHeading = "SMART" heading = "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ" />
          <p>Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները</p>
        </div>
        <div className="smart-services-more-image">
          <img src={SmartServicesImg} alt="" />
        </div>
      </div>

    {
      smartServicesDesc.map((post, index) => {
        return ( 
          
      <div key = {index} className="smart-services-more-content">
        <div className="smart-services-more-row">
          <div className="smart-services-more-row-title">
            <div className="left">
              { <img src={images[post.imgURL]} alt = "" /> }
            </div>
            <div className="right">
              <h2>{post.title}</h2>
              <p>{post.price}</p>
            </div>
          </div>
          <div className="smart-services-more-row-detail">
            <p>{post.description}</p>
          </div>
        </div>
      </div>)
      })
    }
    <div className="smart-services-more-usage">
      <Heading />
      <p className='smart-services-more-usage-title'>ՕԳՏՎԵԼՈՒ ԿԱՐԳԸ</p>
      <p className='smart-services-more-usage-text'>Ձեր անձնական էջի <span className='green-text'>«ՊԱՏՎԵՐՆԵՐ»</span> բաժնի <span className='green-text'>«ՊԱՏՎԻՐՎԱԾ Է»</span> ենթաբաժնում անհրաժեշտ է ավելացնել
  սպասվող առաքանու տվյալները և նոր ստեղծված առաքանու համար ընտրել համապատասխան ծառայությունը</p>
      <img src={SmartServicesUsageImg} alt="" />
    </div>

    </div>
  )
}

export default SmartServicesMore