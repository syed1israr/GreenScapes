import React, {useEffect } from 'react';
import { TweenMax} from 'gsap';


const Card = ({ name, description,image ,review,price,time}) => {
  useEffect(() => {
    const card = document.querySelector(".card");
    TweenMax.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);
  return (
    <div className="card"  >

      <img className='ab' src={image} alt="Card_Image" />
      <h2 className='title'>{name}</h2>
      <p className='des'>{description}</p>
      <div className='btn2'>
      <button className='btn'>Buy Now</button>
      <button className='btn'>Add To Cart</button>
      </div>
      <div className='Extra'>
      <p>Price:-{price}💰</p>
      <p>Reviews:-{review}⭐</p>
      <p>{time}min</p>
      
      </div>

    </div>
  );
};

export default Card;
