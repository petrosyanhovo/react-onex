import { useState, useEffect } from "react";
import "./shopsPage.css";
import axios from "axios";
import Heading from "../../components/home/Heading/Heading";
import ShopsImg from "./shops_img/shops.png";
import Accordion from "./Accordion";
import Shops from "./Shops";
import TopFilter from "./TopFilter";

const ShopsPage = () => {
    const [shops, setShops] = useState([]);




    const loadShops = async() => {
      const result = await axios.get( 'http://localhost:3000/shops' )
      setShops(result.data);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        loadShops()
    }, []);

    const onChange = (e) => {
        if (e.target.checked) {
            let filteredBYCategory = shops.filter((shop) => {
                for (const cat of shop.category) {
                    if (cat === e.target.name) {
                        return true;
                    }
                }
            })
            setShops(filteredBYCategory);
            console.log(filteredBYCategory);
        } else {
            loadShops();
        }

        
    };

    // const [checked, setChecked] = useState([])

    // const onChange = (value) => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value)
    //     } else {
    //         newChecked.splice(currentIndex, 1)
    //     }
    //     console.log(newChecked);
    //     setChecked(newChecked)
    //     setShops(newChecked)
    // }


    const onChangeCountry = (e) => {
        if (e.target.checked) {
            setShops(shops.filter((shop) => shop.country === e.target.id  )) 
            // setShops(filteredByCountry);
            console.log(shops);

        } else {
            loadShops();
        }

    }


    const onInputChange = (e) => {
        setShops(shops.filter((shop) =>
        shop.name.toLowerCase().includes(e.target.value.toLowerCase())
    ))
        console.log(shops);
    };

    const onClick = (e) => {
        e.preventDefault();
        if (e.target.innerText === "Բոլորը") {
            loadShops()
        } else {
            setShops(shops.filter((shop) => shop.country === e.target.innerText)) 
        }
    }

    return (
        <div className="shops-page">
            <div className="shops-page-header">
                <div className="shops-header-title">
                    <Heading
                        heading="ԼԱՎԱԳՈՒՅՆ"
                        greenHeadingAfter="ԽԱՆՈՒԹՆԵՐ"
                        text="Գնիր աշխարհի լավագույն օնլայն խանութներից"
                    />
                </div>
                <div className="shops-header-image">
                    <img src={ShopsImg} alt="" />
                </div>
            </div>

            <TopFilter 
                onInputChange={onInputChange} 
                onChangeCountry={onChangeCountry} 
                onClick={onClick}
            />

            <div className="content">
                <Accordion onChange={onChange} />
                <Shops shops={shops} />
            </div>
        </div>
    );
};

export default ShopsPage;
