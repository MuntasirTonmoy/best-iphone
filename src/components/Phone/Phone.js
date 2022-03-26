import './Phone.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Phone = (props) => {
    //destructuring
    const {name, image, price} = props.phone;
    return (
        <div className='phone'>
            <img src={image} alt={name} />
            <p className='phone-name'>Name: Apple {name}</p>
            <p>Price: <strong>${price}</strong></p>
            <button className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Phone;