import React from 'react';
import './App.css'


const Footer = () => {

    return (
        <footer class="footer">
        <div class="container">
         <div class="row">
           <div class="footer-col">
             <h4>company</h4>
             <ul>
               <li><a href="#">about us</a></li>
               <li><a href="#">our services</a></li>
               <li><a href="#">privacy policy</a></li>
               <li><a href="#">affiliate program</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>get help</h4>
             <ul>
               <li><a href="#">FAQ</a></li>
               <li><a href="#">shipping</a></li>
               <li><a href="#">returns</a></li>
               <li><a href="#">order status</a></li>
               <li><a href="#">payment options</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>online shop</h4>
             <ul>
               <li><a href="#">Rate Us</a></li>
               <li><a href="#">Franchise</a></li>
               <li><a href="#">location</a></li>
               <li><a href="#">Recipe Books</a></li>
             </ul>
           </div>
         </div>
        </div>
     </footer>
    );
};

export default Footer;
