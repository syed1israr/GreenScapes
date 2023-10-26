import React, {useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Body2 from './Components/Body';
import Footer from './Components/footer' 
import { TweenMax } from 'gsap/gsap-core';


function App() {
  useEffect(() => {
    const card = document.querySelector(".App");
    TweenMax.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);
  return (
    <div className="App">
      <Header   />
      <Body2 />
      <Footer />
    </div>
  );
}

export default App;
