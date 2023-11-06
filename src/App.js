import React, {useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Body2 from './Components/Body';
import Footer from './Components/footer' 
import { TweenMax } from 'gsap/gsap-core';
import gsap from 'gsap';
import crs from './cursor.png'


function App() {
  useEffect(() => {
    const card = document.querySelector(".App");
    TweenMax.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);
  function Cur(){

document.addEventListener('mousemove', handleMouseMovement);

let circleX = 0;
let circleY = 0;

function updateCirclePosition(x, y) {
    gsap.to(".Minicircle", {
        x: x+30,
        y: y+20,
        duration: 0.3,
        ease: "power2.out"
    });
}

function handleMouseMovement(event) {
    const x = event.clientX;
    const y = event.clientY;
    const xOffset = -10;
    const yOffset = -10;

    circleX = x + xOffset;
    circleY = y + yOffset;

    updateCirclePosition(circleX, circleY);
}
  }
  
  return (
    <div className="App">
          <div className='Minicircle '>
            <img src={crs} alt="" srcset="" />
          </div>
      <Cur/>
      <Header   />
      <Body2 />
      <Footer />
    </div>
  );
}

export default App;
