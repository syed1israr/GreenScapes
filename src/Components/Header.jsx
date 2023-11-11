import React from 'react';
import logo from '../Utils/GreenScapes.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {
  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className='flex flex-row justify-between w-full mx-12 bg-white  '>
     <Link to="/" ><img src={logo} className='logo mx-14 bg-white  h-48 w-48' alt='Logo' /></Link> 
      <ul className=' mx-14 flex align-middle justify-around bg-white my-5 '>
      <li className=' m-2 bg-white  '> <Link to="/Cart">Cart 🛒<span className='CartCounter text-green-200'>{cartItems.length}</span></Link></li>
        <li className=' m-2 bg-white  ' ><Link  to="/About" >About📋</Link></li>
        <li className=' m-2 bg-white  '> <Link to="/contact">Contact Us ☎️</Link></li>
        <li className=' m-2 bg-white  '> <Link to="https://github.com/syed1israr/react_small_project.git">Source-Code 👻 </Link></li>
      </ul>
    </div>
  );
}

export default Header;
