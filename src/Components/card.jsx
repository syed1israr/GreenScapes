import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearCart } from '../Utils/Cart_Slice';
import { TweenMax } from 'gsap/gsap-core';

const Card = ({ name, description, image, review, price, time }) => {
  const [buttonText, setButtonText] = useState('Add To Cart');
  const dispatch = useDispatch();

  const handleAddItem = (event) => {
    dispatch(addItem({ name, price }));
    setButtonText('Added to Cart');

    const button = event.target;
    button.style.backgroundColor = 'white';
    button.style.color = 'green';
  };

  const handleClearCart = (event) => {
    dispatch(clearCart());
    alert('Cart is Emptied :/');
    setButtonText('Add To Cart');

    const buttons = document.querySelectorAll('.adder');
    for (const button of buttons) {
      button.classList.remove('added-to-cart');
      button.style.backgroundColor = '#20553A';
      button.style.color = 'wheat';
    }
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    TweenMax.fromTo(cards, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);

  return (
    <div className="card">
      <img className="ab" src={image} alt="Card Image" />
      <h2 className="title">{name}</h2>
      <p className="des">{description}</p>
      <div className="btn2">
        <button className="btn adder" onClick={handleAddItem}>
          {buttonText}
        </button>
        <button className="btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <div className="extra">
        <p>Price: {price}💰</p>
        <p>Reviews: {review}⭐</p>
        <p>{time}min</p>
      </div>
    </div>
  );
};

export default Card;
