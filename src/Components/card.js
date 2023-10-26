import React, { useRef, useEffect } from 'react';
import { TweenMax,Power3 } from 'gsap';


const Card = ({ name, description,image ,review,price}) => {
  useEffect(() => {
    const card = document.querySelector(".card");
    TweenMax.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);
  return (
    <div className="card"  >
      {/* Your card content here */}
      <img className='ab' src={image} alt="Card_Image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className='btn2'>
      <button className='btn'>Buy Now</button>
      <button className='btn'>Add To Cart</button>
      <p>Price:-{price}💰</p>
      <p>Reviews:-{review}⭐</p>
    
      </div>

    </div>
  );
};

export default Card;
