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
    event.target.style.backgroundColor = 'bg-green-500';
    event.target.style.color = 'white';
  };
  const handleClearCart = (event) => {
    dispatch(clearCart());
    setButtonText('Add To Cart'); 
    const buttons = document.querySelectorAll('.adder'); 
    buttons.forEach(buttons => buttons.classList.remove('added-to-cart')); 
   
  };
  useEffect(() => {
    const card = document.querySelectorAll('.card');
    TweenMax.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8   card">
     <img className="w-full h-48 object-cover object-center"  src={image} alt='zaruri tha' /> 
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      <div className="mb-2">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleAddItem}
        >
          {buttonText}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="text-sm text-gray-600">
        <p>Price: {price} 💰</p>
        <p>Reviews: {review} ⭐</p>
        <p>Delivery: {time} min</p>
      </div>
    </div>
  </div>
  );
};

export default Card;