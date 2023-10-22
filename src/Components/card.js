import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <img className='ab' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Card_Image" />
            <div className="card-content">
                <h2>Mix Vegitables</h2>
                <p>Mix Vegetables, often known as "Mixed Veg," is a versatile and wholesome dish that consists of an assortment of vegetables, each contributing its unique taste and nutritional value. These vegetables are carefully selected, sliced, and cooked to perfection, resulting in a vibrant and visually appealing dish.</p>
                <button className='btn'>Read More</button>
            </div>
        </div>
    );
};

export default Card;
