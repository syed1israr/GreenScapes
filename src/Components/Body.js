import '././App.css'
import Card from './card';
 import { restaurants } from '../Utils/List'; 


function Body2() {

  return (
    <div className='body2' >
      <input className='search' type="text" placeholder="Search Your Favorite Dish!" />
      <button className='btn1'>Search</button>
      <div className='Menu_tag'>
        {restaurants.map((restaurant) => (
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