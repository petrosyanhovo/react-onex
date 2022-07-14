import React, { useState, useEffect } from 'react'
import './topFilter.css'
import axios from 'axios';

const TopFilter = ({onInputChange, onChangeCountry, onClick}) => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
          images[item.replace("./", "")] = r(item);
        });
        return images;
      }
      
      const images = importAll(
        require.context("./shops_img", false, /\.(png|jpe?g|svg)$/)
      );

    const [country, setCountry] = useState([]);

    const loadCountries = async() => {
        const result = await axios.get( 'http://localhost:3000/countries' )
        setCountry(result.data);
        console.log(country);
      }

    useEffect(() => {
        loadCountries();
    }, [])


  return (
    
    <div className="top-filter">
    <div className="shops-top-filter-search-input">
        <input
            type="text"
            placeholder="Փնտրել"
            onChange={onInputChange}
        />
    </div>
    <div className="shops-top-filter-by-country">
        <ul className="countries">
            <li className="country">
                <a href="#" onClick={onClick}>
                    <div className="filter-country-content">
                        <i className="fa-solid fa-earth-americas"></i>
                        <span>Բոլորը</span>
                    </div>
                </a>
            </li>
            {
                    country.map((c) => {
                        return (
                            <li className="country" key={c.countryId}>
                            <input
                                type="checkbox"
                                id={c.country}
                                onChange={(e) => onChangeCountry(e)}
                            />
                            <label htmlFor={c.country}>
                                <div className="filter-country-content">
                                    <img src={images[c.countryImg]} alt="" />
                                    <span>{c.country}</span>
                                </div>
                            </label>
                                
                        </li>      
                        )
                    })
                }
        </ul>
    </div>
</div>
  )
}

export default TopFilter