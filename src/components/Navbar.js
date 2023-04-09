import React from 'react'
import './Navbar.css';
import logo from './LOGO_OF_RUHUNA.png'

export default function Navbar() {
  return (
    <nav className='nav'>
        <img src={logo} className='logo'/>
    <div className='nav.part'>
    <a href="#" className='brand'>STUDENT MANAGEMENT SYSTEM</a>
      <a href="#" className='brand1'>FACULTY OF ENGINEERING - UNIVERSITY OF RUHUNA</a>
    </div>
      
      <ul className='nav__menu'>
         
      </ul>
      <div className='nav__toggler'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}
