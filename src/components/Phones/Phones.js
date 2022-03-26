import './Phones.css';
import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import PhoneSelection from '../PhoneSelection/PhoneSelection';

const Phones = () => {
    
    //get data by using useState and useEffect
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, []);

    const [cart, setCart] = useState([]);
    
    //passing the handler
    
    const handleAddToCart = (phone) => {
        const newCart = [...cart, phone];
       setCart(newCart);
    }

    const removeCart = (cart) => {
        cart = [];
        setCart(cart);
    }

    

   

    return (
        <div className='phones'>
            <div className='phones-container'>
                {
                    phones.map(phone => <Phone 
                        phone={phone} 
                        key={phone.id}
                        handleAddToCart={handleAddToCart}
                        ></Phone>)
                }
            </div>
            <div className='phone-selection-part'>
                <PhoneSelection 
                cart={cart}
                removeCart={removeCart}
                ></PhoneSelection>
            </div>
        </div>
    );
};

export default Phones;