import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Body2 from './Components/Body'
import Footer from './Components/footer';
import { gsap } from 'gsap';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';


const App =()=> {
  useEffect(() => {
    const card = document.querySelector('.App');
    gsap.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);

  function Cursor() {
    document.addEventListener('mousemove', handleMouseMovement);

    let circleX = 0;
    let circleY = 0;

    function updateCirclePosition(x, y) {
      gsap.to('.Minicircle', {
        x: x + 30,
        y: y + 20,
        duration: 0.3,
        ease: 'power2.out',
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

    return (
      <div className='Minicircle'>
      </div>
    );
  }

  return (  
   <>
     <div className="App">
     <Cursor />
     <Header />
      <Outlet/>
      <Footer />
    </div>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element :<Body2/>
      },
      {
        path :'/contact',
        element :<Contact/>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
