import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={assets.logo} />
    <ul className='navbar-menu'>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact-us</li> 
    </ul>
      
    </div>
  )
}

export default Navbar
