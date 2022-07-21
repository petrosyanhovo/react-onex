import React, { useState } from "react";
import "./exportDocuments.css";
import ExportDocumentsImg from "../../components/home/Export/export_img/export-documents.png";
import Heading from "../../components/home/Heading/Heading";
import { useEffect } from "react";
import { getExport } from '../../api';

const ExportDocuments = () => {

  const [exportDocValue, setExportDocValue] = useState([]);
  const exportWeights = [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  const [exportCountry, setExportCountry] = useState("");
  const [exportCost, setExportCost] = useState("");
  const [exportWeight, setExportWeight] = useState("");
  const [exportDate, setExportDate] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getExport().then(data => {
      setExportDocValue(data)
    })
  }, []);


  const getExportCountry = (e) => {
    for (let val of exportDocValue){
      if (val.country === e.target.value) {
        setExportCost(val.exportCost);
        setExportDate(val.exportDate)
      }
    }
  }

  const getExportWeight = (e) => {
    
  }

  return (
    <div className="export-documents">
      <div className="export-documents-header">
        <div className="export-documents-header-title">
          <Heading heading="Փաստաթղթերի" greenHeadingAfter="առաքում" />
          <p>ՀՀ-ից դեպի աշխարհի ցանկացած կետ</p>
        </div>
        <div className="export-documents-header-image">
          <img src={ExportDocumentsImg} alt="" />
        </div>
      </div>

      <div className="export-document-calculator">
        <h4>ԱՌԱՔՄԱՆ ՀԱՇՎԻՉ</h4>
        <div className="export-document-details">
          <select name="" id="country" onChange={(e) => getExportCountry(e)}>
            <option value="">- Արտահանման երկիր -</option>
            {
              exportDocValue.map(country => {
                return (
                  <option value={country.country} key={country.exportId}>{country.country}</option>
                )
              })
            }
          </select>
          <select name="" id="weight" onChange={(e) => setExportWeight(e.target.value)}>
            <option value="">- Փաստացի քաշ (կգ) -</option>
            {
              exportWeights.map((weight) => {
                return (
                  <option value={weight} key={weight} >{weight}</option>
                )
              })
            }
          </select>
        </div>
        <div className="export-document-conditions">
          <div className="export-cost">
            <p className="text-content">Առաքման արժեք</p>
            <span>{exportCost * exportWeight}</span>
            <label> դր</label>
          </div>
          <div className="export-duration">
            <p className="text-content">Առաքման ժամկետ</p>
            <span>{exportDate}</span>
            <label> աշխ. օր</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportDocuments;
