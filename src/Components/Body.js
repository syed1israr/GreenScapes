import '././App.css'
import Card from './card';
 import { restaurants } from '../Utils/List'; 
import { useState } from 'react';

//hooks are Js functions
function Body2() {
  const [Searchtext,setSearchtext]=useState("");
  const [filterdres,setfilterdres]=useState(restaurants);
function filterres(){
 const filterdData=   restaurants.filter((restaurants)=>restaurants.dishName.toLowerCase().includes(Searchtext.toLowerCase()));
 setfilterdres(filterdData);
 console.log(filterdData)
}
function toprated(){
  const topres=restaurants.filter((restaurants)=>restaurants.review>4)
  setfilterdres(topres)
}
  return (
    <div className='body2' >
      <input className='search' type="text" placeholder="Search Your Favorite Dish!" 
      onChange={(e)=> setSearchtext(e.target.value)}/>
      <button className='btn1'
      onClick={filterres}>Search</button>
      <button className='btn1' onClick={toprated}>Top 4⭐</button>
      <div className='Menu_tag'>
        {filterdres.map((restaurant) => (
          <Card  
            key={restaurant.id} 
            name={restaurant.dishName}
            description={restaurant.description}
            image={restaurant.image}
            review={restaurant.review}
            price={restaurant.price}
            time={restaurant.time}
          />
        ))}
      </div>
    </div>
  );
}

export default Body2;