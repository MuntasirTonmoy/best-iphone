import './Phone.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Phone = (props) => {
    //destructuring
    const {handleAddToCart, phone} = props;
    const {name, image, price} = phone;
    return (
        <div className='phone'>
            <img src={image} alt={name} />
            <p className='phone-name'>Name: Apple {name}</p>
            <p>Price: <strong>${price}</strong></p>
            <button onClick={() => handleAddToCart(phone)} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Phone;