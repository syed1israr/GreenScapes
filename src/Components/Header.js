import React from 'react';
import logo from '../Utils/GreenScapes.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
     <Link to="/" ><img src={logo} className='logo' alt='Logo' /></Link> 
      <ul>
        <li><Link to="/About">About📋</Link></li>
        <li><Link to="/contact">Contact Us ☎️</Link></li>
        <li> <Link to="/Cart">Cart 🛒</Link></li>
        <li> <Link to="https://github.com/syed1israr/react_small_project.git">Source-Code 👻 </Link></li>
      </ul>
    </div>
  );
}

export default Header;
