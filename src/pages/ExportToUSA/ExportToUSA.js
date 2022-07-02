import React from 'react'
import './exportToUSA.css'
import Heading from '../../components/home/Heading/Heading'
import ExportToUSAImg from '../../components/home/Export/export_img/export_usa.jpg' 

const ExportToUSA = () => {

  return (
    <div className = "export-to-USA">

        <div className = "export-to-USA-header">
            <div className = "export-to-USA-header-title">
                <Heading heading = "ԲԵՌՆԵՐԻ ԱՐԱԳ ԱՌԱՔՈՒՄ" greenHeadingAfter = "ԴԵՊԻ ԱՄՆ" />
                <div className="export-to-USA-header-title-text1">
                  <i className='fa fa-check'></i>
                  <p>Փաստաթղթերի, ծանրոցների և բեռների առաքում ՀՀ-ից դեպի ԱՄՆ ցանկացած հասցե</p>
                </div>
                <div className="export-to-USA-header-title-text2">
                  <i className='fa fa-check'></i>
                  <p>Օնլայն գնումների վերադարձ</p>
                </div>

            </div>
            <div className = "export-to-USA-header-image">
                <img src={ExportToUSAImg} alt="" />
                <i class="fa fa-circle-phone"></i>
                <p>(+374) 60 750 350</p>
            </div>
        </div>   
    </div>
  )
}

export default ExportToUSA