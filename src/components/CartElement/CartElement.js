import './CartElement.css'
import React from 'react';

const CartElement = (props) => {
    return (
        <div>
            <p>{props.phone.name}</p>
        </div>
    );
};

export default CartElement;