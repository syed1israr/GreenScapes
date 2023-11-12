import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearCart } from '../Utils/Cart_Slice';
import { TweenMax } from 'gsap/gsap-core';

const Card = ({ name, description, image, review, price, time }) => {
  const [buttonText, setButtonText] = useState('Add To Cart');
  const dispatch = useDispatch();
  const handleAddItem = (event) => {
    dispatch(addItem({ name, price }));
    setButtonText('Added to Cart');
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'green';
  };
  
  const handleClearCart = (event) => {
    dispatch(clearCart());
    alert('Cart is Emptied :/');
    setButtonText('Add To Cart'); 
    const buttons = document.querySelectorAll('.adder'); 
    buttons.forEach(button => button.classList.remove('added-to-cart')); 
    event.target.style.backgroundColor = 'rgb(32, 85, 58)';
    event.target.style.color = 'wheat';
  };
  
  

  useEffect(() => {
    const card = document.querySelectorAll('.card');
    TweenMax.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);

  return (
    <div className="card">
      <img className="ab" src={image} alt="Card_Image" />
      <h2 className="title  w-30 text-2xl  mx-4">{name}</h2>
      <p className="des px-5 text-sm  ">{description}</p>
      <div className="btn2">
        <button className="btn adder" onClick={handleAddItem}>
          {buttonText}
        </button>
        <button className="btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <div className="extra">
        <p>Price:-{price}💰</p>
        <p>Reviews:-{review}⭐</p>
        <p>{time}min</p>
      </div>
    </div>
  );
};

export default Card;