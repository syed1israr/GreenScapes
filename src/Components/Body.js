import '././App.css'
import Card from './card';
 import { restaurants } from '../Utils/List'; // Replace with the correct path to your data file
import { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap/gsap-core';

function Body2() {

  return (
    <div className='body2' >
      <input type="text" placeholder="Search Your Favorite Dish!" />
      <button className='btn1'>Search</button>
      <div className='Menu_tag'>
        {restaurants.map((restaurant) => (
          <Card 
            key={restaurant.id} // Ensure each card has a unique key
            name={restaurant.dishName}
            description={restaurant.description}
            image={restaurant.image}
            review={restaurant.review}
            price={restaurant.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Body2;