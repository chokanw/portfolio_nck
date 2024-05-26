import React from 'react';
import './navbar.css';
import logo from '../public/assets/logo.png'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/about" className="desktopMenuListItem">About Me</Link>
        <Link to="/projects" className="desktopMenuListItem">Projects</Link>
        <Link to="services" className="desktopMenuListItem">Services</Link>
        <Link to="contact" className="desktopMenuListItem">Contact Me</Link>
      </div>
    </nav>
  )
}
export default Navbar
