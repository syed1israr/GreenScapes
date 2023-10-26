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
               <li><a >about us</a></li>
               <li><a>our services</a></li>
               <li><a>privacy policy</a></li>
               <li><a>affiliate program</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>get help</h4>
             <ul>
               <li><a>FAQ</a></li>
               <li><a>shipping</a></li>
               <li><a>returns</a></li>
               <li><a>order status</a></li>
               <li><a>payment options</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>online shop</h4>
             <ul>
               <li><a>Rate Us</a></li>
               <li><a>Franchise</a></li>
               <li><a>location</a></li>
               <li><a>Recipe Books</a></li>
             </ul>
           </div>
         </div>
        </div>
     </footer>
    );
};

export default Footer;
