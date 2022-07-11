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

    </div>
  )
}

export default ExportDocuments