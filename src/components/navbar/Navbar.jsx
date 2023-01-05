import React from 'react'
import './navbar.css'
import { RiMenu3line, RiCLoseLin } from 'react-icons'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar