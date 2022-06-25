import React from 'react'
import './smartLocker.css'
import Heading from '../Heading/Heading'
import Button from '../../Button/Button'

const SmartLocker = () => {
  return (
    <div className='smart-locker'>
        <div className="smart-locker-content">
            <Heading 
                greenHeading = 'ONEX' 
                heading = 'SMART LOCKER' 
                text = 'ONEX SMART LOCKER-ը Հայաստանում արտադրված առաջին SMART LOCKER-ն է։ Այն ամբողջությամբ մշակվել է մեր թիմի կողմից և նախատեսված է օնլայն գնումներն էլ ավելի հեշտ և արագ ստանալու համար։ Այս նորամուծության շնորհիվ օգտատերը կարող է ստանալ իր առաքանին իրեն հարմար ժամին՝ հարմար վայրից։ SMART LOCKER-ները տեղադրված են Մետրոպոլիտենի կայարաններում, սուպերմարկետներում, մոլերում, բիզնես կենտրոններում եւ այլն։'
            />
            <Button buttonName = 'Ավելին' />
        </div>
        <div className="smart-locker-video">
            {/* <video src={SmartWallVideo}></video> */}
        </div>
    </div>
  )
}

export default SmartLocker