import React from 'react'
import '../styles/button.css'
import icon from '../assets/icon-dice.svg'

const Button = () => {
  return (
    <div className='button'>
      <img src={icon} alt='dice' />
    </div>
  )
}

export default Button
