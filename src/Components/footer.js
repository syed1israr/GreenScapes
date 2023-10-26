import React from 'react';
import './App.css'


const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>Taste the flavors of the world!</h1>
              
                    </div>
                   
                    <div className="footer-contact">
                        <p>Thanks For Visiting Out Site!</p>
                        <address>
                            <p1>123 Main Street</p1>
                            <p1>City, State ZIP</p1>
                        </address>
                        <p>Call us: (123) 456-7890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
