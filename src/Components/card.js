
import React from 'react';

const Card = ({ name, description,image ,review,price}) => {
  return (
    <div className="card">
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
