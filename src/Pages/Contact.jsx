import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import plants from '../Assets/plants.svg'
import './styles/contact.css'

const Contact = () => {
  return (
    <div className='Contact-main-component-class'>
        <div className='Left-side d-flex flex-column align-items-start gap-3'>
            <div><SectionTitle>Let's Connect!</SectionTitle></div>
            <p>Want help? wanna see a demo? get in touch with me</p>
            <div className='Form-main-component-class d-flex flex-column gap-4 w-100'>
                <div className='d-flex flex-column w-100'>
                <label htmlFor='email'>Email</label>
                <input className='Input-field-class' type='email' id='email' placeholder='Enter your email'/>
                </div>
                <div className='d-flex flex-column w-100'>
                <label htmlFor='message'>Message</label>
                <textarea className='Input-field-class w-100' id='message' placeholder='Enter your message'/>
                </div>
            </div>
        </div>
        <div className='Right-side'>
            <img src={plants} alt='plants' style={{width:'100%', height:'100%'}}/>
        </div>
    </div>
  )
}

export default Contact