import React from 'react'
import './exportDocuments.css'
import ExportDocumentsImg from '../../components/home/Export/export_img/export-documents.png'
import Heading from '../../components/home/Heading/Heading'
import { useEffect } from 'react'

const ExportDocuments = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <div className='export-documents'>
        <div className="export-documents-header">
            <div className="export-documents-header-title">
                <Heading heading = "Փաստաթղթերի" greenHeadingAfter = "առաքում"/>
                <p>ՀՀ-ից դեպի աշխարհի ցանկացած կետ</p>
            </div>
            <div className="export-documents-header-image">
                <img src={ExportDocumentsImg} alt="" />
            </div>
        </div>

        <div className="export-document-colculator">
          <h4>ԱՌԱՔՄԱՆ ՀԱՇՎԻՉ</h4>
          <div className="export-document-details">
            <select name="" id="country">
              <option value="">- Արտահանման երկիր -</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select name="" id="weight">
              <option value="">- Փաստացի քաշ (կգ) -</option>
              <option value=""></option>
            </select>
          </div>
          <div className="export-document-conditions">
            <div className="export-cost">
              <p>Առաքման արժեք</p>
              <span>-</span>
              <p> դր</p>
            </div>
            <div className="export-duration">
              <p>Առաքման ժամկետ</p>
              <span>-</span>
              <p> աշխ. օր</p>
            </div>

          </div>
        </div>

    </div>
  )
}

export default ExportDocuments