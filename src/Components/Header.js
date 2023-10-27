import React from 'react';
import logo from './Logo.png'; // Corrected the import statement

function Header() {
  return (
    <div className='Header'>
      <img src={logo} className='logo' alt='Logo' /> {/* Used the 'logo' variable */}
      <ul>
        <li><a href="https://www.linkedin.com/in/syed-israr/">LinkedIn</a></li>
        <li><a href="https://github.com/syed1israr">Github</a></li>
        <li><a href="https://www.instagram.com/syed_isra.r/">Instagram</a></li>
        <li><a href="header.js">Facebook</a></li>
      </ul>
    </div>
  );
}

export default Header;
