import React, { useEffect, useRef } from 'react';
import background from '../Utils/Waiting.png'
import gsap from 'gsap';

function Cart() {
  const imageAnim = useRef(null);

  useEffect(() => {
    gsap.to(imageAnim.current, 0.5, {
      y: 30,
      opacity: 1,
      delay: 0.5,
    },);
  }, [imageAnim]);

  return (
    <div className='bla'>
      <img src={background} alt="" srcset="" className='UnderConstruction_cart_message' ref={imageAnim} />
    </div>
  );
}

export default Cart;
