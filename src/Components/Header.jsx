import React from 'react';
import logo from '../Utils/GreenScapes.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {
  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className='Header'>
     <Link to="/" ><img src={logo} className='logo' alt='Logo' /></Link> 
      <ul>
      <li> <Link to="/Cart">Cart 🛒<span className='CartCounter'>{cartItems.length}</span></Link></li>
        <li><Link to="/About">About📋</Link></li>
        <li><Link to="/contact">Contact Us ☎️</Link></li>
        <li> <Link to="https://github.com/syed1israr/react_small_project.git">Source-Code 👻 </Link></li>
      </ul>
    </div>
  );
}

export default Header;
