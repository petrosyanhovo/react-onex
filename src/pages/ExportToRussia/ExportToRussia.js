import React from 'react'
import './exportToRussia.css'
import Heading from '../../components/home/Heading/Heading'
import ExportToRussiaImg from '../../components/home/Export/export_img/export_rus.jpg'
import Button from '../../components/Button/Button'
import { useEffect } from 'react'

const ExportToRussia = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <div className='export-to-russia'>

        <div className = "export-to-russia-header">
            <div className = "export-to-russia-header-title">
                <Heading heading = "ՓԱՍՏԱԹՂԹԵՐԻ, ԾԱՆՐՈՑՆԵՐԻ ԵՎ ԲԵՌՆԵՐԻ ԱՌԱՔՈՒՄ" greenHeadingAfter = "ՀՀ-ԻՑ ԴԵՊԻ ՌԴ ՑԱՆԿԱՑԱԾ ՀԱՍՑԵ" />
            </div>
            <div className = "export-to-russia-header-image">
                <img src={ExportToRussiaImg} alt="" />                
            </div>
        </div> 
        <h2 className='price'>ԳՆԱՑՈՒՑԱԿ</h2>
        <div className="export-to-russia-conditions-table">
        <table>
          <tr>
            <th>ԱՌԱՔՄԱՆ ԵՂԱՆԱԿ</th>
            <th>ՏԵՎՈՂՈՒԹՅՈՒՆ</th>
            <th>ՖԻՔՍՎԱԾ ՎՃԱՐ</th>
            <th>1 ԿԳ ՍԱԿԱԳԻՆ</th>
            <th>ՄԻՆԻՄԱԼ ԱՐԺԵՔ</th>
          </tr>
          <tr>
            <td>Էքսպրես</td>
            <td>մինչեւ 5 աշխ. օր (Մոսկվա) <br/>+ ՌԴ-ում օդային առաքման տեւողությունը</td>
            <td>5.000 դրամ</td>
            <td>2.000 դրամ</td>
            <td>մինչև 1կգ - 7,000 դրամ</td>
          </tr>
          <tr>
            <td>Էկոնոմ</td>
            <td>մինչեւ 5 աշխ. օր (Մոսկվա) <br/>+ ՌԴ-ում վերգետնյա առաքման տեւողությունը</td>
            <td>0</td>
            <td>1.500 դրամ</td>
            <td>մինչև 20կգ - 30,000 դրամ</td>
          </tr>
        </table>
        </div>

        {/* <div className="export-to-russia-conditions-div">
          <h2>ԳՆԱՑՈՒՑԱԿ</h2>
          <div className="export-to-russia-conditions">
            
          </div>
          <div className="export-to-russia-conditions-row">
            <h5>ԱՌԱՔՄԱՆ ԵՂԱՆԱԿ</h5>
            <h5>ՏԵՎՈՂՈՒԹՅՈՒՆ</h5>
            <h5>ՖԻՔՍՎԱԾ ՎՃԱՐ</h5>
            <h5>1 ԿԳ ՍԱԿԱԳԻՆ</h5>
            <h5>ՄԻՆԻՄԱԼ ԱՐԺԵՔ</h5>
          </div>
          <div className="export-to-russia-conditions-row">
            <h6>Էքսպրես</h6>
            <p>մինչեւ 5 աշխ. օր (Մոսկվա) <br/>
                + ՌԴ-ում օդային առաքման տեւողությունը</p>
            <p>5.000 դրամ</p>
            <p>2.000 դրամ</p>
            <p>մինչև 1կգ - 7,000 դրամ</p>
          </div>
          <div className="export-to-russia-conditions-row">
            <h6>Էկոնոմ</h6>
            <p>մինչեւ 5 աշխ. օր (Մոսկվա) <br/>
                + ՌԴ-ում վերգետնյա առաքման տեւողությունը</p>
            <p>0</p>
            <p>1.500 դրամ</p>
            <p>մինչև 20կգ - 30,000 դրամ</p>
          </div>
        </div> */}

        <div className="export-to-russia-calculation">
            <Heading heading = "ՔԱՇԻ ԵՎ ՍԱԿԱԳՆԻ ՀԱՇՎԱՐԿ" />
            <p className='calculation-text'>Քաշի հաշվարկման ժամանակ հաշվի է առնվում բեռի փաստացի և ծավալային քաշերից առավելագույնը:</p>
            <div className="export-to-russia-calculation-example">
                <div className="export-to-russia-calculation-example-price">
                    <p>Էքսպրես առաքման գնագոյացման օրինակ՝</p>
                    <p className='example-text1'>6կգ-ի համար 5.000 + 6 x 2.000 = 17.000 դրամ</p>
                </div> 
                <div className="export-to-russia-calculation-example-price">
                    <p>Էկոնոմ առաքման գնագոյացման օրինակ՝</p>
                    <p className='example-text2'>30կգ-ի համար 30 x 1.500 = 45.000 դրամ</p>
                </div> 
            </div>
            <p>100 կգ-ից ավել բեռների համար գործում են անհատական սակագներ</p>
            <Button buttonName = "Ուղարկել հարցում" />
        </div>

    </div>
  )
}

export default ExportToRussia