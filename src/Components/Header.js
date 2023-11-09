import React from 'react';
import logo from '../Utils/GreenScapes.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      <img src={logo} className='logo' alt='Logo' />
      <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="https://www.instagram.com/syed_isra.r/">Instagram</Link></li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
