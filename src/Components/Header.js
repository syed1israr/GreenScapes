import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

function Header() {
  const headeranim = useRef(null);

  useEffect(() => {
    const header = headeranim.current;

    const animateHeader = () => {
      TweenMax.fromTo(header, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
    };

    animateHeader();
  }, []); 

  return (
    <div className='Header' ref={headeranim}>
      <img src='https://th.bing.com/th/id/OIP.f1yF55MvfshmaqNiUUNnQQHaHa?w=194&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='logo' alt='Logo' />
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
