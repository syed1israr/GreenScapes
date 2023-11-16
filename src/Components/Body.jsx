import '../styles/App.css'
import { useEffect } from 'react';
import Card from './card';
import { restaurants } from '../Utils/List';
import { useState } from 'react';
import gsap from 'gsap';



function Body2() {
  
useEffect(()=>{
  const buttons = document.querySelectorAll(".btn1");
  const bar = document.querySelector(".search");
  gsap.fromTo(
    buttons,
    {
      y: 20,
      opacity: 0,
      rotation: 0,
      scale: 0.5,
    },
    {
      opacity: 1,
      y: 0,
      rotation: 360,
      scale: 1,
      stagger: 0.2,
      duration: 1, // Longer duration for a smoother effect
      ease: "power4.out", // Use a power4 easing function for an elegant feel
    }
  );
    gsap.from(bar,{opacity:0, y: -50, duration:1})
    gsap.to(bar,{opacity:1, y:2, duration:1})
},[])

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
    <div className='body2 '>
      <input
        className='search opacity-0 mx-5'
        type="text"
        placeholder="Search Your Favorite Dish!"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
        <button className=" bg-green-500 px-2 py-2  mx-6  my-1 rounded-md shad btn1  hover:bg-red-400" onClick={filterRes}>
        Search
      </button>
      <button className="btn1 px-2 py-2 rounded bg-green-500  hover:bg-red-400" onClick={topRated}>
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
