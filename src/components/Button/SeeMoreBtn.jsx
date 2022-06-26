import React from 'react'
import './SeeMoreBtn.css'

const SeeMoreBtn = ({buttonName}) => {
  return (
        <button className='SeeMoreBtn'>{buttonName} <i className='fa fa-long-arrow-right'></i></button>
  )
}

export default SeeMoreBtn