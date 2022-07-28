import React from 'react'
import Logo from '../../../Assets/logo.jpeg'
import './Navbar.css'
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom'


const Navbar = () => {

  return (
    
    <div className='navbar'>
      <img src={Logo} className='logo'></img>
      <ul>
       
        <li> <Link to='/services' >Services offered</Link> </li>
        <li> <a href='/#contacts'>contacts</a> </li>
        
      </ul>

      

    </div>
  
  )
}

export default Navbar
