import './CartElement.css'
import React from 'react';

const CartElement = (props) => {
    const {selectedPhone} = props;

    return (
        <div className='selected-phone'>
            <img src={selectedPhone.image} alt="" /><p>{selectedPhone.name}</p>
        </div>
       
    );
};

export default CartElement;