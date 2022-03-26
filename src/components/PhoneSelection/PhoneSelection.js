import './PhoneSelection.css';
import React, { useState } from 'react';
import CartElement from '../CartElement/CartElement';
import Random from './Random/Random';

const PhoneSelection = (props) => {

    const [random, setRandom] = useState([]);
  
    const random1 = () => {
        const randomNumber = Math.floor(Math.random() * props.cart.length);
        setRandom(props.cart[randomNumber])
    
    }

     return (
        <div className='phone-selection'>
            {
                props.cart.map( phone => <CartElement phone={phone}
                ></CartElement>)
            }
            <Random random={random}></Random>
            <button onClick={random1}>Random</button>
           
        </div>
    );
};

export default PhoneSelection;