import './Phone.css';
import React from 'react';

const Phone = (props) => {
    //destructuring
    const {name, image, price} = props.phone;
    return (
        <div className='phone'>
            <img src={image} alt={name} />
            <p className='phone-name'>Name: Apple {name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Phone;