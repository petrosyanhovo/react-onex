import { useState, useEffect } from 'react'
import './shops.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../../components/home/FamousShops/famousShops_img", false, /\.(png|jpe?g|svg)$/)
  );

const Shops = () => {

const [shops, setShops] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/shops')
      .then(response => response.json())
      .then(json => setShops(json));
    }, [])

  return (
    <div className='shops'>
        {
            shops.map(shop  => {
                return (
                    <div key = "shop.id" className="shops-content">
                        <a href = {shop.shopURL} target = "blank">
                            <div className="shop-card">
                                <div className="shop-card-image">
                                    <img src = {images[shop.image]} alt="" />
                                </div>
                                <p>{shop.name}</p>
                            </div>
                        </a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Shops