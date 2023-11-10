import './App.css';
import { useEffect } from 'react';
import Card from './card';
import { restaurants } from '../Utils/List';
import { useState } from 'react';
import gsap from 'gsap';



function Body2() {
  
  useEffect(() => {
    const result=document.querySelectorAll(".No_result")
    gsap.fromTo(result, 0.5, { x: -120, opacity: 0 }, { x: 0, opacity: 1, delay: 0.5 });
  }, []);

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
          <div className="lala">
          <h4 className='No_result'>Chef is Busy Coding :)</h4>
          <h4 className='disappointment' >sorry for disappointment, we will get back to you soon💚💚</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body2;
