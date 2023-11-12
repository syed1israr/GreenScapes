import React,{useEffect} from 'react';
import logo from '../Utils/GreenScapes.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import gsap  from 'gsap';

function Header() {
  const cartItems=useSelector((store)=>store.cart.items);
  useEffect(() => {
    const animation = document.querySelectorAll(".Anim_ref");
    gsap.to(animation, {y:20,opacity:1, duration:1,stagger:0.5})

  }, []);
  return (
    <div className='flex flex-row justify-between w-full mx-12 bg-white  '>
     <Link to="/" ><img src={logo} className='logo mx-14 bg-white  h-48 w-48 ' alt='Logo' /></Link> 
      <ul className=' mx-14 flex align-middle justify-around bg-white my-5 '>
      <li className=' m-2 bg-white  Anim_ref '> <Link to="/Cart">Cart 🛒<span className='CartCounter text-green-200'>{cartItems.length}</span></Link></li>
        <li className=' m-2 bg-white Anim_ref ' ><Link  to="/About" >About📋</Link></li>
        <li className=' m-2 bg-white  Anim_ref'> <Link to="/contact">Contact Us ☎️</Link></li>
        <li className=' m-2 bg-white Anim_ref '> <Link to="https://github.com/syed1israr/react_small_project.git">Source-Code 👻 </Link></li>
      </ul>
    </div>
  );
}

export default Header;
