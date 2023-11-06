import './App.css';
import Card from './card';
import { restaurants } from '../Utils/List';
import { useState } from 'react';

function Body2() {
  const [searchText, setSearchText] = useState('');
  const [filteredRes, setFilteredRes] = useState(restaurants);

  function filterRes() {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.dishName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filteredData);
  }

  function topRated() {
    const topRes = restaurants.filter((restaurant) => restaurant.review > 4);
    setFilteredRes(topRes);
  }

  return (
    <div className='body2'>
      <input
        className='search'
        type="text"
        placeholder="Search Your Favorite Dish!"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className='btn1' onClick={filterRes}>
        Search
      </button>
      <button className='btn1' onClick={topRated}>
        Top 4⭐
      </button>
      <div className='Menu_tag'>
        {filteredRes.length > 0 ? (
          filteredRes.map((restaurant) => (
            <Card
              key={restaurant.id}
              name={restaurant.dishName}
              description={restaurant.description}
              image={restaurant.image}
              review={restaurant.review}
              price={restaurant.price}
              time={restaurant.time}
            />
          ))
        ) : (
          <h4>No results found</h4>
        )}
      </div>
    </div>
  );
}

export default Body2;
