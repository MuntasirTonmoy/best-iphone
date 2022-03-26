import './SelectedPhones.css';
import React, { useState } from 'react';
import CartElement from '../CartElement/CartElement';
import Random from '../Random/Random';

const SelectedPhones = (props) => {
    const {cart,removeCart} = props;


    const [random, setRandom] = useState([]);
    const randomPhone = () => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        setRandom(cart[randomNumber]);
        removeCart(cart);
    
    }

     return (
        <div className='selected-phones'>
            <h2 className='text-center'>Selected Phones</h2>
            {
                cart.map( selectedPhone => <CartElement 
                    selectedPhone={selectedPhone}
                ></CartElement>)
            }
            <Random random={random}></Random>
           <p> <button className='btn' onClick={randomPhone}>Choose One for me</button></p>
            <button className='btn' onClick={() => removeCart(cart)}>Remove All</button>
           
        </div>
    );
};

export default SelectedPhones;