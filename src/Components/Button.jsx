import React from 'react'
import './styles/button.css'

const Button = ({ children }) => {
  return (
    <button className='Button-main-component-class'>
       { children }
    </button>
  )
}

export default Button