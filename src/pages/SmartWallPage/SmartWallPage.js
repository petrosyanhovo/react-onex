import React from 'react'
import './smartWallPage.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../SmartWallPage/smartWallPage_img", false, /\.(png|jpe?g|svg)$/)
  );

const SmartWallPage = () => {

  return (
    <div className="smart-wall-page">
        <img className='smart-wall-main-image' src={images["smartwall.png"]} alt="" />
        <div className="smart-wall-page-content">
            <p>Սիրով տեղեկացնում ենք Ձեզ, որ այսուհետ Ձեր առաքանիները Ցիտադել մասնաճյուղից կստանաք ONEX SMART WALL-ի միջոցով:</p>
            <p>Նորարարական լուծումներով, արհեստական բանականությամբ օժտված, առաքանիների արագ ստացման համակարգը, որը մշակել է ONEX-ի ծրագրավորման թիմը, BarCode-ի միջոցով իդենտիֆիկացնում է օգտատիրոջը և հանձնում բեռը։</p>
            <p>ONEX SMART WALL-ը տարբերվում է աշխարհում գործող նմանատիպ այլ լուծումներից իր նորարարություններով և ֆունկցիոնալությամբ։ Տվյալների վերլուծության միջոցով «խելացի պատը» կարողանում է բառացիորեն խոսել օգտատիրոջ հետ՝ տալով անհատական խորհուրդներ, ծանոթացնելով ONEX-ի նոր ծառայություններին և այլն։ Համակարգը ամեն օր օգտատերերից ստացած տվյալների շնորհիվ ավելի է կատարելագործվում եւ դառնում առավել խելացի:</p>
            <p>Այս ամենն անկասկած պատվերների ստացման գործընթացը կհամլրի հաճելի զգացողություններով։</p>
            <p>Մեր թիմն անում է հնարավորը Ձեզ լավագույն ծառայությունը մատուցելու համար: Շնորհակալ ենք, որ մեզ հետ եք:</p>
            <h2>ՕԳՏՎԵԼՈՒ ԿԱՐԳԸ</h2>
            <ol>
                <li>Համալրեք ONEX-ի Ձեր հաշիվը առցանց, տերմինալի միջոցով կամ տեղում կանխիկ եղանակով,</li>
                <li>ONEX-ի Ձեր անձնական էջում կամ բջջային հավելվածում սեղմելով «ՏԵՍՆԵԼ ԲԱՐԿՈԴԸ» կոճակը կստանաք Ձեր անհատական բարկոդը, որն անհրաժեշտ է սքանավորել ONEX SMART WALL-ում Ձեր առաքանիները ստանալու համար:</li>
                <div className="smart-wall-usage-images">
                    <img src={images["barcode1.png"]} alt="" />
                    <img src={images["barcode1.png"]} alt="" />
                </div>
            </ol>
        </div>
        <iframe width="560" height="450" 
            src="https://www.youtube.com/embed/tHlUncRVzjg" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        <div className="smart-wall-press-unit">
            <h2>Մամուլը մեր մասին   |</h2>
            <div className="smart-wall-press-list">
                <div className="smart-wall-press">
                    <a href="https://banks.am/am/news/newsfeed/16131" target="blank">
                        <img src={images["banks.png"]} alt="" />
                    </a>
                </div>
                <div className="smart-wall-press">
                    <a href="https://itel.am/am/news/10092" target="blank">
                        <img src={images["itel.png"]} alt="" />
                    </a>
                </div>
                <div className="smart-wall-press">
                    <a href="https://www.facebook.com/panarmenian.net/" target="blank">
                        <img src={images["pan.png"]} alt="" />
                    </a>
                </div>
                <div className="smart-wall-press">
                    <a href="https://www.vnews.am/" target="blank">
                        <img src={images["vivaro.png"]} alt="" />
                    </a>
                </div>
                <div className="smart-wall-press">
                    <a href="https://bravo.am/news/ONEX_%D5%AB__%D5%AD%D5%A5%D5%AC%D5%A1%D6%81%D5%AB_%D5%BA%D5%A1%D5%BF%D5%A8__%D5%AF%D5%AD%D5%B8%D5%BD%D5%AB_%D6%85%D5%A3%D5%BF%D5%A1%D5%BF%D5%AB%D6%80%D5%B8%D5%BB_%D5%B0%D5%A5%D5%BF_79478/" target="blank">
                        <img src={images["bravo.png"]} alt="" />
                    </a>
                </div>
                <div className="smart-wall-press">
                    <a href="https://www.armblog.net/2018/09/onex-smart-wall.html" target="blank">
                        <img src={images["armblog.png"]} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmartWallPage