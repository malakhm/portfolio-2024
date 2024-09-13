import React from 'react'
import marker from '../Assets/marker.svg'
import './styles/sectionTitle.css'
const SectionTitle = ({ children }) => {
  return (
    <div className='Title-Underlined-main d-flex flex-column align-items-center justify-content-center'>
        <span>{ children }</span>
        <img src={marker} alt="marker" className='marker-svg px-5'/>
    </div>
  )
}

export default SectionTitle